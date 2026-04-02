import dotenv from "dotenv";

dotenv.config({quiet : true});

// check if environment variable is missing
const requiredEnv = (key: string, value?: string) => {
  if (!value) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }
  return value;
};


export const ENV = {
  PORT: process.env.PORT || "3000",
  MONGO_URI: requiredEnv("MONGO_URI", process.env.MONGO_URI),
  APP_URL : requiredEnv("APP_URL", process.env.APP_URL),
  ACCESS_TOKEN_SECRET : requiredEnv("ACCESS_TOKEN_SECRET", process.env.ACCESS_TOKEN_SECRET),
  REFRESH_TOKEN_SECRET : requiredEnv("REFRESH_TOKEN_SECRET", process.env.REFRESH_TOKEN_SECRET)
};