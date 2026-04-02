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
  const token = jwt.sign({ userId, sessionId }, ENV.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
    ...options,
  });

  return token;
}

//function to generate refresh token using jwt
export function getRefreshToken(userId: string, options?: jwt.SignOptions) {
  const token = jwt.sign({ userId }, ENV.REFRESH_TOKEN_SECRET!, {
    expiresIn: "7d",
    ...options,
  });

  return token;
}

//function to verify jwt token
export const verifyAccessToken = (token: string) => {
  try {
    if (!token) throw new AppError("Token is required", 401);
    const decoded = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET) as Prop;
    return decoded;
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
};

export const verifyRefreshToken = (token: string) => {
  try {
    if (!token) throw new AppError("Token is required", 401);
    const decoded = jwt.verify(token, ENV.REFRESH_TOKEN_SECRET) as Prop;
    return decoded;
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
};
