import { createClient } from "@supabase/supabase-js";

let cachedClient = null;
let cachedFingerprint = "";

function readConfig() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const table = process.env.SUPABASE_LEADS_TABLE || "contact_leads";
  const mode = process.env.CONTACT_STORAGE_MODE || "hybrid";

  return {
    url,
    key,
    table,
    mode,
    enabled: Boolean(url && key),
  };
}

export function getSupabaseContext() {
  const config = readConfig();

  if (!config.enabled) {
    return {
      ...config,
      client: null,
    };
  }

  const fingerprint = `${config.url}|${config.key}`;
  if (!cachedClient || cachedFingerprint !== fingerprint) {
    cachedClient = createClient(config.url, config.key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    cachedFingerprint = fingerprint;
  }

  return {
    ...config,
    client: cachedClient,
  };
}

export async function checkSupabaseConnection() {
  const { enabled, client, table } = getSupabaseContext();

  if (!enabled || !client) {
    return {
      enabled: false,
      ok: false,
      reason: "missing-supabase-env",
    };
  }

  const { error } = await client.from(table).select("id").limit(1);

  if (!error) {
    return {
      enabled: true,
      ok: true,
      reason: "ok",
      table,
    };
  }

  if (error.code === "42P01" || error.code === "PGRST205") {
    return {
      enabled: true,
      ok: false,
      reason: "table-missing",
      table,
      error: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
    };
  }

  return {
    enabled: true,
    ok: false,
    reason: "query-failed",
    table,
    error: error.message,
    code: error.code,
    details: error.details,
    hint: error.hint,
  };
}
