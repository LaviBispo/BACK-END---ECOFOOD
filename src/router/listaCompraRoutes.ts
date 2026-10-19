<<<<<<< HEAD

import { Router, Request, Response } from "express";
import prisma from "../lib/prismaClient";

const router = Router();

// LISTAR TODOS OS ITENS AGRUPADOS POR LOCAL DE ARMAZENAMENTO
router.get("/", async (req: Request, res: Response) => {
    try {
        const itens = await prisma.itemListaCompras.findMany({
            orderBy: {
                localArmazenamento: "asc"
            }
        });

        const grupos: any = {};

        for (const item of itens) {
            const local = item.localArmazenamento;

            if (!grupos[local]) {
                grupos[local] = [];
            }

            grupos[local].push(item);
        }

        res.json({
            totalItens: itens.length,
            grupos
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});


// BUSCAR UM ITEM PELO ID
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const item = await prisma.itemListaCompras.findUnique({
            where: {
                id: id
            }
        });

        if (!item) {
            return res.status(404).json({
                error: "Item não encontrado"
            });
        }

        res.json(item);
    } catch (error) {
        res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});


// CRIAR UM ITEM MANUALMENTE
router.post("/", async (req: Request, res: Response) => {
    try {
        const {
            nome,
            categoria,
            localArmazenamento,
            quantidade,
            unidade,
            prioridade,
            restauranteId
        } = req.body;

        if (!nome || !categoria || !localArmazenamento || !restauranteId) {
            return res.status(400).json({
                error: "Nome, categoria, local de armazenamento e restauranteId são obrigatórios"
            });
        }

=======
import {Router, Request, Response} from 'express';
import prisma from '../lib/prismaClient';
 
const router = Router();

type ItemExistente = {nome: string}
type ProdutoEsgotado = {nome: string; quantidade: number; unidade: string}
 
//lista os itens JA AGRUPADOS por categoria, do jeito que a tela mostra
//"Hortifruti (2)", "Proteinas (1)"...
router.get("/", async (req: Request, res: Response) => {
    try {
        const itens = await prisma.itemListaCompras.findMany({
            orderBy: {categoria: "asc"}
        })
 
        //agrupando os itens por categoria antes de responder
        //categoria e opcional no schema, entao itens sem categoria caem em "Outros"
        const grupos: any = {}
 
        for (const item of itens) {
            const chave = item.categoria ?? "Outros"
 
            if (!grupos[chave]) {
                grupos[chave] = []
            }
            grupos[chave].push(item)
        }
 
        res.json({
            totalItens: itens.length,
            grupos
        })
    } catch (error) {
        res.status(500).json({error: "erro interno do servidor"})
    }
})
 
//busca um item por id
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const item = await prisma.itemListaCompras.findUnique({
            where: {id: Number(req.params.id)}
        })
 
        if(!item) {
            return res.status(404).json({error: "item nao encontrado"})
        }
        res.json(item)
    } catch (error) {
        res.status(500).json({error: "erro interno do servidor"})
    }
})
 
//cria um item MANUALMENTE (botao "+" da tela)
router.post("/", async (req: Request, res: Response) => {
    try {
        const {nome, categoria, quantidade, unidade, prioridade, restauranteId} = req.body
 
>>>>>>> 251f91ccce7377705d559fac702aeaba32c9b237
        const item = await prisma.itemListaCompras.create({
            data: {
                nome,
                categoria,
<<<<<<< HEAD
                localArmazenamento,
=======
>>>>>>> 251f91ccce7377705d559fac702aeaba32c9b237
                quantidade,
                unidade,
                prioridade,
                restauranteId
            }
<<<<<<< HEAD
        });

        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});


// GERAR ITENS AUTOMATICAMENTE DOS PRODUTOS ESGOTADOS
router.post("/gerar", async (req: Request, res: Response) => {
    try {
        const { restauranteId } = req.body;

        if (!restauranteId) {
            return res.status(400).json({
                error: "restauranteId é obrigatório"
            });
        }

        // Busca os produtos esgotados do restaurante
=======
        })
        res.status(201).json(item)
    } catch (error) {
        res.status(500).json({error: "erro interno do servidor"})
    }
})
 
