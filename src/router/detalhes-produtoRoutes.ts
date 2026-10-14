import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const produtoId = Number(req.params.id);

        if (!Number.isInteger(produtoId) || produtoId <= 0) {
            return res.status(400).json({
                error: 'ID do produto inválido'
            });
        }

        const produto = await prisma.produto.findUnique({
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
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erro ao buscar produto'
        });
    }
});

export default router;