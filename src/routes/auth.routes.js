const { Router } = require("express");
const { register, login } = require("../controllers/auth.controller");

const router = Router();

// Telas "Cadastro 1 de 2" + "Cadastro 2 de 2"
router.post("/register", register);

// Tela "Login"
router.post("/login", login);

module.exports = router;
