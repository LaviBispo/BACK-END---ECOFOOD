import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthTokenPayload extends JwtPayload {
  userId: number;
  restaurantId: number;
  name: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthTokenPayload;
    }
  }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;
  const bearerMatch = authorization?.match(/^Bearer\s+(\S+)$/i);

  if (!bearerMatch) {
    return res.status(401).json({ error: "Token não fornecido ou malformado" });
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    return res.status(500).json({ error: "JWT_SECRET não configurado" });
  }

  try {
    const decoded = jwt.verify(bearerMatch[1], jwtSecret);
    if (
      typeof decoded === "string" ||
      typeof decoded.userId !== "number" ||
      typeof decoded.restaurantId !== "number" ||
      typeof decoded.name !== "string" ||
      typeof decoded.email !== "string"
    ) {
      return res.status(401).json({ error: "Token inválido ou expirado" });
    }

    req.user = decoded as AuthTokenPayload;
    req.userId = decoded.userId;
    req.restaurantId = decoded.restaurantId;
    return next();
  } catch {
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
}