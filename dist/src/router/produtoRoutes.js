"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const router = (0, express_1.Router)();
//lista todos os produtos
router.get("/", async (req, res) => {
    try {
        const produtos = await prismaClient_1.default.produto.findMany();
        res.json(produtos);
    }
    catch (error) {
        res.status(500).json({ error: "erro interno do servidor" });
    }
});
//busca produto por id
router.get("/:id", async (req, res) => {
    try {
        const produto = await prismaClient_1.default.produto.findUnique({
            where: { id: Number(req.params.id) }
        });
        if (!produto) {
            return res.status(404).json({ error: "produto nao encontrado" });
        }
        res.json(produto);
    }
    catch (error) {
        res.status(500).json({ error: "erro interno do servidor" });
    }
});
//cria um novo produto
router.post("/", async (req, res) => {
    try {
        const { nome, categoria, localArmazenamento, codigoBarras, quantidade, unidade, dataValidade, restauranteId } = req.body;
        const produto = await prismaClient_1.default.produto.create({
            data: {
                nome,
                codigoBarras,
                localArmazenamento,
                quantidade,
                unidade,
                dataValidade: new Date(dataValidade),
                restauranteId
            }
        });
        res.status(201).json(produto);
    }
    catch (error) {
        res.status(500).json({ error: "erro interno do servidor" });
    }
});
//atualiza um produto
router.put("/:id", async (req, res) => {
    try {
        const { nome, categoria, localArmazenamento, codigoBarras, quantidade, unidade, dataValidade, restauranteId } = req.body;
        const produto = await prismaClient_1.default.produto.update({
            where: { id: Number(req.params.id) },
            data: {
                nome,
                codigoBarras,
                localArmazenamento,
                quantidade,
                unidade,
                dataValidade: dataValidade ? new Date(dataValidade) : undefined,
                restauranteId
            }
        });
        res.json(produto);
    }
    catch (error) {
        res.status(500).json({ error: "erro interno do servidor" });
    }
});
//atualiza status
router.patch("/produto/:id", async (req, res) => {
    const id = Number(req.params.id);
    const { status } = req.body;
    try {
        const ProdutoAtualizado = await prismaClient_1.default.produto.update({
            where: { id },
            data: {
                status
            }
        });
        return res.json(ProdutoAtualizado);
    }
    catch (error) {
        return res.status(404).json({ error: "Produto não encontrado" });
    }
});
//deleta um produto
router.delete("/:id", async (req, res) => {
    try {
        await prismaClient_1.default.produto.delete({
            where: { id: Number(req.params.id) }
        });
        return res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "erro interno do servidor" });
    }
});
// teste
exports.default = router;
