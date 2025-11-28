import { Request, Response } from "express";
import { getServiceStatus } from "./status.service";
import { logger } from "../../config/logger";

export function statusController(req: Request, res: Response) {
  const data = getServiceStatus();
  logger.info("Fetching service status");
  res.json(data);
}
