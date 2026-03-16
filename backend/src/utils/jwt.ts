import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: any;
  role: string;
}

export function generateAccessToken(payload: JwtPayload) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "15m",
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET as string);
}
