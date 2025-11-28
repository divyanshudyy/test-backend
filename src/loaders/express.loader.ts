// src/loaders/express.loader.ts
import express from "express";
import cors from "cors";
import { corsOptions } from "../config/cors.config";

export function loadExpress() {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cors(corsOptions));

  return app;
}
