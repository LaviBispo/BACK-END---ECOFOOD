"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const { email, senha } = req.body;
        if (!email || !senha) {
            return res.status(400).json({
                error: "Preencha email e senha",
            });
        }
        const usuario = await prismaClient_1.default.restauranteCadastro.findUnique({
            where: {
                email,
            },
        });
        if (!usuario) {
            return res.status(404).json({
                error: 'Restaurante não encontrado',
            });
        }
        if (usuario.password !== senha) {
            return res.status(401).json({
                error: 'Senha incorreta',
            });
        }
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ error: 'JWT_SECRET não configurado' });
        }
        const token = jsonwebtoken_1.default.sign({
            userId: usuario.id,
            restaurantId: usuario.id,
            name: usuario.name,
            email: usuario.email,
        }, jwtSecret, { expiresIn: '8h' });
        return res.status(200).json({
            token,
            usuario: {
                id: usuario.id,
                name: usuario.name,
                email: usuario.email,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao fazer login',
        });
    }
});
router.get("/", auth_1.authenticate, async (req, res) => {
    try {
        const usuarios = await prismaClient_1.default.restauranteCadastro.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                cnpj: true,
                telefone: true,
                endereco: true,
            }
        });
        return res.status(200).json(usuarios);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro ao buscar usuarios",
        });
    }
});
exports.default = router;
