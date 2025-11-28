// src/loaders/db.loader.ts
import { connectDatabase } from "../config/database";

export async function loadDatabase() {
  await connectDatabase();
}
