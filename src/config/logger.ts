// src/config/logger.ts
import pino from "pino";
import { env } from "./env";

export const logger = env.isDev
  ? pino({
      transport: {
        targets: [
          {
            target: "pino-pretty",
            options: {
              colorize: true
            }
          }
        ]
      }
    })
  : pino();
