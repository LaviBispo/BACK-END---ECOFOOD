"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const router = (0, express_1.Router)();
router.get('/:id', async (req, res) => {
    try {
        const produtoId = Number(req.params.id);
        if (!Number.isInteger(produtoId) || produtoId <= 0) {
            return res.status(400).json({
                error: 'ID do produto inválido'
            });
        }
        const produto = await prismaClient_1.default.produto.findUnique({
            where: {
                id: produtoId
            },
            select: {
                id: true,
                nome: true,
                quantidade: true,
                unidade: true,
                categoria: true,
                localArmazenamento: true,
                dataValidade: true,
                status: true,
                deuEntradaEm: true,
                atualizadoEm: true,
                restaurante: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        if (!produto) {
            return res.status(404).json({
                error: 'Produto não encontrado'
            });
        }
        return res.status(200).json(produto);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao buscar produto'
        });
    }
});
exports.default = router;
