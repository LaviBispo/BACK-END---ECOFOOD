const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const { getDashboard } = require("../controllers/dashboard.controller");

const router = Router();

router.use(authMiddleware);

// Tela "Início"
router.get("/", getDashboard);

module.exports = router;
