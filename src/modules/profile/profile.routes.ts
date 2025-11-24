// src/modules/profile/profile.routes.ts

import { Router } from "express";
import { getProfileController } from "./profile.controller";

const router = Router();

// GET /api/v1/profile
router.get("/", getProfileController);

export default router;
