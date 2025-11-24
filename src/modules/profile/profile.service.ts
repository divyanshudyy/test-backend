// src/modules/profile/profile.service.ts

export function getProfileService() {
  return {
    name: "John Doe",
    age: 28,
    role: "Admin",
    joined: new Date().toISOString(),
  };
}
