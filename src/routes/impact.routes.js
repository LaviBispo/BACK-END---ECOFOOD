const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const { getImpact } = require("../controllers/impact.controller");

const router = Router();

router.use(authMiddleware);

// Tela "Meu Impacto"
router.get("/", getImpact);

module.exports = router;
