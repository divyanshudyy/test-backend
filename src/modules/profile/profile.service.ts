// src/modules/profile/profile.service.ts
import { ProfileModel } from "./profile.model";

export const ProfileService = {
  async listProfiles() {
    return ProfileModel.find().lean();
  }
};
