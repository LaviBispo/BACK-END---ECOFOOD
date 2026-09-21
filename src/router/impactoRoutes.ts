import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();

//busca os dados do impacto
router.get("/:restauranteId", async (req: Request, res: Response) => {
    try {
        const restauranteId = Number(req.params.restauranteId)
        const prismaImpacto = prisma as any

        const registros = await prismaImpacto.registroImpacto.findMany({
            where: {
                restauranteId: restauranteId
            }
        })

        //calcula a quantidade de alimentos salvos
        let alimentosSalvos = 0

        //conta as escolhas conscientes
        let escolhasConscientes = 0

        //calcula o total de alimentos registrados
        let totalAlimentos = 0

        for (const registro of registros) {
            totalAlimentos += registro.quantidadeKg

            if (registro.foiAproveitado) {
                alimentosSalvos += registro.quantidadeKg
                escolhasConscientes++
            }
        }

        //calcula a porcentagem de redução de resíduos
        let reducaoResiduos = 0

        if (totalAlimentos > 0) {
            reducaoResiduos = (alimentosSalvos / totalAlimentos) * 100
        }

        //pega a data de hoje
        const hoje = new Date()

        //encontra o começo da semana atual
        const inicioSemana = new Date(hoje)
        const diaSemana = hoje.getDay()

        if (diaSemana === 0) {
            inicioSemana.setDate(hoje.getDate() - 6)
        } else {
            inicioSemana.setDate(hoje.getDate() - (diaSemana - 1))
        }

        inicioSemana.setHours(0, 0, 0, 0)

        //cria as 5 semanas
        const semanas = [
            { semana: "Sem 1", kg: 0 },
            { semana: "Sem 2", kg: 0 },
            { semana: "Sem 3", kg: 0 },
            { semana: "Sem 4", kg: 0 },
            { semana: "Sem 5", kg: 0 }
        ]

        //separa os alimentos salvos por semana
        for (const registro of registros) {
            if (registro.foiAproveitado) {

                const diferenca = inicioSemana.getTime() - registro.criadoEm.getTime()

                const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))

                const semana = 4 - Math.floor(dias / 7)

                if (semana >= 0 && semana < 5) {
                    semanas[semana].kg += registro.quantidadeKg
                }
            }
        }

        res.json({
            alimentosSalvos: Number(alimentosSalvos.toFixed(2)),
            reducaoResiduos: Number(reducaoResiduos.toFixed(2)),
            escolhasConscientes: escolhasConscientes,
            evolucao: semanas
        })

    } catch (error) {
        console.log("ERROR:", error)
        res.status(500).json({ error: "erro interno do servidor" })
    }
})

export default router