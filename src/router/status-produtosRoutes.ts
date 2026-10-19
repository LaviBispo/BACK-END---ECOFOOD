import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();


router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                error: 'ID inválido'
            });
        }

        const produto = await prisma.produto.findUnique({
            where: { id },
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
                restaurante: {
                    select: {
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

router.patch('/:id/status', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const { status } = req.body;

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                error: 'ID inválido'
            });
        }

        const statusPermitidos = [
            'APROVEITADO',
            'NAO_APROVEITADO'
        ];

        if (!statusPermitidos.includes(status)) {
            return res.status(400).json({
                error: 'Status inválido'
            });
        }

        const produto = await prisma.produto.findUnique({
            where: { id },
            select: { id: true }
        });

        if (!produto) {
            return res.status(404).json({
                error: 'Produto não encontrado'
            });
        }

        const produtoAtualizado = await prisma.produto.update({
            where: { id },
            data: { status },
            select: {
                id: true,
                nome: true,
                status: true
            }
        });

        return res.status(200).json({
            mensagem: 'Status atualizado com sucesso',
            produto: produtoAtualizado
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Erro ao atualizar status'
        });
    }
});

export default router;