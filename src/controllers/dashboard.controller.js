const prisma = require("../config/prisma");

// Função pequena e reutilizável: retorna o primeiro e o último dia do mês atual.
// Serve para filtrar "este mês" nos cards de desperdício/economia.
function getCurrentMonthRange() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return { start, end };
}

// GET /dashboard
// Essa única rota devolve TODOS os números que aparecem na tela "Início".
// É mais simples pro app mobile: uma chamada só, em vez de 6 chamadas separadas.
async function getDashboard(req, res) {
  try {
    const { restaurantId } = req;
    const { start, end } = getCurrentMonthRange();

    // Daqui a 3 dias, pra saber quais produtos estão "próximos do vencimento"
    const in3Days = new Date();
    in3Days.setDate(in3Days.getDate() + 3);

    // -----------------------------------------------------
    // 1) Card "Produtos cadastrados"
    // -----------------------------------------------------
    const totalProdutos = await prisma.product.count({
      where: { restaurantId, status: "ATIVO" },
    });

    // -----------------------------------------------------
    // 2) Card "Próximos do vencimento"
    // -----------------------------------------------------
    const proximosVencimento = await prisma.product.findMany({
      where: {
        restaurantId,
        status: "ATIVO",
        expirationDate: { lte: in3Days },
      },
      orderBy: { expirationDate: "asc" },
    });

    // -----------------------------------------------------
    // 3) Card "Produtos em falta" (itens ainda não comprados na lista de compras)
    // -----------------------------------------------------
    const produtosEmFalta = await prisma.shoppingListItem.count({
      where: { restaurantId, purchased: false },
    });

    // -----------------------------------------------------
    // 4) Cards "kg desperdiçados" e "economia gerada" (este mês)
    // -----------------------------------------------------
    const impactLogsDoMes = await prisma.impactLog.findMany({
      where: { restaurantId, createdAt: { gte: start, lt: end } },
    });

    const kgDesperdicados = impactLogsDoMes
      .filter((log) => !log.wasReduced)
      .reduce((soma, log) => soma + log.quantityKg, 0);

    const economiaGerada = impactLogsDoMes
      .filter((log) => log.wasReduced)
      .reduce((soma, log) => soma + log.estimatedValue, 0);

    // -----------------------------------------------------
    // 5) Card "Estoque por categoria" (Geladeira / Freezer / Despensa em %)
    // -----------------------------------------------------
    const produtosAtivos = await prisma.product.findMany({
      where: { restaurantId, status: "ATIVO" },
      select: { storageLocation: true },
    });

    const contagemPorCategoria = { GELADEIRA: 0, FREEZER: 0, DESPENSA: 0 };
    produtosAtivos.forEach((p) => {
      contagemPorCategoria[p.storageLocation] += 1;
    });

    const totalParaPorcentagem = produtosAtivos.length || 1; // evita dividir por zero
    const estoquePorCategoria = {
      geladeira: Math.round((contagemPorCategoria.GELADEIRA / totalParaPorcentagem) * 100),
      freezer: Math.round((contagemPorCategoria.FREEZER / totalParaPorcentagem) * 100),
      despensa: Math.round((contagemPorCategoria.DESPENSA / totalParaPorcentagem) * 100),
    };

    // -----------------------------------------------------
    // 6) Card "Lista de compras" (mostra só uma prévia, ex: 3 itens)
    // -----------------------------------------------------
    const listaDeComprasPreview = await prisma.shoppingListItem.findMany({
      where: { restaurantId, purchased: false },
      orderBy: [{ priority: "desc" }, { createdAt: "asc" }],
      take: 3,
    });

    // -----------------------------------------------------
    // 7) Card "Impacto do seu restaurante" (visão geral do mês)
    // -----------------------------------------------------
    const totalAproveitadoKg = impactLogsDoMes
      .filter((log) => log.wasReduced)
      .reduce((soma, log) => soma + log.quantityKg, 0);

    const totalGeradoKg = impactLogsDoMes.reduce((soma, log) => soma + log.quantityKg, 0);
    const reducaoDesperdicioPercentual =
      totalGeradoKg > 0 ? Math.round((totalAproveitadoKg / totalGeradoKg) * 100) : 0;

    // -----------------------------------------------------
    // Junta tudo em um único JSON pro app montar a tela Início
    // -----------------------------------------------------
    return res.json({
      cards: {
        produtosCadastrados: totalProdutos,
        proximosVencimento: proximosVencimento.length,
        produtosEmFalta,
        kgDesperdicados: Number(kgDesperdicados.toFixed(1)),
        economiaGeradaEsteMes: Number(economiaGerada.toFixed(2)),
      },
      alertaVencimento: {
        quantidade: proximosVencimento.length,
        produtos: proximosVencimento.slice(0, 5), // só os 5 mais urgentes
      },
      estoquePorCategoria,
      listaDeCompras: listaDeComprasPreview,
      impactoDoRestaurante: {
        alimentosAproveitadosKg: Number(totalAproveitadoKg.toFixed(1)),
        economiaGeradaEsteMes: Number(economiaGerada.toFixed(2)),
        reducaoDesperdicioPercentual,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao carregar o dashboard." });
  }
}

module.exports = { getDashboard };
