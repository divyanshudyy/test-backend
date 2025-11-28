// src/modules/user/user.controller.ts
import { Request, Response } from "express";
import { UserService } from "./user.service";
import { logger } from "../../config/logger";

export const UserController = {
  async list(_req: Request, res: Response) {
    const users = await UserService.listUsers();
    logger.info("Fetching users list");
    res.json(users);
  },
};
