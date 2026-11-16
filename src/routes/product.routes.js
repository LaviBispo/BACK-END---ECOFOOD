const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
  createProduct,
  findByBarcode,
  listProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  updateStatus,
} = require("../controllers/product.controller");

const router = Router();

router.use(authMiddleware); // todas as rotas de produto exigem login

// Tela "Adicionar Produto" -> aba Código de barras
router.get("/barcode/:code", findByBarcode);

// Tela "Adicionar Produto" -> aba Manual (e também usado após leitura do código)
router.post("/", createProduct);

// Tela "Estoque"
router.get("/", listProducts);

// Tela "Detalhes do Produto"
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

// Tela "Status do Produto"
router.put("/:id/status", updateStatus);

module.exports = router;
