import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();

//lista todos os produtos
router.get('/', async (_req: Request, res: Response) => {
    try {
        const produtos = await prisma.produto.findMany()
        res.json(produtos)
    } catch (error) {
        res.status(500).json({ error: 'erro interno do servidor' });
    }
});

//busca produto por id
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const produto = await prisma.produto.findUnique({
            where: { id: Number(req.params.id) }
        });

        if (!produto) {
            return res.status(404).json({ error: 'produto nao encontrado' });
        }

        return res.json(produto);
    } catch (error) {
        return res.status(500).json({ error: 'erro interno do servidor' });
    }
});

//cria um novo produto
router.post('/', async (req: Request, res: Response) => {
    try {
        const {
            nome,
            localArmazenamento,
            codigoBarras,
            quantidade,
            unidade,
            dataValidade,
            restauranteId,
            status
        } = req.body;

        const produto = await prisma.produto.create({
            data: {
                nome,
                codigoBarras,
                localArmazenamento,
                quantidade,
                unidade,
                dataValidade: dataValidade ? new Date(dataValidade) : new Date(),
                restauranteId: Number(restauranteId),
                status: status ?? 'ATIVO'
            }
        });

        return res.status(201).json(produto);
    } catch (error) { console.error(error);
        return res.status(500).json({ error: 'erro interno do servidor' });
    }
});

//atualiza um produto
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const {
            nome,
            localArmazenamento,
            codigoBarras,
            quantidade,
            unidade,
            dataValidade,
            restauranteId,
            status
        } = req.body;

        const produto = await prisma.produto.update({
            where: { id: Number(req.params.id) },
            data: {
                nome,
                codigoBarras,
                localArmazenamento,
                quantidade,
                unidade,
                dataValidade: dataValidade ? new Date(dataValidade) : undefined,
                restauranteId: restauranteId !== undefined ? Number(restauranteId) : undefined,
                status
            }
        });

        return res.json(produto);
    } catch (error) {
        return res.status(500).json({ error: 'erro interno do servidor' });
    }
});

//atualiza status
router.patch('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { status } = req.body;

    try {
        const produtoAtualizado = await prisma.produto.update({
            where: { id },
            data: {
                status
            }
        });

        return res.json(produtoAtualizado);
    } catch (error) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
});

//deleta um produto
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        await prisma.produto.delete({
            where: { id: Number(req.params.id) }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: 'erro interno do servidor' });
    }
});

export default router;