import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

const app = express();

// Middlewares
app.use(cookieParser());
app.use(cors({ origin: process.env.CROS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));

// Import routes
app.use("/api/v1/users", userRouter);

export default app;
