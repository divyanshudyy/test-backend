import { Request, Response } from "express";
import { StatusService } from "./status.service";
import { logger } from "../../config/logger";

export const StatusController = {
  async list(_req: Request, res: Response) {
    const status = await StatusService.listStatus();
    logger.info("Fetching status list");
    res.json(status);
  },
};
