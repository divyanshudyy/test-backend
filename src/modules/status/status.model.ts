import { mongoose } from "../../config/database";

const ProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);

export const ProfileModel = mongoose.model("Profile", ProfileSchema);
