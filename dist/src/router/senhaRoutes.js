"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validar_senhaRoutes_1 = require("./validar-senhaRoutes");
const router = (0, express_1.Router)();
router.post('/', (req, res) => {
    const { senha } = req.body;
    if (typeof senha !== 'string') {
        return res.status(400).json({
            valida: false,
            erros: ['Informe uma senha válida.'],
        });
    }
    const resultado = (0, validar_senhaRoutes_1.validarSenha)(senha);
    if (!resultado.valida) {
        return res.status(400).json(resultado);
    }
    return res.status(200).json({
        valida: true,
        mensagem: 'A senha atende a todas as regras de segurança.',
    });
});
exports.default = router;
