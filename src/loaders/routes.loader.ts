// src/loaders/routes.loader.ts
import { Application } from "express";
import router from "../routes";

export function loadRoutes(app: Application) {
  app.use("/api/v1", router);
}
