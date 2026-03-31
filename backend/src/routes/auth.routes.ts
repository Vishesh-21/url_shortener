import { Router } from "express";
import {
  getMeController,
  loginController,
  logoutAllController,
  logoutController,
  refreshTokenController,
  registerController,
} from "../controller/auth.controller.js";
import { AuthMiddleware } from "../middleware/auth.middleware.js";

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @middleware None
 */
authRouter.post("/register", registerController);

/**
 * @route POST /api/auth/login
 * @desc Login user and return access token and refresh token
 * @access Public
 * @middleware None
 *
 */
authRouter.post("/login", loginController);

/**
 * @route GET /api/auth/get-me
 * @desc Get current user details
 * @access Private
 * @middleware AuthMiddleware
 */
authRouter.get("/get-me", AuthMiddleware, getMeController);

/**
 * @route GET /api/auth/refresh-token
 * @desc Get new access token using refresh token
 * @access Public
 * @middleware None
 *
 */
authRouter.get("/refresh-token", refreshTokenController);

/**
 * @route POST /api/auth/logout
 * @desc Logout user by invalidating refresh token
 * @access Private
 * @middleware AuthMiddleware
 */
authRouter.post("/logout", AuthMiddleware, logoutController);

/**
 * @route POST /api/auth/logout-all
 * @desc Logout user from all devices by invalidating all refresh tokens
 * @access Private
 * @middleware AuthMiddleware
 */
authRouter.post("/logout-all", AuthMiddleware, logoutAllController);

export default authRouter;
