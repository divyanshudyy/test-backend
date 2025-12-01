import { mongoose } from "../../config/database";

const StatusSchema = new mongoose.Schema(
  {
    service: { type: String, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

export const StatusModel = mongoose.model("Status", StatusSchema);
