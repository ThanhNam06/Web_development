import { app, ensureBootstrapped } from "./app.js";

const port = Number.parseInt(process.env.PORT || "4000", 10);

async function startServer() {
  await ensureBootstrapped();

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`[backend] running on http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  // eslint-disable-next-line no-console
  console.error("Failed to bootstrap backend:", error);
  process.exit(1);
});
