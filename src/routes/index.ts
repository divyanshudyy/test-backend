// src/routes/index.ts
import { Router } from "express";
import statusRoutes from "../modules/status/status.routes";
import profileRoutes from "../modules/profile/profile.routes";
import userRoutes from "../modules/user/user.routes";
import { logger } from "../config/logger";

const router = Router();

router.get("/", (req, res) => {
  logger.info("Fetching API response");
  res.json({ message: "API Running" });
});

router.use("/status", statusRoutes);
router.use("/profile", profileRoutes);
router.use("/users", userRoutes);

export default router;
