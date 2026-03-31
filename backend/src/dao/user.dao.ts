//function user by email

import { User } from "../models/user.modal.js";
import { AppError } from "../utils/error.js";

// function to create a new user
export async function createUser(
  name: string,
  email: string,
  password: string,
) {
  try {
    if (!name || !email || !password)
      throw new AppError("Name, email and password are required", 400);

    const newUser = new User({ name, email, password });

    await newUser.save();

    return newUser;
  } catch (error) {
    throw error;
  }
}

//function to get user by email
export async function getUserByEmail(email: string) {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
}

//function to get user by id
export async function getUserById(id: string) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
}
