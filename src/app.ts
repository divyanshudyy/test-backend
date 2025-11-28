// src/app.ts
import { loadExpress } from "./loaders/express.loader";
import { loadRoutes } from "./loaders/routes.loader";
import { loadLogger } from "./loaders/logger.loader";

export function createApp() {
  const app = loadExpress();
  loadLogger(app);
  loadRoutes(app);
  return app;
}
