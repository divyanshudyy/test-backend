// src/modules/profile/profile.routes.ts

import { Router } from "express";
import { ProfileController } from "./profile.controller";

const router = Router();

// GET /api/v1/profile
router.get("/", ProfileController.list);

export default router;
