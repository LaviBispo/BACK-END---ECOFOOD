
import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();

router.get('/:restauranteId/quantidade', async (req: Request, res: Response) => {
    try {
        const restauranteId = Number(req.params.restauranteId);

        if (!Number.isInteger(restauranteId) || restauranteId <= 0) {
            return res.status(400).json({
                error: 'id do restaurante invalido'
            });
        }

        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        const limite = new Date(hoje);
        limite.setDate(limite.getDate() + 3);
        limite.setHours(23, 59, 59, 999);

        const quantidade = await prisma.produto.count({
            where: {
                restauranteId: restauranteId,
                status: 'ATIVO',
                dataValidade: {
                    lte: limite
                }
            }
        });

        return res.json({
            quantidade: quantidade
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'erro interno do servidor'
        });
    }
});




// lista os produtos que precisam de atenção
router.get('/:restauranteId', async (req: Request, res: Response) => {
    try {
        const restauranteId = Number(req.params.restauranteId);

        if (!Number.isInteger(restauranteId) || restauranteId <= 0) {
            return res.status(400).json({
                error: 'id do restaurante invalido'
            });
        }

        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        const limite = new Date(hoje);
        limite.setDate(limite.getDate() + 3);
        limite.setHours(23, 59, 59, 999);

        const produtos = await prisma.produto.findMany({
            where: {
                restauranteId: restauranteId,
                status: 'ATIVO',
                dataValidade: {
                    lte: limite
                }
            },
            orderBy: {
                dataValidade: 'asc'
            }
        });

        const notificacoes = produtos.map((produto) => {
            const validade = new Date(produto.dataValidade);
            validade.setHours(0, 0, 0, 0);

            let tipo = 'PROXIMO_DO_VENCIMENTO';
            let mensagem = 'Este alimento esta proximo do vencimento.';

            if (validade < hoje) {
                tipo = 'VENCIDO';
                mensagem = 'Este alimento esta vencido.';
            } else if (validade.getTime() === hoje.getTime()) {
                tipo = 'VENCE_HOJE';
                mensagem = 'Este alimento vence hoje.';
            }

            return {
                produtoId: produto.id,
                nome: produto.nome,
                dataValidade: produto.dataValidade,
                tipo,
                mensagem
            };
        });

        return res.json({
            total: notificacoes.length,
            notificacoes
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'erro interno do servidor'
        });
    }
});

export default router;
