import {StatusModel } from "./status.model";

export const StatusService = {
  async listStatus() {
    return StatusModel.find().lean();
  },
};
