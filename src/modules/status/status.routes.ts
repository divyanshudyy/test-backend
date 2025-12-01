import { Router } from "express";
import { StatusController } from "./status.controller";

const router = Router();

// GET /api/status
router.get("/", StatusController.list);

export default router;
