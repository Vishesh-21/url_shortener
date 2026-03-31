import { nanoid } from "nanoid";
import { AppError } from "./error.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

//cookie options
export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const generateId = (length = 7) => {
  const id = nanoid(length);
  if (!id) throw new AppError("NanoId error!", 500);
  return id;
};

//function to hash password
export const hashPassword = async (password: string) => {
  if (!password) throw new AppError("Password is required", 400);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

//function to compare password
export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};


//function to hash refresh token
export const hashRefreshToken = (refreshToken: string): string => {
  if (!refreshToken) {
    throw new Error("Refresh token is required");
  }

  const hash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  return hash;
};