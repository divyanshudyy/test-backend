// src/modules/user/user.model.ts
import { mongoose } from "../../config/database";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);
