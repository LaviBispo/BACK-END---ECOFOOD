"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticate(req, res, next) {
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
        const decoded = jsonwebtoken_1.default.verify(bearerMatch[1], jwtSecret);
        if (typeof decoded === "string" ||
            typeof decoded.userId !== "number" ||
            typeof decoded.restaurantId !== "number" ||
            typeof decoded.name !== "string" ||
            typeof decoded.email !== "string") {
            return res.status(401).json({ error: "Token inválido ou expirado" });
        }
        req.user = decoded;
        req.userId = decoded.userId;
        req.restaurantId = decoded.restaurantId;
        return next();
    }
    catch {
        return res.status(401).json({ error: "Token inválido ou expirado" });
    }
}
