import { Router } from "express";
import statusRoutes from "../modules/status/status.routes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API running 1" });
});
router.use("/status", statusRoutes);

export default router;
