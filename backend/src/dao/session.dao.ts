import sessionModel from "../models/session.model.js";
import { AppError } from "../utils/error.js";

//create session prop
interface CreateSessionDTO {
  userId: string;
  refreshTokenHash: string;
  userAgent: string;
  ip?: string;
}

//function to create session for a user
export const createSession = async ({
  userId,
  refreshTokenHash,
  userAgent,
  ip,
}: CreateSessionDTO) => {
  try {
    const session = await sessionModel.create({
      user: userId,
      refresh_token_hash: refreshTokenHash,
      user_agent: userAgent || "Unknown",
      ip: ip || "Unknown",
    });

    return session;
  } catch (error) {
    throw new AppError("Error creating session", 500);
  }
};

//function to find the refresh token in the database with revoked false
export const findSessionByRefreshTokenHash = async (
  refreshTokenHash: string,
) => {
  try {
    const session = await sessionModel.findOne({
      refresh_token_hash: refreshTokenHash,
      revoked: false,
    });
    return session;
  } catch (error) {
    throw new AppError("Error finding session", 500);
  }
};

//function to logout user from all devices by invalidating all refresh tokens
export const revokedAllRefreshTokens = async (userId: string) => {
  try {
    const revokedSessions = await sessionModel.updateMany(
      { user: userId, revoked: false },
      { revoked: true },
    );
    return revokedSessions.modifiedCount > 0;
  } catch (error) {
    throw new AppError("Error getting session", 500);
  }
};
