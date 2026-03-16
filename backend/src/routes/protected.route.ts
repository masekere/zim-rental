import express, { Router } from "express";
import { authenticate } from "@/middlewares/auth.middleware.js";
import type { Response } from "express";
import type { AuthRequest } from "@/middlewares/auth.middleware.js";

const router: Router = express.Router();

router.get("/profile", authenticate, (req: AuthRequest, res: Response) => {
  res.json({
    message: "Protected data",
    user: req.user,
  });
});

export default router;
