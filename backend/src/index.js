import path from "node:path";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { projectsRouter } from "./routes/projects.js";
import { metaRouter } from "./routes/meta.js";
import { contactRouter } from "./routes/contact.js";
import { ensureJsonFile } from "./lib/jsonStore.js";
import { checkSupabaseConnection, getSupabaseContext } from "./lib/supabase.js";

dotenv.config();

const app = express();
const port = Number.parseInt(process.env.PORT || "4000", 10);

const corsOrigin = process.env.CORS_ORIGIN?.split(",").map((x) => x.trim()).filter(Boolean) ?? [];

app.use(
  cors({
    origin: corsOrigin.length > 0 ? corsOrigin : true,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "devstudio-backend",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/meta", metaRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);

app.use((req, res) => {
  res.status(404).json({ message: `Cannot ${req.method} ${req.originalUrl}` });
});

async function bootstrap() {
  const leadsPath = path.resolve(process.cwd(), "data", "leads.json");
  await ensureJsonFile(leadsPath, []);

  const supabaseStatus = await checkSupabaseConnection();
  const { mode: contactStorageMode, enabled: supabaseEnabled, table: supabaseLeadsTable } =
    getSupabaseContext();
  // eslint-disable-next-line no-console
  console.log(
    `[backend] contact storage mode=${contactStorageMode} | supabaseEnabled=${supabaseEnabled} | table=${supabaseLeadsTable}`
  );
  // eslint-disable-next-line no-console
  console.log(`[backend] supabase status: ${JSON.stringify(supabaseStatus)}`);

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`[backend] running on http://localhost:${port}`);
  });
}

bootstrap().catch((error) => {
  // eslint-disable-next-line no-console
  console.error("Failed to bootstrap backend:", error);
  process.exit(1);
});
