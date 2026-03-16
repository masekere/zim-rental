import type { Request, Response } from "express"
import authService from "@/services/auth.service.js";

export const register = async (req: Request, res: Response) => {
    const userData = req.body;

    const user = await authService.registerUser(userData);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user
    })
}

export const login = async (req: Request, res: Response) => {
  const { token, user } = await authService.loginUser(req.body);

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });

  return res.json({
    success: true,
    user,
  })
}