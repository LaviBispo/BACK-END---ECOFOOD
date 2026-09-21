"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const userRouter = (0, express_1.Router)();
userRouter.post('/', async (req, res) => {
    try {
        const { nome, endereco, telefone, email, cnpj } = req.body;
        if (!nome || !endereco || !telefone || !email || !cnpj) {
            return res.status(400).json({
                error: "Preencha todos os campos"
            });
        }
        const usuarioExistente = await prismaClient_1.default.restauranteCadastro.findFirst({
            where: {
                OR: [{ email }, { cnpj }],
            },
        });
        if (usuarioExistente) {
            return res.status(400).json({
                error: "Email ou cnpj já cadastrado",
            });
        }
        const usuario = await prismaClient_1.default.restauranteCadastro.create({
            data: {
                nome,
                endereco,
                telefone,
                email,
                cpf,
                cnpj,
            },
        });
        return res.status(201).json(usuario);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro ao registrar restaurante",
        });
    }
});
exports.default = userRouter;
