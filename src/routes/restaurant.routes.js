const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const { getProfile, updateProfile } = require("../controllers/restaurant.controller");

const router = Router();

router.use(authMiddleware);

// Tela "Meu Perfil"
router.get("/me", getProfile);
router.put("/me", updateProfile);

module.exports = router;
