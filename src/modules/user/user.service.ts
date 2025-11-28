// src/modules/user/user.service.ts
import { UserModel } from "./user.model";

export const UserService = {
  async listUsers() {
    return UserModel.find().lean();
  },
};
