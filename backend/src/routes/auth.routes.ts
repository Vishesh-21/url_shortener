import { Router } from "express";
import {
  getMeController,
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
 * Note: In a production application, you should implement additional validation and error handling for user registration. For example, you should check if the email is already in use, validate the email format, and enforce password strength requirements.
 */
authRouter.post("/register", registerController);

/**
 * @route GET /api/auth/get-me
 * @desc Get current user details
 * @access Private
 * @middleware AuthMiddleware
 * Note: In a production application, you should implement additional error handling for this route. For example, you should handle the case where the user ID from the token does not exist in the database, and return an appropriate error message.
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
  * Note: Since we are not storing refresh tokens in the database, we cannot invalidate them.
  * In a real application, you would store refresh tokens in the database and mark them as revoked on logout.
  * For this example, we will just clear the refresh token cookie on logout.
  * In a production application, you should implement a more robust token revocation strategy.
  * For example, you could store a token version in the database and include it in the JWT payload. On logout, you would increment the token version in the database, which would invalidate all existing tokens for that user.
 */
authRouter.post("/logout", AuthMiddleware, logoutController);

export default authRouter;
