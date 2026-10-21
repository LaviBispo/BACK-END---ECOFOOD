"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const router = (0, express_1.Router)();
// calcula quantos dias faltam para uma data
function calcularDiasRestantes(dataValidade) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // zera a hora, para contar só os dias
    const validade = new Date(dataValidade);
    validade.setHours(0, 0, 0, 0);
    const umDiaEmMs = 1000 * 60 * 60 * 24;
    return Math.round((validade.getTime() - hoje.getTime()) / umDiaEmMs);
}
// lista o estoque (tela de Estoque)
// exemplo: /produtos?restauranteId=1&local=geladeira&busca=tomate
router.get('/', async (req, res) => {
    try {
        // 1. pega o que o app mandou na URL
        const { local, busca, restauranteId } = req.query;
        // 2. filtro base: só produtos ATIVOS (esgotados vão pra lista de compras)
        const filtroBase = { status: 'ATIVO' };
        if (local) {
            filtroBase.localArmazenamento = String(local).toUpperCase();
        }
        if (restauranteId) {
            filtroBase.restauranteId = Number(restauranteId);
        }
        // 3. filtro da lista: o base + a busca pelo nome
        const filtroLista = { ...filtroBase };
        if (busca) {
            filtroLista.nome = { contains: String(busca) };
        }
        // 4. busca os produtos, do que vence primeiro para o que vence depois
        const produtos = await prismaClient_1.default.produto.findMany({
            where: filtroLista,
            orderBy: { dataValidade: 'asc' }
        });
        // 5. adiciona "diasRestantes" em cada produto
        const lista = produtos.map((produto) => ({
            ...produto,
            diasRestantes: calcularDiasRestantes(produto.dataValidade)
        }));
        // 6. conta quantos vencem em até 7 dias (o alerta vermelho)
        //    usa o filtroBase, então a busca não muda esse número
        const limite = new Date();
        limite.setHours(0, 0, 0, 0);
        limite.setDate(limite.getDate() + 7);
        const totalProximosVencimento = await prismaClient_1.default.produto.count({
            where: {
                ...filtroBase,
                dataValidade: { lte: limite }
            }
        });
        // 7. devolve tudo pro app
        res.json({
            totalProximosVencimento,
            produtos: lista
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'erro interno do servidor' });
    }
});
//busca produto por id
router.get('/:id', async (req, res) => {
    try {
        const produto = await prismaClient_1.default.produto.findUnique({
            where: { id: Number(req.params.id) }
        });
        if (!produto) {
            return res.status(404).json({ error: 'produto nao encontrado' });
        }
        return res.json(produto);
    }
    catch (error) {
        return res.status(500).json({ error: 'erro interno do servidor' });
    }
});
//cria um novo produto
router.post('/', async (req, res) => {
    try {
        const { nome, categoria, localArmazenamento, codigoBarras, quantidade, unidade, dataValidade, restauranteId, status } = req.body;
        if (!nome || !categoria || !localArmazenamento || !restauranteId) {
            return res.status(400).json({
                error: 'nome, categoria, localArmazenamento e restauranteId sao obrigatorios'
            });
        }
        const produto = await prismaClient_1.default.produto.create({
            data: {
                nome,
                categoria,
                codigoBarras,
                localArmazenamento: String(localArmazenamento).toUpperCase(),
                quantidade,
                unidade,
                dataValidade: dataValidade ? new Date(dataValidade) : new Date(),
                restauranteId: Number(restauranteId),
                status: status ?? 'ATIVO'
            }
        });
        return res.status(201).json(produto);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'erro interno do servidor' });
    }
});
//atualiza um produto
router.put('/:id', async (req, res) => {
    try {
        const { nome, categoria, localArmazenamento, codigoBarras, quantidade, unidade, dataValidade, restauranteId, status } = req.body;
        const produto = await prismaClient_1.default.produto.update({
            where: { id: Number(req.params.id) },
            data: {
                nome,
                categoria,
                codigoBarras,
                localArmazenamento: localArmazenamento
                    ? String(localArmazenamento).toUpperCase()
                    : undefined,
                quantidade,
                unidade,
                dataValidade: dataValidade ? new Date(dataValidade) : undefined,
                restauranteId: restauranteId !== undefined ? Number(restauranteId) : undefined,
                status
            }
        });
        return res.json(produto);
    }
    catch (error) {
        return res.status(500).json({ error: 'erro interno do servidor' });
    }
});
//atualiza status
router.patch('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const { status } = req.body;
    try {
        const produtoAtualizado = await prismaClient_1.default.produto.update({
            where: { id },
            data: {
                status
            }
        });
        return res.json(produtoAtualizado);
    }
    catch (error) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
});
//deleta um produto
router.delete('/:id', async (req, res) => {
    try {
        await prismaClient_1.default.produto.delete({
            where: { id: Number(req.params.id) }
        });
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ error: 'erro interno do servidor' });
    }
});
exports.default = router;
