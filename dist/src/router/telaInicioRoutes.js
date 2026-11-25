"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const router = (0, express_1.Router)();
// Busca os dados da tela inicial
router.get("/:restauranteId", async (req, res) => {
    try {
        const restauranteId = Number(req.params.restauranteId);
        // Data limite para produtos próximos do vencimento
        const dataLimite = new Date();
        dataLimite.setDate(dataLimite.getDate() + 7);
        // Só produtos ATIVOS: os já aproveitados/não aproveitados não contam mais no estoque.
        const produtos = await prismaClient_1.default.produto.findMany({
            where: {
                restauranteId: restauranteId,
                status: "ATIVO"
            }
        });
        // Conta os produtos
        const totalProdutos = produtos.length;
        // Conta os produtos próximos do vencimento
        let produtosVencendo = 0;
        for (const produto of produtos) {
            if (produto.dataValidade <= dataLimite) {
                produtosVencendo++;
            }
        }
        // Conta os produtos esgotados
        let produtosEsgotados = 0;
        for (const produto of produtos) {
            if (produto.status === "ESGOTADO") {
                produtosEsgotados++;
            }
        }
        // Busca os registros de impacto
        const registros = await prismaClient_1.default.registroImpacto.findMany({
            where: {
                restauranteId: restauranteId
            }
        });
        // Calcula os alimentos salvos
        let alimentosSalvos = 0;
        let alimentosDesperdicados = 0;
        // Considera apenas registros em kg
        for (const registro of registros) {
            const ehKg = !registro.unidade ||
                registro.unidade.toLowerCase() === "kg";
            if (!ehKg)
                continue; // Itens em "un" não entram no total em kg.
            if (registro.foiAproveitado) {
                alimentosSalvos += registro.quantidadeKg;
            }
            else {
                alimentosDesperdicados += registro.quantidadeKg;
            }
        }
        // Calcula a redução de resíduos
        const totalKg = alimentosSalvos + alimentosDesperdicados;
        let reducaoResiduos = 0;
        if (totalKg > 0) {
            reducaoResiduos = (alimentosSalvos / totalKg) * 100;
        }
        // Conta os itens que ainda precisam ser comprados
        const itensParaComprar = await prismaClient_1.default.itemListaCompras.count({
            where: {
                restauranteId: restauranteId,
                comprado: false
            }
        });
        // Conta quantos produtos existem em cada local
        const geladeira = produtos.filter(produto => produto.localArmazenamento === "GELADEIRA").length;
        const freezer = produtos.filter(produto => produto.localArmazenamento === "FREEZER").length;
        const despensa = produtos.filter(produto => produto.localArmazenamento === "DESPENSA").length;
        res.json({
            indicadores: {
                totalProdutos: totalProdutos,
                produtosVencendo: produtosVencendo,
                produtosEsgotados: produtosEsgotados,
                alimentosSalvos: Number(alimentosSalvos.toFixed(2))
            },
            alerta: produtosVencendo > 0
                ? {
                    tipo: "VENCIMENTO",
                    titulo: "Atenção",
                    mensagem: `${produtosVencendo} produtos próximos do vencimento.`,
                    quantidade: produtosVencendo
                }
                : null,
            estoque: {
                geladeira: geladeira,
                freezer: freezer,
                despensa: despensa
            },
            listaCompras: {
                itensParaComprar: itensParaComprar,
                produtosVencendo: produtosVencendo
            },
            impacto: {
                alimentosSalvos: Number(alimentosSalvos.toFixed(2)),
                reducaoResiduos: Number(reducaoResiduos.toFixed(2))
            }
        });
    }
    catch (error) {
        res.status(500).json({ error: "erro interno do servidor" });
    }
});
exports.default = router;
