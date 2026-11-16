const prisma = require("../config/prisma");

const VALID_STORAGE_LOCATIONS = ["GELADEIRA", "FREEZER", "DESPENSA"];
const VALID_CATEGORIES = ["HORTIFRUTI", "PROTEINAS", "LATICINIOS", "MERCEARIA", "BEBIDAS", "OUTROS"];

// Calcula quantos dias faltam até o vencimento (usado nas telas de Estoque e Detalhes)
function calcularDiasParaVencer(expirationDate) {
  const hoje = new Date();
  const validade = new Date(expirationDate);
  const diffMs = validade.setHours(0, 0, 0, 0) - hoje.setHours(0, 0, 0, 0);
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

// Deixa o produto pronto pra tela mostrar (adiciona diasParaVencer, ex: "2 dias")
function formatarProduto(product) {
  return { ...product, diasParaVencer: calcularDiasParaVencer(product.expirationDate) };
}

// POST /products
// Tela "Adicionar Produto" (aba Código de barras ou Manual)
async function createProduct(req, res) {
  try {
    const { name, barcode, category, storageLocation, quantity, unit, unitPrice, supplier, expirationDate } = req.body;
    const { restaurantId } = req;

    if (!name || !category || !storageLocation || !expirationDate) {
      return res.status(400).json({ error: "Nome, categoria, local de armazenamento e validade são obrigatórios." });
    }

    if (!VALID_CATEGORIES.includes(category)) {
      return res.status(400).json({ error: `Categoria inválida. Use: ${VALID_CATEGORIES.join(", ")}.` });
    }

    if (!VALID_STORAGE_LOCATIONS.includes(storageLocation)) {
      return res.status(400).json({ error: `Local inválido. Use: ${VALID_STORAGE_LOCATIONS.join(", ")}.` });
    }

    const product = await prisma.product.create({
      data: {
        name,
        barcode: barcode || null,
        category,
        storageLocation,
        quantity: quantity ? Number(quantity) : 1,
        unit: unit || "un",
        unitPrice: unitPrice !== undefined ? Number(unitPrice) : null,
        supplier: supplier || null,
        expirationDate: new Date(expirationDate),
        restaurantId,
      },
    });

    return res.status(201).json(formatarProduto(product));
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao cadastrar produto." });
  }
}

// GET /products/barcode/:code
// Tela "Adicionar Produto" -> aba "Código de barras"
async function findByBarcode(req, res) {
  try {
    const { code } = req.params;
    const { restaurantId } = req;

    const existing = await prisma.product.findFirst({
      where: { barcode: code, restaurantId },
      orderBy: { createdAt: "desc" },
    });

    if (!existing) {
      return res.status(404).json({ found: false, message: "Nenhum produto encontrado para este código. Preencha manualmente." });
    }

    return res.json({
      found: true,
      suggestion: {
        name: existing.name,
        category: existing.category,
        storageLocation: existing.storageLocation,
        unit: existing.unit,
        supplier: existing.supplier,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao buscar produto pelo código de barras." });
  }
}

// GET /products?storageLocation=&category=&search=
// Tela "Estoque" (abas Geladeira / Freezer / Despensa + busca)
async function listProducts(req, res) {
  try {
    const { restaurantId } = req;
    const { storageLocation, category, search } = req.query;

    const products = await prisma.product.findMany({
      where: {
        restaurantId,
        status: "ATIVO", // a tela de Estoque só mostra produtos ainda ativos
        ...(storageLocation ? { storageLocation } : {}),
        ...(category ? { category } : {}),
        ...(search ? { name: { contains: search } } : {}),
      },
      orderBy: { expirationDate: "asc" },
    });

    const produtosFormatados = products.map(formatarProduto);

    // A tela de Estoque mostra um banner: "X produtos próximos do vencimento"
    const proximosVencimento = produtosFormatados.filter((p) => p.diasParaVencer <= 3).length;

    return res.json({ proximosVencimento, produtos: produtosFormatados });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao listar produtos." });
  }
}

// GET /products/:id
// Tela "Detalhes do Produto"
async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const { restaurantId } = req;

    const product = await prisma.product.findFirst({ where: { id: Number(id), restaurantId } });
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    return res.json(formatarProduto(product));
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao buscar produto." });
  }
}

// PUT /products/:id
// Tela "Detalhes do Produto" -> botão "Editar"
async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { restaurantId } = req;
    const { name, category, storageLocation, quantity, unit, unitPrice, supplier, expirationDate } = req.body;

    const product = await prisma.product.findFirst({ where: { id: Number(id), restaurantId } });
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    const updated = await prisma.product.update({
      where: { id: Number(id) },
      data: {
        ...(name !== undefined && { name }),
        ...(category !== undefined && { category }),
        ...(storageLocation !== undefined && { storageLocation }),
        ...(quantity !== undefined && { quantity: Number(quantity) }),
        ...(unit !== undefined && { unit }),
        ...(unitPrice !== undefined && { unitPrice: Number(unitPrice) }),
        ...(supplier !== undefined && { supplier }),
        ...(expirationDate !== undefined && { expirationDate: new Date(expirationDate) }),
      },
    });

    return res.json(formatarProduto(updated));
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao atualizar produto." });
  }
}

// DELETE /products/:id
async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const { restaurantId } = req;

    const product = await prisma.product.findFirst({ where: { id: Number(id), restaurantId } });
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    await prisma.product.delete({ where: { id: Number(id) } });
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao excluir produto." });
  }
}

// PUT /products/:id/status
// Tela "Status do Produto" -> checkbox "Aproveitado" ou "Não Aproveitado" + botão "Concluir"
// Body: { status: "APROVEITADO" | "NAO_APROVEITADO" }
async function updateStatus(req, res) {
  try {
    const { id } = req.params;
    const { restaurantId } = req;
    const { status } = req.body;

    if (!["APROVEITADO", "NAO_APROVEITADO"].includes(status)) {
      return res.status(400).json({ error: "Status inválido. Use APROVEITADO ou NAO_APROVEITADO." });
    }

    const product = await prisma.product.findFirst({ where: { id: Number(id), restaurantId } });
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    const wasReduced = status === "APROVEITADO";
    const estimatedValue = product.unitPrice ? product.unitPrice * product.quantity : 0;

    const [, impactLog] = await prisma.$transaction([
      prisma.product.update({ where: { id: product.id }, data: { status } }),
      prisma.impactLog.create({
        data: {
          productId: product.id,
          restaurantId,
          quantityKg: product.quantity,
          estimatedValue,
          wasReduced,
        },
      }),
    ]);

    return res.json(impactLog);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao atualizar status do produto." });
  }
}

module.exports = {
  createProduct,
  findByBarcode,
  listProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  updateStatus,
};
