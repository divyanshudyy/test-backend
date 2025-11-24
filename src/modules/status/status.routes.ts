import { Router } from "express";
import { statusController } from "./status.controller";

const router = Router();

// GET /api/status
router.get("/", statusController);

export default router;
