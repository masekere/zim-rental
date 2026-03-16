import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// code

app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});