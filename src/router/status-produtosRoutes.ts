
import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'ID inválido' });
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
                restauranteId: true,
                restaurante: {
                    select: { name: true }
                }
            }
        });

        if (!produto || produto.restauranteId !== req.restaurantId) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        return res.status(200).json(produto);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar produto' });
    }
});

/**
 * PATCH /api/status-produtos/:id/status
 *
 * Body:
 * status: "APROVEITADO" | "NAO_APROVEITADO"
 * quantidadeUtilizada: number > 0
 * adicionarListaCompra: boolean (opcional)
 */
router.patch('/:id/status', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const { status, quantidadeUtilizada, adicionarListaCompra } = req.body;

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'ID inválido' });
        }

        const statusPermitidos = ['APROVEITADO', 'NAO_APROVEITADO'];

        if (!statusPermitidos.includes(status)) {
            return res.status(400).json({ error: 'Status inválido' });
        }

        const quantidadeNum = Number(quantidadeUtilizada);

        if (
            quantidadeUtilizada === undefined ||
            quantidadeUtilizada === null ||
            quantidadeUtilizada === '' ||
            !Number.isFinite(quantidadeNum) ||
            quantidadeNum <= 0
        ) {
            return res.status(400).json({
                error: 'quantidadeUtilizada deve ser um número maior que zero'
            });
        }

        if (
            adicionarListaCompra !== undefined &&
            typeof adicionarListaCompra !== 'boolean'
        ) {
            return res.status(400).json({
                error: 'adicionarListaCompra deve ser true ou false'
            });
        }

        const produto = await prisma.produto.findUnique({
            where: { id },
            select: {
                id: true,
                nome: true,
                categoria: true,
                localArmazenamento: true,
                restauranteId: true,
                quantidade: true,
                unidade: true,
                status: true
            }
        });

        if (!produto || produto.restauranteId !== req.restaurantId) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        if (produto.status !== 'ATIVO') {
            return res.status(409).json({
                error: 'Este produto já teve o status atualizado'
            });
        }

        if (quantidadeNum > produto.quantidade) {
            return res.status(400).json({
                error: `quantidadeUtilizada não pode ser maior que o estoque (${produto.quantidade} ${produto.unidade})`
            });
        }

        const ehKg = produto.unidade.toLowerCase() === 'kg';
        const querListaCompra = adicionarListaCompra === true;

        const resultado = await prisma.$transaction(async (tx) => {
            const produtoAtualizado = await tx.produto.update({
                where: { id },
                data: { status },
                select: { id: true, nome: true, status: true }
            });

            const impacto = await tx.registroImpacto.create({
                data: {
                    produtoId: produto.id,
                    restauranteId: produto.restauranteId,
                    quantidadeKg: ehKg ? quantidadeNum : 0,
                    quantidadeUtilizada: quantidadeNum,
                    unidade: produto.unidade,
                    foiAproveitado: status === 'APROVEITADO'
                }
            });

            let itemListaCompra = null;
            let jaExistiaNaLista = false;

            if (querListaCompra) {
                const existente = await tx.itemListaCompras.findFirst({
                    where: {
                        restauranteId: produto.restauranteId,
                        nome: produto.nome,
                        comprado: false
                    }
                });

                if (existente) {
                    jaExistiaNaLista = true;
                } else {
                    itemListaCompra = await tx.itemListaCompras.create({
                        data: {
                            nome: produto.nome,
                            categoria: produto.categoria,
                            localArmazenamento: produto.localArmazenamento,
                            quantidade: quantidadeNum,
                            unidade: produto.unidade,
                            restauranteId: produto.restauranteId
                        }
                    });
                }
            }

            return {
                produtoAtualizado,
                impacto,
                itemListaCompra,
                jaExistiaNaLista
            };
        });

        return res.status(200).json({
            mensagem: 'Status atualizado e impacto registrado com sucesso',
            produto: resultado.produtoAtualizado,
            impacto: {
                quantidadeUtilizada: resultado.impacto.quantidadeUtilizada,
                unidade: resultado.impacto.unidade,
                foiAproveitado: resultado.impacto.foiAproveitado
            },
            listaCompra: {
                solicitada: querListaCompra,
                adicionado: resultado.itemListaCompra !== null,
                jaExistia: resultado.jaExistiaNaLista,
                item: resultado.itemListaCompra
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao atualizar status ou registrar impacto'
        });
    }
});

export default router;
