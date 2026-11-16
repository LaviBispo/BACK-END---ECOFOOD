"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const router = (0, express_1.Router)();
router.get("/", async (_req, res) => {
    try {
        const itens = await prismaClient_1.default.itemListaCompras.findMany({
            orderBy: {
                localArmazenamento: "asc"
            }
        });
        const grupos = {};
        for (const item of itens) {
            const local = item.localArmazenamento;
            if (!grupos[local]) {
                grupos[local] = [];
            }
            grupos[local].push(item);
        }
        return res.json({
            totalItens: itens.length,
            grupos
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const item = await prismaClient_1.default.itemListaCompras.findUnique({
            where: { id }
        });
        if (!item) {
            return res.status(404).json({
                error: "Item não encontrado"
            });
        }
        return res.json(item);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});
router.post("/", async (req, res) => {
    try {
        const { nome, categoria, localArmazenamento, quantidade, unidade, prioridade, restauranteId } = req.body;
        if (!nome || !categoria || !localArmazenamento || !restauranteId) {
            return res.status(400).json({
                error: "Nome, categoria, local de armazenamento e restauranteId são obrigatórios"
            });
        }
        const item = await prismaClient_1.default.itemListaCompras.create({
            data: {
                nome,
                categoria,
                localArmazenamento,
                quantidade,
                unidade,
                prioridade,
                restauranteId
            }
        });
        return res.status(201).json(item);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});
router.post("/gerar", async (req, res) => {
    try {
        const { restauranteId } = req.body;
        if (!restauranteId) {
            return res.status(400).json({
                error: "restauranteId é obrigatório"
            });
        }
        const produtosEsgotados = await prismaClient_1.default.produto.findMany({
            where: {
                restauranteId,
                status: "ESGOTADO"
            }
        });
        const itensExistentes = await prismaClient_1.default.itemListaCompras.findMany({
            where: { restauranteId },
            select: { nome: true }
        });
        const nomesNaLista = itensExistentes.map((item) => item.nome);
        const produtosNovos = produtosEsgotados.filter((produto) => !nomesNaLista.includes(produto.nome));
        if (produtosNovos.length === 0) {
            return res.json({
                criados: 0,
                mensagem: "Nenhum item novo para adicionar"
            });
        }
        const itensCriados = await Promise.all(produtosNovos.map((produto) => prismaClient_1.default.itemListaCompras.create({
            data: {
                nome: produto.nome,
                localArmazenamento: produto.localArmazenamento,
                categoria: produto.categoria,
                quantidade: produto.quantidade > 0
                    ? produto.quantidade
                    : 1,
                unidade: produto.unidade,
                restauranteId
            }
        })));
        return res.status(201).json({
            criados: itensCriados.length,
            itens: itensCriados
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { nome, categoria, localArmazenamento, quantidade, unidade, prioridade, comprado } = req.body;
        const item = await prismaClient_1.default.itemListaCompras.update({
            where: { id },
            data: {
                nome,
                categoria,
                localArmazenamento,
                quantidade,
                unidade,
                prioridade,
                comprado
            }
        });
        return res.json(item);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const item = await prismaClient_1.default.itemListaCompras.findUnique({
            where: { id }
        });
        if (!item) {
            return res.status(404).json({
                error: "Item não encontrado"
            });
        }
        await prismaClient_1.default.itemListaCompras.delete({
            where: { id }
        });
        return res.status(204).send();
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});
exports.default = router;
