"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const auth_1 = require("../middlewares/auth");
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const { nome, endereco, telefone, email, cnpj, senha, } = req.body;
        if (!nome || !endereco || !telefone || !email || !cnpj || !senha) {
            return res.status(400).json({
                error: 'Preencha todos os campos',
            });
        }
        const usuarioExistente = await prismaClient_1.default.restauranteCadastro.findFirst({
            where: {
                OR: [{ email }, { cnpj }],
            },
        });
        if (usuarioExistente) {
            return res.status(409).json({
                error: 'Email ou CNPJ já cadastrado',
            });
        }
        const senhaHash = await bcrypt_1.default.hash(senha, 10);
        const usuario = await prismaClient_1.default.restauranteCadastro.create({
            data: {
                name: nome,
                password: senhaHash,
                endereco,
                telefone,
                email,
                cnpj,
            },
        });
        return res.status(201).json({
            mensagem: 'Restaurante cadastrado com sucesso',
            usuario: {
                id: usuario.id,
                name: usuario.name,
                email: usuario.email,
                cnpj: usuario.cnpj,
                telefone: usuario.telefone,
                endereco: usuario.endereco,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao cadastrar restaurante',
        });
    }
});
router.get('/', auth_1.authenticate, async (req, res) => {
    try {
        const usuarios = await prismaClient_1.default.restauranteCadastro.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                cnpj: true,
                telefone: true,
                endereco: true,
            },
        });
        return res.status(200).json(usuarios);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao buscar usuarios',
        });
    }
});
exports.default = router;
