import express from "express";
import URLRouter from "./routes/url.routes.js";
import { globalErrorHandler } from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { cookieOptions } from "./utils/helper.js";

//create express app
const app = express();

/**
 * @swagger
 * definitions: Built in express middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

//routes
app.use("/api/auth", authRouter);
app.use("/api/urls", URLRouter);

/**
 * @swagger
 * /:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: A successful response
 */
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

//global error handler
app.use(globalErrorHandler);

export default app;
