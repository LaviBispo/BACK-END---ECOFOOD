"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const telaInicioRouter = (0, express_1.Router)();
telaInicioRouter.get('/', (req, res) => {
    res.json({ message: 'Tela inicial ok' });
});
exports.default = telaInicioRouter;
