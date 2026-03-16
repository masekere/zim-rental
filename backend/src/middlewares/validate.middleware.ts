import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";

export const validate = (schema: ZodType) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      const result = schema.parse(req.body);

      req.body = result;

      next();
    } catch (err) {
      next(err);
    }
  };
};