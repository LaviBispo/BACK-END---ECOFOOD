"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const auth_1 = require("../middlewares/auth");
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const mailer_1 = require("../lib/mailer");
const validar_senhaRoutes_1 = require("./validar-senhaRoutes");
const router = (0, express_1.Router)();
router.get('/abrir-app', (req, res) => {
    const token = req.query.token;
    res.redirect(`ecofood://esqueciSenha?token=${token}`);
});
router.post('/', async (req, res) => {
    try {
        const { email, senha } = req.body;
        if (!email || !senha) {
            return res.status(400).json({
                error: "Preencha email e senha",
            });
        }
        const usuario = await prismaClient_1.default.restauranteCadastro.findUnique({
            where: {
                email,
            },
        });
        if (!usuario) {
            return res.status(404).json({
                error: 'Restaurante não encontrado',
            });
        }
        const senhaCorreta = await bcrypt_1.default.compare(senha, usuario.password);
        if (!senhaCorreta) {
            return res.status(401).json({
                error: 'Email ou senha incorretos',
            });
        }
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ error: 'JWT_SECRET não configurado' });
        }
        const token = jsonwebtoken_1.default.sign({
            userId: usuario.id,
            restaurantId: usuario.id,
            name: usuario.name,
            email: usuario.email,
        }, jwtSecret, { expiresIn: '8h' });
        return res.status(200).json({
            token,
            usuario: {
                id: usuario.id,
                name: usuario.name,
                email: usuario.email,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao fazer login',
        });
    }
});
router.get("/", auth_1.authenticate, async (req, res) => {
    try {
        const usuarios = await prismaClient_1.default.restauranteCadastro.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                cnpj: true,
                telefone: true,
                endereco: true,
            }
        });
        return res.status(200).json(usuarios);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro ao buscar usuarios",
        });
    }
});
router.get("/me", auth_1.authenticate, async (req, res) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const usuario = await prismaClient_1.default.restauranteCadastro.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                name: true,
                email: true,
                cnpj: true,
                telefone: true,
                endereco: true,
            }
        });
        return res.status(200).json(usuario);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Erro ao buscar usuário",
        });
    }
});
const limitadorEsqueciSenha = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5,
    message: { error: 'Muitas tentativas. Tente novamente em alguns minutos.' },
});
router.post('/esqueci-senha', limitadorEsqueciSenha, async (req, res) => {
    try {
        const { email } = req.body;
        if (!email || typeof email !== 'string') {
            return res.status(400).json({ error: 'Informe o email' });
        }
        // Mesma resposta exista o email ou não (não revela quais emails estão cadastrados)
        const respostaPadrao = {
            mensagem: 'Se o email estiver cadastrado, você receberá um link para redefinir a senha.',
        };
        const usuario = await prismaClient_1.default.restauranteCadastro.findUnique({
            where: { email },
        });
        if (!usuario) {
            return res.status(200).json(respostaPadrao);
        }
        const token = crypto_1.default.randomBytes(32).toString('hex');
        const tokenHash = crypto_1.default.createHash('sha256').update(token).digest('hex');
        await prismaClient_1.default.restauranteCadastro.update({
            where: { id: usuario.id },
            data: {
                resetPasswordToken: tokenHash,
                resetPasswordExpires: new Date(Date.now() + 60 * 60 * 1000), // 1 hora
            },
        });
        const link = `${process.env.API_URL}/redefinir-senha?token=${token}`;
        await (0, mailer_1.enviarEmailRedefinicao)(usuario.email, usuario.name, link);
        return res.status(200).json(respostaPadrao);
    }
    catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ error: 'Erro ao solicitar redefinição de senha' });
    }
});
router.post('/redefinir-senha', async (req, res) => {
    try {
        const { token, novaSenha } = req.body;
        if (!token || typeof token !== 'string' || typeof novaSenha !== 'string') {
            return res
                .status(400)
                .json({ error: 'Token e nova senha são obrigatórios' });
        }
        const resultado = (0, validar_senhaRoutes_1.validarSenha)(novaSenha);
        if (!resultado.valida) {
            return res.status(400).json(resultado);
        }
        const tokenHash = crypto_1.default.createHash('sha256').update(token).digest('hex');
        const usuario = await prismaClient_1.default.restauranteCadastro.findFirst({
            where: {
                resetPasswordToken: tokenHash,
                resetPasswordExpires: { gt: new Date() },
            },
        });
        if (!usuario) {
            return res.status(400).json({ error: 'Token inválido ou expirado' });
        }
        const senhaHash = await bcrypt_1.default.hash(novaSenha, 10);
        await prismaClient_1.default.restauranteCadastro.update({
            where: { id: usuario.id },
            data: {
                password: senhaHash,
                resetPasswordToken: null,
                resetPasswordExpires: null,
            },
        });
        return res.status(200).json({ mensagem: 'Senha redefinida com sucesso' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao redefinir senha' });
    }
});
exports.default = router;
