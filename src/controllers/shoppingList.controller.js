const prisma = require("../config/prisma");

// GET /shopping-list
// Tela "Lista de Compras" (modo "Por categoria")
// Já devolve os itens agrupados, pra facilitar a montagem da tela.
async function listItems(req, res) {
  try {
    const { restaurantId } = req;
    const items = await prisma.shoppingListItem.findMany({
      where: { restaurantId, purchased: false },
      orderBy: [{ priority: "desc" }, { createdAt: "asc" }],
    });

    // Agrupa por categoria, ex: { HORTIFRUTI: [...], PROTEINAS: [...] }
    const agrupadoPorCategoria = {};
    items.forEach((item) => {
      const chave = item.category || "OUTROS";
      if (!agrupadoPorCategoria[chave]) agrupadoPorCategoria[chave] = [];
      agrupadoPorCategoria[chave].push(item);
    });

    return res.json({ total: items.length, agrupadoPorCategoria, itens: items });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao listar itens de compra." });
  }
}

// POST /shopping-list
// Body: { name, category, quantity, unit, priority }
async function createItem(req, res) {
  try {
    const { restaurantId } = req;
    const { name, category, quantity, unit, priority } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Nome do item é obrigatório." });
    }

    const item = await prisma.shoppingListItem.create({
      data: {
        name,
        category: category || null,
        quantity: quantity ? Number(quantity) : 1,
        unit: unit || "un",
        priority: Boolean(priority),
        restaurantId,
      },
    });

    return res.status(201).json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao adicionar item à lista de compras." });
  }
}

// PUT /shopping-list/:id  (ex.: marcar checkbox como comprado)
async function updateItem(req, res) {
  try {
    const { id } = req.params;
    const { restaurantId } = req;
    const { name, category, quantity, unit, priority, purchased } = req.body;

    const item = await prisma.shoppingListItem.findFirst({ where: { id: Number(id), restaurantId } });
    if (!item) {
      return res.status(404).json({ error: "Item não encontrado." });
    }

    const updated = await prisma.shoppingListItem.update({
      where: { id: Number(id) },
      data: {
        ...(name !== undefined && { name }),
        ...(category !== undefined && { category }),
        ...(quantity !== undefined && { quantity: Number(quantity) }),
        ...(unit !== undefined && { unit }),
        ...(priority !== undefined && { priority: Boolean(priority) }),
        ...(purchased !== undefined && { purchased: Boolean(purchased) }),
      },
    });

    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao atualizar item da lista de compras." });
  }
}

// DELETE /shopping-list/:id
async function deleteItem(req, res) {
  try {
    const { id } = req.params;
    const { restaurantId } = req;

    const item = await prisma.shoppingListItem.findFirst({ where: { id: Number(id), restaurantId } });
    if (!item) {
      return res.status(404).json({ error: "Item não encontrado." });
    }

    await prisma.shoppingListItem.delete({ where: { id: Number(id) } });
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao excluir item da lista de compras." });
  }
}

module.exports = { listItems, createItem, updateItem, deleteItem };
