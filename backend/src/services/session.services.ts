import {
  createSession,
  findSessionByRefreshTokenHash,
  revokedAllRefreshTokens,
} from "../dao/session.dao.js";
import { AppError } from "../utils/error.js";
import { hashRefreshToken } from "../utils/helper.js";
import { verifyRefreshToken } from "../utils/jwt.js";

interface SessionProps {
  userId: string;
  refreshToken: string;
  userAgent: string;
  ip?: string;
}

export const createSessionService = async ({
  userId,
  refreshToken,
  userAgent,
  ip,
}: SessionProps) => {
  try {
    if (!userId || !refreshToken || !userAgent)
      throw new AppError(
        "User ID, refresh token hash and user agent are required",
        400,
      );

    const refreshTokenHash = hashRefreshToken(refreshToken);

    const newSession = await createSession({
      userId,
      refreshTokenHash,
      userAgent,
      ip,
    });

    return newSession;
  } catch (error) {
    throw new AppError("Error creating session", 500);
  }
};

//function to logout user by invalidating refresh token
export const logoutService = async (refreshToken: string) => {
  try {
    if (!refreshToken)
      throw new AppError("Refresh token hash is required", 400);
    const refreshTokenHash = hashRefreshToken(refreshToken);
    //find session by refresh token hash
    const session = await findSessionByRefreshTokenHash(refreshTokenHash);

    if (!session) throw new AppError("Invalid refresh token", 401);

    //mark session as revoked
    session.revoked = true;
    await session.save();
    return session;
  } catch (error) {
    throw new AppError("Error getting session", 500);
  }
};

//function to logout user from all devices by invalidating all refresh tokens
export const logoutAllService = async (refreshToken: string) => {
  try {
    if (!refreshToken)
      throw new AppError("Refresh token hash is required", 400);

    const decode = verifyRefreshToken(refreshToken);

    if (!decode || typeof decode === "string")
      throw new AppError("Invalid refresh token", 401);

    const revokedAllSessions = await revokedAllRefreshTokens(decode.userId);

    return revokedAllSessions;
  } catch (error) {
    throw new AppError("Error getting session", 500);
  }
};
