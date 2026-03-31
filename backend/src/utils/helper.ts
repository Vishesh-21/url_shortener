import { nanoid } from "nanoid";
import { AppError } from "./error.js";
import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import mongoose from "mongoose";
import { ENV } from "../config/env.js";

//// Define a proper payload interface
interface JwtPayload {
  userId: string | mongoose.Types.ObjectId;
  email?: string;
}

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

//function to generate jwt token
export const generateToken = (payload: JwtPayload, options?: SignOptions) => {
  const token = jwt.sign(payload, ENV.JWT_SECRET, {
    expiresIn: "1h",
    ...options,
  });
  return token;
};

//function to verify jwt token
export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, ENV.JWT_SECRET) as JwtPayload;
  return decoded;
};
