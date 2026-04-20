import path from "node:path";
import { randomUUID } from "node:crypto";
import { Router } from "express";
import { z } from "zod";
import { ensureJsonFile, readJsonFile, writeJsonFile } from "../lib/jsonStore.js";
import { getSupabaseContext } from "../lib/supabase.js";
import { notifyNewLead } from "../lib/contactNotifier.js";

const leadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(150),
  service: z.string().max(100).optional().default(""),
  budget: z.string().max(100).optional().default(""),
  message: z.string().min(10).max(4000),
});

const runtimeDataRoot = process.env.DATA_DIR || path.resolve(process.cwd(), "data");
const leadsFilePath = path.resolve(runtimeDataRoot, "leads.json");

export const contactRouter = Router();

function buildLead(data) {
  return {
    id: randomUUID(),
    ...data,
    source: "website-contact-form",
    createdAt: new Date().toISOString(),
    status: "new",
  };
}

function mapLeadToSupabaseRow(lead) {
  return {
    id: lead.id,
    name: lead.name,
    email: lead.email,
    service: lead.service,
    budget: lead.budget,
    message: lead.message,
    source: lead.source,
    status: lead.status,
    created_at: lead.createdAt,
  };
}

function mapSupabaseRowToLead(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    service: row.service || "",
    budget: row.budget || "",
    message: row.message,
    source: row.source || "website-contact-form",
    createdAt: row.created_at,
    status: row.status || "new",
  };
}

function readableSupabaseError(error, table, reason) {
  if (error?.code === "42P01" || error?.code === "PGRST205") {
    return `Bảng '${table}' chưa tồn tại trên Supabase`;
  }
  if (error?.message) return error.message;
  if (error?.code) return `Supabase error code: ${error.code}`;
  if (reason) return `Supabase ${reason}`;
  return "Unknown Supabase error";
}

async function insertLeadSupabase(lead) {
  const { enabled, client, table } = getSupabaseContext();

  if (!enabled || !client) {
    return { ok: false, reason: "missing-supabase-env" };
  }

  const { error } = await client.from(table).insert([mapLeadToSupabaseRow(lead)]);

  if (error) {
    return { ok: false, reason: "supabase-insert-failed", error, table };
  }

  return { ok: true };
}

async function listLeadsSupabase() {
  const { enabled, client, table } = getSupabaseContext();

  if (!enabled || !client) {
    return { ok: false, reason: "missing-supabase-env" };
  }

  const { data, error } = await client
    .from(table)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return { ok: false, reason: "supabase-select-failed", error, table };
  }

  return {
    ok: true,
    items: (data || []).map(mapSupabaseRowToLead),
  };
}

async function insertLeadFile(lead) {
  await ensureJsonFile(leadsFilePath, []);
  const existingLeads = (await readJsonFile(leadsFilePath, [])) ?? [];
  existingLeads.unshift(lead);
  await writeJsonFile(leadsFilePath, existingLeads);
  return { ok: true };
}

async function listLeadsFile() {
  await ensureJsonFile(leadsFilePath, []);
  const existingLeads = (await readJsonFile(leadsFilePath, [])) ?? [];
  return { ok: true, items: existingLeads };
}

contactRouter.post("/", async (req, res) => {
  const parsed = leadSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Dữ liệu form không hợp lệ",
      errors: parsed.error.flatten(),
    });
  }

  const lead = buildLead(parsed.data);
  const { mode: contactStorageMode } = getSupabaseContext();

  if (contactStorageMode === "file") {
    await insertLeadFile(lead);
    const notifyResult = await notifyNewLead(lead);
    return res.status(201).json({
      message: "Gửi liên hệ thành công",
      leadId: lead.id,
      storage: "file",
      notification: notifyResult.ok ? "sent" : notifyResult.skipped ? "skipped" : "failed",
    });
  }

  if (contactStorageMode === "supabase") {
    const supabaseResult = await insertLeadSupabase(lead);

    if (!supabaseResult.ok) {
      return res.status(500).json({
        message: "Không thể lưu liên hệ lên Supabase",
        details: readableSupabaseError(supabaseResult.error, supabaseResult.table, supabaseResult.reason),
      });
    }

    const notifyResult = await notifyNewLead(lead);
    return res.status(201).json({
      message: "Gửi liên hệ thành công",
      leadId: lead.id,
      storage: "supabase",
      notification: notifyResult.ok ? "sent" : notifyResult.skipped ? "skipped" : "failed",
    });
  }

  const supabaseResult = await insertLeadSupabase(lead);
  if (supabaseResult.ok) {
    const notifyResult = await notifyNewLead(lead);
    return res.status(201).json({
      message: "Gửi liên hệ thành công",
      leadId: lead.id,
      storage: "supabase",
      notification: notifyResult.ok ? "sent" : notifyResult.skipped ? "skipped" : "failed",
    });
  }

  await insertLeadFile(lead);
  const notifyResult = await notifyNewLead(lead);
  return res.status(201).json({
    message: "Gửi liên hệ thành công",
    leadId: lead.id,
    storage: "file-fallback",
    warning: readableSupabaseError(supabaseResult.error, supabaseResult.table, supabaseResult.reason),
    notification: notifyResult.ok ? "sent" : notifyResult.skipped ? "skipped" : "failed",
  });
});

contactRouter.get("/", async (req, res) => {
  const apiKey = req.header("x-admin-key");
  if (!process.env.ADMIN_API_KEY || apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { mode: contactStorageMode } = getSupabaseContext();

  if (contactStorageMode === "file") {
    const fileResult = await listLeadsFile();
    return res.json({
      items: fileResult.items,
      total: fileResult.items.length,
      storage: "file",
    });
  }

  if (contactStorageMode === "supabase") {
    const supabaseResult = await listLeadsSupabase();

    if (!supabaseResult.ok) {
      return res.status(500).json({
        message: "Không thể đọc dữ liệu liên hệ từ Supabase",
        details: readableSupabaseError(supabaseResult.error, supabaseResult.table, supabaseResult.reason),
      });
    }

    return res.json({
      items: supabaseResult.items,
      total: supabaseResult.items.length,
      storage: "supabase",
    });
  }

  const supabaseResult = await listLeadsSupabase();
  if (supabaseResult.ok) {
    return res.json({
      items: supabaseResult.items,
      total: supabaseResult.items.length,
      storage: "supabase",
    });
  }

  const fileResult = await listLeadsFile();
  return res.json({
    items: fileResult.items,
    total: fileResult.items.length,
    storage: "file-fallback",
    warning: readableSupabaseError(supabaseResult.error, supabaseResult.table, supabaseResult.reason),
  });
});
