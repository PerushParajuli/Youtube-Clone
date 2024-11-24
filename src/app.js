import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

// Middlewares
app.use(cookieParser());
app.use(cors({ origin: process.env.CROS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));

export default app;
