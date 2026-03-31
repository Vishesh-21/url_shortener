import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";
import { AppError } from "./error.js";

interface Prop {
  userId: string;
  sessionId?: string;
}

//function to generate access token using jwt
export function getAccessToken(
  { userId, sessionId }: Prop,
  options?: jwt.SignOptions,
) {
  const token = jwt.sign({ userId, sessionId }, ENV.JWT_SECRET!, {
    expiresIn: "15m",
    ...options,
  });

  return token;
}

//function to generate refresh token using jwt
export function getRefreshToken(userId: string, options?: jwt.SignOptions) {
  const token = jwt.sign({ userId }, ENV.JWT_SECRET!, {
    expiresIn: "7d",
    ...options,
  });

  return token;
}

//function to verify jwt token
export const verifyToken = (token: string) => {
  try {
    if (!token) throw new AppError("Token is required", 401);
    const decoded = jwt.verify(token, ENV.JWT_SECRET) as Prop;
    return decoded;
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
};
