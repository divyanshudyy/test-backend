// src/server.ts
import { env } from "./config/env";
import { loadDatabase } from "./loaders/db.loader";
import { createApp } from "./app";
import { logger } from "./config/logger";

async function startServer() {
  await loadDatabase();
  const app = createApp();

  app.listen(env.port, () => {
    logger.info(`Server running on port ${env.port}`);
  });
}

startServer();
