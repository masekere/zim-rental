import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "@/config/db.js";
import { errorHandler } from "@/middlewares/error.middleware.js";
import authRoutes from "@/routes/auth.route.js";
import protectedRoutes from "@/routes/protected.route.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/", authRoutes);
app.use("/api/", protectedRoutes)

app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
