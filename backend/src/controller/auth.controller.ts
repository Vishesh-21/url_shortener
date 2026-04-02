import { Request, Response } from "express";
import { getUserByEmail, getUserById } from "../dao/user.dao.js";
import {
  createUserService,
  loginService,
  refreshTokenService,
} from "../services/user.services.js";
import { cookieOptions } from "../utils/helper.js";
import {
  logoutAllService,
  logoutService,
} from "../services/session.services.js";

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

    //create session for user and generate tokens
    const userAgent = req.get("User-Agent") || "Unknown";
    const ip = req.ip;

    //register user
    const data = await createUserService({
      name,
      email,
      password,
      userAgent,
      ip,
    });

    if (!data) {
      return res.status(500).json({ error: "Error creating user" });
    }

    if (!data.accessToken || !data.refreshToken) {
      return res.status(500).json({ error: "Error generating tokens" });
    }

    // Set refresh token in cookie
    res.cookie("refreshToken", data.refreshToken, cookieOptions);

    return res.status(201).json({
      user: data.user,
      accessToken: data.accessToken,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

//function to login user
export async function loginController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Required fields are missing!" });
    }

    const userAgent = req.get("User-Agent") || "Unknown";
    const ip = req.ip;

    const data = await loginService(email, password, userAgent, ip);

    if (!data || !data.accessToken || !data.refreshToken) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Set refresh token in cookie
    res.cookie("refreshToken", data.refreshToken, cookieOptions);

    return res.status(200).json({
      message: "Login successful",
      user: data.user,
      accessToken: data.accessToken,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

//refresh token controller
export async function refreshTokenController(req: Request, res: Response) {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    const data = await refreshTokenService(refreshToken);
    // Set new refresh token in cookie
    res.cookie("refreshToken", data.refreshToken, cookieOptions);
    return res.status(200).json({ accessToken: data.accessToken });
  } catch (error) {
    res.status(500).json({ error: "Invalid Token!" });
  }
}

//to get current user details
export async function getMeController(req: Request, res: Response) {
  try {
    const { userId } = req.user;
    const user = await getUserById(userId);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

//function to logout user
export async function logoutController(req: Request, res: Response) {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(400).json({ error: "Refresh token is required" });
    }

    const session = await logoutService(refreshToken);

    if (!session) {
      return res.status(500).json({ error: "Error logging out" });
    }

    res.clearCookie("refreshToken", cookieOptions);
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

//function to logout user from all devices
export async function logoutAllController(req: Request, res: Response) {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(400).json({ error: "Refresh token is required" });
    }

    const data = await logoutAllService(refreshToken);

    if (!data) {
      return res
        .status(500)
        .json({ error: "Error logging out from all devices" });
    }

    res.clearCookie("refreshToken", cookieOptions);
    return res
      .status(200)
      .json({ message: "Logout from all devices successful" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
