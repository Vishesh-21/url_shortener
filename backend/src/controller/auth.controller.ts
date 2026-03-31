import { Request, Response } from "express";
import { getUserByEmail, getUserById } from "../dao/user.dao.js";
import { createUserService } from "../services/user.services.js";

//function to register a new user
export async function registerController(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Name, email and password are required" });
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    //register user
    const newUser = await createUserService(name, email, password);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error });
  }
}

//to get current user details
export async function getMeController(req: Request, res: Response) {
  try {
    const { userId } = req.user;
    const user = await getUserById(userId);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
}
