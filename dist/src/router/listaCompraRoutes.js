"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const router = (0, express_1.Router)();
router.get("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const restauranteId = req.user?.restaurantId;
        if (!Number.isInteger(id) || id <= 0 || !restauranteId) {
            return res.status(400).json({ error: "ID ou restaurante inválido" });
        }
        const item = await prismaClient_1.default.itemListaCompras.findFirst({
            where: {
                id,
                restauranteId
            }
        });
        if (!item) {
            return res.status(404).json({ error: "Item não encontrado" });
        }
        return res.json(item);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const item = await prismaClient_1.default.itemListaCompras.findUnique({
            where: { id }
        });
        if (!item || item.restauranteId !== req.restaurantId) {
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
        const { nome, categoria, localArmazenamento, quantidade, unidade, prioridade } = req.body;
        if (!nome || !categoria || !localArmazenamento) {
            return res.status(400).json({
                error: "Nome, categoria e local de armazenamento são obrigatórios"
            });
        }
        const quantidadeNum = quantidade === undefined ? 1 : Number(quantidade);
        if (!Number.isFinite(quantidadeNum) || quantidadeNum <= 0) {
            return res.status(400).json({
                error: "quantidade deve ser maior que zero"
            });
        }
        const item = await prismaClient_1.default.itemListaCompras.create({
            data: {
                nome: String(nome).trim(),
                categoria,
                localArmazenamento: String(localArmazenamento).toUpperCase(),
                quantidade: quantidadeNum,
                unidade: unidade || "un",
                prioridade: prioridade === true,
                restauranteId: req.restaurantId
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
router.put("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { nome, categoria, localArmazenamento, quantidade, unidade, prioridade, comprado } = req.body;
        const existente = await prismaClient_1.default.itemListaCompras.findUnique({
            where: { id }
        });
        if (!existente || existente.restauranteId !== req.restaurantId) {
            return res.status(404).json({
                error: "Item não encontrado"
            });
        }
        const item = await prismaClient_1.default.itemListaCompras.update({
            where: { id },
            data: {
                nome,
                categoria,
                localArmazenamento: localArmazenamento
                    ? String(localArmazenamento).toUpperCase()
                    : undefined,
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
        const restauranteId = req.user?.restaurantId;
        if (!Number.isInteger(id) || id <= 0 || !restauranteId) {
            return res.status(400).json({ error: "ID ou restaurante inválido" });
        }
        const item = await prismaClient_1.default.itemListaCompras.findFirst({
            where: {
                id,
                restauranteId
            }
        });
        if (!item) {
            return res.status(404).json({ error: "Item não encontrado" });
        }
        await prismaClient_1.default.itemListaCompras.delete({
            where: { id: item.id }
        });
        return res.status(204).send();
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});
exports.default = router;
