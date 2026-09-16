import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();

//lista todos os produtos
router.get("/", async (req: Request, res: Response) => {
    try {
        const produtos = await prisma.product.findMany()
        res.json(produtos)
    } catch (error) {
        res.status(500).json({ error: "erro interno do servidor" })
    }
})

//busca produto por id
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const produto = await prisma.product.findUnique({
            where: { id: Number(req.params.id) }
        })

        if (!produto) {
            return res.status(404).json({ error: "produto nao encontrado" })
        }
        res.json(produto)
    } catch (error) {
        res.status(500).json({ error: "erro interno do servidor" })
    }
})

//cria um novo produto
router.post("/", async (req: Request, res: Response) => {
    try {
        const { nome, categoria, localArmazenamento, codigoBarras,  quantidade, unidade, dataValidade, restauranteId } = req.body

        const produto = await prisma.product.create({
            data: {
                nome,
                categoria,
                codigoBarras,
                localArmazenamento,
                quantidade,
                unidade,
                dataValidade: new Date(dataValidade),
                restauranteId  

  
            }
        })
        res.status(201).json(produto)
    } catch (error) {
        res.status(500).json({ error: "erro interno do servidor" })
    }
})

//atualiza um produto
router.put("/:id", async (req: Request, res: Response) => {
    try {
       const { nome, categoria, localArmazenamento, codigoBarras,  quantidade, unidade, dataValidade, restauranteId } = req.body

        const produto = await prisma.product.update({
            where: { id: Number(req.params.id) },
            data: {
                nome,
                codigoBarras,
                categoria,
                localArmazenamento,
                quantidade,
                unidade,
                dataValidade: dataValidade ? new Date(dataValidade) : undefined,
                restauranteId
                

            }
        })
        res.json(produto)
    } catch (error) {
        res.status(500).json({ error: "erro interno do servidor" })
    }
})

//atualiza status

router.patch("/produto/:id", async (req, res) => {
    const id = Number(req.params.id)
    const { status } = req.body
 
    try {
        const ProdutoAtualizado = await prisma.product.update({
            where: { id },
            data: {
               status
            }
        })
 
        return res.json(ProdutoAtualizado)
    } catch (error) {
        return res.status(404).json({ error: "Produto não encontrado" })
    }
 
})

//deleta um produto
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        await prisma.product.delete({
            where: { id: Number(req.params.id) }
        })
        return res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: "erro interno do servidor" })
    }
})

export default router