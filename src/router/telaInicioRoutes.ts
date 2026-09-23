import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();

//busca os dados da tela inicio
router.get("/:restauranteId", async (req: Request, res: Response) => {
  try {
    const restauranteId = Number(req.params.restauranteId)

    //data limite para produtos proximos do vencimento
    const dataLimite = new Date()
    dataLimite.setDate(dataLimite.getDate() + 7)

    //busca os produtos do restaurante
    const produtos = await prisma.produto.findMany({
      where: {
        restauranteId: restauranteId,
        status: {
          not: "REMOVIDO"
        }
      }
    })

    //conta os produtos
    const totalProdutos = produtos.length

    //conta os produtos proximos do vencimento
    let produtosVencendo = 0

    for (const produto of produtos) {
      if (produto.dataValidade <= dataLimite) {
        produtosVencendo++
      }
    }

    //conta os produtos esgotados
    let produtosEsgotados = 0

    for (const produto of produtos) {
      if (produto.status === "ESGOTADO") {
        produtosEsgotados++
      }
    }

    //busca os registros de impacto
    const registros = await prisma.registroImpacto.findMany({
      where: {
        restauranteId: restauranteId
      }
    })

    //calcula os alimentos salvos
    let alimentosSalvos = 0
    let alimentosDesperdicados = 0

    for (const registro of registros) {
      if (registro.foiAproveitado) {
        alimentosSalvos += registro.quantidadeKg
      } else {
        alimentosDesperdicados += registro.quantidadeKg
      }
    }

    //calcula a redução de resíduos
    const totalKg = alimentosSalvos + alimentosDesperdicados

    let reducaoResiduos = 0

    if (totalKg > 0) {
      reducaoResiduos = (alimentosSalvos / totalKg) * 100
    }

    //conta os itens que ainda precisam ser comprados
    const itensParaComprar = await prisma.itemListaCompras.count({
      where: {
        restauranteId: restauranteId,
        comprado: false
      }
    })

    //conta quantos produtos existem em cada local
    const geladeira = produtos.filter(
      produto => produto.localArmazenamento === "GELADEIRA"
    ).length

    const freezer = produtos.filter(
      produto => produto.localArmazenamento === "FREEZER"
    ).length

    const despensa = produtos.filter(
      produto => produto.localArmazenamento === "DESPENSA"
    ).length

    res.json({
      indicadores: {
        totalProdutos: totalProdutos,
        produtosVencendo: produtosVencendo,
        produtosEsgotados: produtosEsgotados,
        alimentosSalvos: Number(alimentosSalvos.toFixed(2))
      },

      alerta: produtosVencendo > 0
        ? {
          tipo: "VENCIMENTO",
          titulo: "Atenção",
          mensagem: `${produtosVencendo} produtos próximos do vencimento.`,
          quantidade: produtosVencendo
        }
        : null,

      estoque: {
        geladeira: geladeira,
        freezer: freezer,
        despensa: despensa
      },

      listaCompras: {
        itensParaComprar: itensParaComprar,
        produtosVencendo: produtosVencendo
      },

      impacto: {
        alimentosSalvos: Number(alimentosSalvos.toFixed(2)),
        reducaoResiduos: Number(reducaoResiduos.toFixed(2))
      }
    })

  } catch (error) {
    res.status(500).json({ error: "erro interno do servidor" })
  }
})

export default router