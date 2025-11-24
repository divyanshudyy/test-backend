import { Router } from "express";
import statusRoutes from "../modules/status/status.routes";
import profileRoutes from "../modules/profile/profile.routes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API running 1" });
});
router.use("/status", statusRoutes);
router.use("/profile", profileRoutes);

export default router;
