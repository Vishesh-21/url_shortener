import { findSessionByRefreshTokenHash } from "../dao/session.dao.js";
import { createUser, getUserById } from "../dao/user.dao.js";
import { AppError } from "../utils/error.js";
import { hashPassword, hashRefreshToken } from "../utils/helper.js";
import { getAccessToken, getRefreshToken, verifyToken } from "../utils/jwt.js";
import { createSessionService } from "./session.services.js";

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  userAgent: string;
  ip: string | undefined;
}

//function to register a new user
export const createUserService = async ({
  name,
  email,
  password,
  userAgent,
  ip,
}: CreateUserDTO) => {
  if (!name || !email || !password)
    throw new AppError("Name, email and password are required", 400);

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create new user
  const newUser = await createUser(name, email, hashedPassword);

  // Generate tokens
  const refreshToken = getRefreshToken(newUser.id);

  // Create session
  const session = await createSessionService({
    userId: newUser.id,
    refreshToken,
    userAgent,
    ip,
  });

  // Generate access token with session ID and user ID
  const accessToken = getAccessToken({
    userId: newUser.id,
    sessionId: session.id,
  });

  return {
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    },
    accessToken,
    refreshToken,
  };
};

//function to get user details
export const getMeService = async (userId: string) => {
  if (!userId) throw new AppError("User ID is required", 400);
  const user = await getUserById(userId);
  if (!user) throw new AppError("User not found", 404);
  return user;
};

//function to refresh access token
export const refreshTokenService = async (refreshToken: string) => {
  if (!refreshToken) throw new AppError("Refresh token is required", 400);

  const decoded = verifyToken(refreshToken);

  if (!decoded || !decoded.userId)
    throw new AppError("Invalid refresh token", 401);

  //find session by refresh token hash and check if it's revoked
  const refreshTokenHash = hashRefreshToken(refreshToken);

  const session = await findSessionByRefreshTokenHash(refreshTokenHash);
  if (!session || session.revoked) {
    throw new AppError("Invalid refresh token!", 401);
  }

  const newRefreshToken = getRefreshToken(decoded.userId);
  const newAccessToken = getAccessToken({
    userId: decoded.userId,
  });

  const newRefreshTokenHash = hashRefreshToken(newRefreshToken);

  // Update session with new refresh token hash
  session.refresh_token_hash = newRefreshTokenHash;
  await session.save();

  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};
