// src/modules/profile/profile.controller.ts
import { Request, Response } from "express";
import { getProfileService } from "./profile.service";
import { logger } from "../../config/logger";

export function getProfileController(req: Request, res: Response) {
  const profile = getProfileService();
  logger.info("Fetching user profile");
  return res.json(profile);
}
