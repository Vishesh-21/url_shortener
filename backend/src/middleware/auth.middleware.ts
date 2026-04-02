import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt.js";

export function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    // verify token
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({ error: "Invalid Token!" });
  }
}
