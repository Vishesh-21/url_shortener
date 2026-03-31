import { Router } from "express";
import {
  getMeController,
  registerController,
} from "../controller/auth.controller.js";
import { AuthMiddleware } from "../middleware/auth.middleware.js";

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post("/register", registerController);

/**
 * @route GET /api/auth/get-me
 * @desc Get current user details
 * @access Private
 * @middleware AuthMiddleware
 */
authRouter.get("/get-me", AuthMiddleware, getMeController);

export default authRouter;
