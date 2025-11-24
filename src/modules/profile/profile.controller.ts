// src/modules/profile/profile.controller.ts

import { Request, Response } from "express";
import { getProfileService } from "./profile.service";

export function getProfileController(req: Request, res: Response) {
  const profile = getProfileService();
  return res.json(profile);
}
