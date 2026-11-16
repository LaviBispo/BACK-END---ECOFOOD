const prisma = require("../config/prisma");

function getCurrentMonthRange() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return { start, end };
}

// Descobre em qual "semana do mês" uma data cai (Sem 1, Sem 2, Sem 3...).
// Simples e suficiente pro gráfico "Evolução do seu impacto".
function numeroDaSemanaDoMes(data) {
  return Math.ceil(data.getDate() / 7);
}

// GET /impact
// Tela "Meu Impacto"
async function getImpact(req, res) {
  try {
    const { restaurantId } = req;
    const { start, end } = getCurrentMonthRange();

    const logsDoMes = await prisma.impactLog.findMany({
      where: { restaurantId, createdAt: { gte: start, lt: end } },
    });

    const aproveitados = logsDoMes.filter((log) => log.wasReduced);
    const naoAproveitados = logsDoMes.filter((log) => !log.wasReduced);

    // Card "32 kg de alimentos salvos"
    const kgSalvos = aproveitados.reduce((soma, log) => soma + log.quantityKg, 0);

    // Card "R$ 680 economizados este mês"
    const economiaGerada = aproveitados.reduce((soma, log) => soma + log.estimatedValue, 0);

    // Card "14% de redução de resíduos"
    const totalKg = logsDoMes.reduce((soma, log) => soma + log.quantityKg, 0);
    const reducaoPercentual = totalKg > 0 ? Math.round((kgSalvos / totalKg) * 100) : 0;

    // Card "24 escolhas conscientes" -> quantas vezes marcou "Aproveitado"
    const escolhasConscientes = aproveitados.length;

    // Gráfico "Evolução do seu impacto (Kg)" -> soma de kg salvos por semana do mês
    const kgPorSemana = {};
    aproveitados.forEach((log) => {
      const semana = numeroDaSemanaDoMes(new Date(log.createdAt));
      kgPorSemana[semana] = (kgPorSemana[semana] || 0) + log.quantityKg;
    });

    const evolucaoSemanal = Object.keys(kgPorSemana)
      .sort((a, b) => Number(a) - Number(b))
      .map((semana) => ({
        semana: `Sem ${semana}`,
        kg: Number(kgPorSemana[semana].toFixed(1)),
      }));

    return res.json({
      kgAlimentosSalvos: Number(kgSalvos.toFixed(1)),
      economiaGeradaEsteMes: Number(economiaGerada.toFixed(2)),
      reducaoDesperdicioPercentual: reducaoPercentual,
      escolhasConscientes,
      evolucaoSemanal,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao carregar dados de impacto." });
  }
}

module.exports = { getImpact };
