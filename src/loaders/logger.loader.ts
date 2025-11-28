// src/loaders/logger.loader.ts
import { Application } from "express";
import pinoHttp from "pino-http";
import { logger } from "../config/logger";

export function loadLogger(app: Application) {
  app.use(
    pinoHttp({
      logger,
      serializers: {
        req(req) {
          return {
            method: req.method,
            url: req.url,
          };
        },
        res(res) {
          return {
            statusCode: res.statusCode,
          };
        }
      },
      customSuccessMessage(req, res) {
        return `${req.method} ${req.url} → ${res.statusCode}`;
      },
      customErrorMessage(req, res, error) {
        return `${req.method} ${req.url} → ERROR: ${error.message}`;
      }
    })
  );
}
