import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.js";

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
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({ error: "Invalid Token!" });
  }
}
