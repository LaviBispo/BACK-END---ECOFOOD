"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const router = (0, express_1.Router)();
// kg: registros de produtos em "kg".
// unidades: registros de produtos em outras unidades.
router.get("/:restauranteId", async (req, res) => {
    try {
        const restauranteId = Number(req.params.restauranteId);
        if (!Number.isInteger(restauranteId) || restauranteId <= 0) {
            return res.status(400).json({
                error: "ID do restaurante inválido"
            });
        }
        // Cada restaurante só enxerga o próprio impacto.
        if (restauranteId !== req.restaurantId) {
            return res.status(403).json({
                error: "Acesso negado"
            });
        }
        const registros = await prismaClient_1.default.registroImpacto.findMany({
            where: { restauranteId }
        });
        let kgAproveitados = 0;
        let kgDesperdicados = 0;
        let unidadesAproveitadas = 0;
        let unidadesDesperdicadas = 0;
        let escolhasConscientes = 0;
        for (const registro of registros) {
            const ehKg = !registro.unidade ||
                registro.unidade.toLowerCase() === 'kg';
            if (ehKg) {
                const kg = Number(registro.quantidadeKg);
                if (registro.foiAproveitado) {
                    kgAproveitados += kg;
                }
                else {
                    kgDesperdicados += kg;
                }
            }
            else {
                const qtd = Number(registro.quantidadeUtilizada ?? 0);
                if (registro.foiAproveitado) {
                    unidadesAproveitadas += qtd;
                }
                else {
                    unidadesDesperdicadas += qtd;
                }
            }
            if (registro.foiAproveitado) {
                escolhasConscientes++;
            }
        }
        const totalKg = kgAproveitados + kgDesperdicados;
        const reducaoResiduos = totalKg > 0
            ? (kgAproveitados / totalKg) * 100
            : 0;
        // Início da semana atual (segunda-feira).
        const hoje = new Date();
        const inicioSemana = new Date(hoje);
        const diaSemana = hoje.getDay();
        if (diaSemana === 0) {
            inicioSemana.setDate(hoje.getDate() - 6);
        }
        else {
            inicioSemana.setDate(hoje.getDate() - (diaSemana - 1));
        }
        inicioSemana.setHours(0, 0, 0, 0);
        // Evolução das últimas 5 semanas (kg).
        const semanas = [];
        for (let i = 4; i >= 0; i--) {
            const inicio = new Date(inicioSemana);
            inicio.setDate(inicio.getDate() - (i * 7));
            const fim = new Date(inicio);
            fim.setDate(fim.getDate() + 7);
            let salvos = 0;
            let desperdicados = 0;
            for (const registro of registros) {
                const data = new Date(registro.criadoEm);
                const ehKg = !registro.unidade ||
                    registro.unidade.toLowerCase() === 'kg';
                if (!ehKg)
                    continue;
                if (data >= inicio && data < fim) {
                    const kg = Number(registro.quantidadeKg);
                    if (registro.foiAproveitado) {
                        salvos += kg;
                    }
                    else {
                        desperdicados += kg;
                    }
                }
            }
            semanas.push({
                semana: `Sem ${5 - i}`,
                alimentosSalvos: Number(salvos.toFixed(2)),
                desperdicios: Number(desperdicados.toFixed(2))
            });
        }
        return res.json({
            totalAlimentos: Number(totalKg.toFixed(2)),
            alimentosSalvos: Number(kgAproveitados.toFixed(2)),
            desperdicioTotal: Number(kgDesperdicados.toFixed(2)),
            reducaoResiduos: Number(reducaoResiduos.toFixed(2)),
            escolhasConscientes,
            unidades: {
                aproveitadas: Number(unidadesAproveitadas.toFixed(2)),
                desperdicadas: Number(unidadesDesperdicadas.toFixed(2))
            },
            evolucao: semanas
        });
    }
    catch (error) {
        console.log("ERROR:", error);
        return res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});
exports.default = router;
