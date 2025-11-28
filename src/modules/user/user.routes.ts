// src/modules/user/user.routes.ts
import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.get("/", UserController.list);

export default router;
