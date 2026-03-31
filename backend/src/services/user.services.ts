import { createUser, getUserById } from "../dao/user.dao.js";
import { AppError } from "../utils/error.js";
import { generateToken, hashPassword } from "../utils/helper.js";

//function to register a new user
export const createUserService = async (
  name: string,
  email: string,
  password: string,
) => {
  if (!name || !email || !password)
    throw new AppError("Name, email and password are required", 400);

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create new user
  const newUser = await createUser(name, email, hashedPassword);

  //generate token
  const token = generateToken({ userId: newUser._id });

  return {
    name: newUser.name,
    email: newUser.email,
    token,
  };
};

//function to get user details
export const getMeService = async (userId: string) => {
  if (!userId) throw new AppError("User ID is required", 400);
  const user = await getUserById(userId);
  if (!user) throw new AppError("User not found", 404);
  return user;
};
