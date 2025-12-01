// src/modules/profile/profile.controller.ts
import { Request, Response } from "express";
import { ProfileService } from "./profile.service";
import { logger } from "../../config/logger";

// export function getProfileController(req: Request, res: Response) {
//   const profile = await ProfileService.listProfiles();
//   logger.info("Fetching user profile");
//   console.log(profile);
//   return res.json(profile);
// }
export const ProfileController = {
  async list(_req: Request, res: Response) {
    const profile = await ProfileService.listProfiles();
    logger.info("Fetching user profile");
    return res.json(profile);
  },
};
