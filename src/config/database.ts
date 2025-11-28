// src/config/database.ts
import mongoose from "mongoose";
import { env } from "./env";

export async function connectDatabase() {
  try {
    await mongoose.connect(env.mongoUri, {
      dbName: env.dbName  
    });

    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); 
  }
}

export { mongoose };
