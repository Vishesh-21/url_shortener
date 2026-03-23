import mongoose from "mongoose";
import { ENV } from "./env.js";
let isConnect = false;



// connect to DB
export const connectDB = async (): Promise<void> => {
  if (isConnect) {
    return;
  }
  try {
    if (!ENV.MONGO_URI) {
      throw new Error("Mongo URI is missing");
    }

    const db = await mongoose.connect(ENV.MONGO_URI);
    isConnect = db.connections[0].readyState === 1;

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // stop app if DB fails
  }
};
