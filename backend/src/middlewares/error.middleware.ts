import type { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let message = "Internal Server Error";
  let statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message
  });
};