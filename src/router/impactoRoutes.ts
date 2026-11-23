
import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();

// Busca os dados do impacto
router.get("/:restauranteId", async (req: Request, res: Response) => {
    try {
        const restauranteId = Number(req.params.restauranteId);

        if (!Number.isInteger(restauranteId) || restauranteId <= 0) {
            return res.status(400).json({
                error: "ID do restaurante inválido"
            });
        }

        const prismaImpacto = prisma as any;

        // Busca os registros de impacto do restaurante
        const registros = await prismaImpacto.registroImpacto.findMany({
            where: {
                restauranteId: restauranteId
            }
        });

        // Inicializa os valores
        let alimentosSalvos = 0;
        let desperdicioTotal = 0;
        let escolhasConscientes = 0;
        let totalAlimentos = 0;

        // Calcula os alimentos aproveitados e desperdiçados
        for (const registro of registros) {
            const quantidade = Number(registro.quantidadeKg);

            totalAlimentos += quantidade;

            if (registro.foiAproveitado === true) {
                alimentosSalvos += quantidade;
                escolhasConscientes++;
            } else {
                desperdicioTotal += quantidade;
            }
        }

        // Calcula a porcentagem de redução de resíduos
        let reducaoResiduos = 0;

        if (totalAlimentos > 0) {
            reducaoResiduos = (alimentosSalvos / totalAlimentos) * 100;
        }

        // Identifica o início da semana atual (segunda-feira)
        const hoje = new Date();
        const inicioSemana = new Date(hoje);
        const diaSemana = hoje.getDay();

        if (diaSemana === 0) {
            inicioSemana.setDate(hoje.getDate() - 6);
        } else {
            inicioSemana.setDate(hoje.getDate() - (diaSemana - 1));
        }

        inicioSemana.setHours(0, 0, 0, 0);

        // Calcula a evolução das últimas 5 semanas
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
                const quantidade = Number(registro.quantidadeKg);

                if (data >= inicio && data < fim) {
                    if (registro.foiAproveitado === true) {
                        salvos += quantidade;
                    } else {
                        desperdicados += quantidade;
                    }
                }
            }

            semanas.push({
                semana: `Sem ${5 - i}`,
                alimentosSalvos: Number(salvos.toFixed(2)),
                desperdicios: Number(desperdicados.toFixed(2))
            });
        }

        // Retorna os resultados
        res.json({
            totalAlimentos: Number(totalAlimentos.toFixed(2)),
            alimentosSalvos: Number(alimentosSalvos.toFixed(2)),
            desperdicioTotal: Number(desperdicioTotal.toFixed(2)),
            reducaoResiduos: Number(reducaoResiduos.toFixed(2)),
            escolhasConscientes: escolhasConscientes,
            evolucao: semanas
        });

    } catch (error) {
        console.log("ERROR:", error);

        res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});

export default router;