//gera itens AUTOMATICAMENTE a partir dos produtos que esgotaram
//chame essa rota quando um produto mudar de status pra "ESGOTADO"
router.post("/gerar", async (req: Request, res: Response) => {
    try {
        const {restauranteId} = req.body
 
        //busca produtos esgotados desse restaurante
>>>>>>> 251f91ccce7377705d559fac702aeaba32c9b237
        const produtosEsgotados = await prisma.produto.findMany({
            where: {
                restauranteId,
                status: "ESGOTADO"
            }
<<<<<<< HEAD
        });

        // Busca os itens que já estão na lista
        const itensExistentes =
            await prisma.itemListaCompras.findMany({
                where: {
                    restauranteId
                },
                select: {
                    nome: true
                }
            });

        // Cria uma lista com os nomes que já existem
        const nomesNaLista = itensExistentes.map(
            (item) => item.nome
        );

        // Filtra somente os produtos que ainda não estão na lista
        const produtosNovos = produtosEsgotados.filter(
            (produto) => !nomesNaLista.includes(produto.nome)
        );

        if (produtosNovos.length === 0) {
            return res.json({
                criados: 0,
                mensagem: "Nenhum item novo para adicionar"
            });
        }

        // Cria um item de compras para cada produto novo
        const itensCriados = await Promise.all(
            produtosNovos.map((produto) =>
                prisma.itemListaCompras.create({
                    data: {
                        nome: produto.nome,
                        localArmazenamento: produto.localArmazenamento,
                        categoria: produto.categoria,
                        quantidade: produto.quantidade > 0
                            ? produto.quantidade
                            : 1,
=======
        })
 
        //busca o que ja esta na lista, pra nao duplicar
        const itensExistentes = await prisma.itemListaCompras.findMany({
            where: {restauranteId},
            select: {nome: true}
        })
        const nomesNaLista = itensExistentes.map((i: ItemExistente) => i.nome)
 
        //filtra so os produtos que ainda nao estao na lista
        const produtosNovos = produtosEsgotados.filter(
            (produto: ProdutoEsgotado) => !nomesNaLista.includes(produto.nome)
        )
 
        if (produtosNovos.length === 0) {
            return res.json({criados: 0, mensagem: "nenhum item novo pra adicionar"})
        }
 
        //cria um item de lista de compras pra cada produto esgotado
        //o Produto nao tem campo "categoria" (so localArmazenamento), entao o
        //item entra sem categoria e cai no grupo "Outros" na tela
        const itensCriados = await Promise.all(
            produtosNovos.map((produto: ProdutoEsgotado) =>
                prisma.itemListaCompras.create({
                    data: {
                        nome: produto.nome,
                        quantidade: produto.quantidade > 0 ? produto.quantidade : 1,
>>>>>>> 251f91ccce7377705d559fac702aeaba32c9b237
                        unidade: produto.unidade,
                        restauranteId
                    }
                })
            )
<<<<<<< HEAD
        );

        res.status(201).json({
            criados: itensCriados.length,
            itens: itensCriados
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});


// ATUALIZAR UM ITEM
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const {
            nome,
            categoria,
            localArmazenamento,
            quantidade,
            unidade,
            prioridade,
            comprado
        } = req.body;

        const item = await prisma.itemListaCompras.update({
            where: {
                id: id
            },
            data: {
                nome,
                categoria,
                localArmazenamento,
=======
        )
 
        res.status(201).json({criados: itensCriados.length, itens: itensCriados})
    } catch (error) {
        res.status(500).json({error: "erro interno do servidor"})
    }
})
 
//atualiza um item (inclui marcar/desmarcar como comprado)
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const {nome, categoria, quantidade, unidade, prioridade, comprado} = req.body
 
        const item = await prisma.itemListaCompras.update({
            where: {id: Number(req.params.id)},
            data: {
                nome,
                categoria,
>>>>>>> 251f91ccce7377705d559fac702aeaba32c9b237
                quantidade,
                unidade,
                prioridade,
                comprado
            }
<<<<<<< HEAD
        });

        res.json(item);
    } catch (error) {
        res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});


// DELETAR UM ITEM
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const item = await prisma.itemListaCompras.findUnique({
            where: {
                id: id
            }
        });

        if (!item) {
            return res.status(404).json({
                error: "Item não encontrado"
            });
        }

        await prisma.itemListaCompras.delete({
            where: {
                id: id
            }
        });

        return res.status(204).send();
    } catch (error) {
        res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
});

export default router;
=======
        })
        res.json(item)
    } catch (error) {
        res.status(500).json({error: "erro interno do servidor"})
    }
})
 
//deleta um item da lista
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        await prisma.itemListaCompras.delete({
            where: {id: Number(req.params.id)}
        })
        return res.status(204).send()
    } catch (error) {
        res.status(500).json({error: "erro interno do servidor"})
    }
})
 
export default router
>>>>>>> 251f91ccce7377705d559fac702aeaba32c9b237
