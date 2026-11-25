"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../lib/prismaClient"));
const auth_1 = require("../middlewares/auth");
const validar_senhaRoutes_1 = require("./validar-senhaRoutes");
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = (0, express_1.Router)();
// Limpa e consulta o CNPJ na API externa.
async function validarCnpjReceita(cnpjBruto) {
    const cnpjLimpo = cnpjBruto
        .replace(/[^a-zA-Z0-9]/g, '')
        .toUpperCase();
    if (cnpjLimpo.length !== 14) {
        return {
            valido: false,
            erro: 'O CNPJ deve conter exatamente 14 caracteres.',
            statusHttp: 400,
        };
    }
    try {
        const resposta = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpjLimpo}`);
        if (resposta.status === 400) {
            return {
                valido: false,
                erro: 'CNPJ não encontrado na base da Receita Federal.',
                statusHttp: 400,
            };
        }
        if (resposta.status === 429) {
            return {
                valido: false,
                erro: 'Limite de consultas de CNPJ excedido. Tente novamente em instantes.',
                statusHttp: 503,
            };
        }
        if (!resposta.ok) {
            return {
                valido: false,
                erro: 'Não foi possível validar o CNPJ no momento.',
                statusHttp: 502,
            };
        }
        const dados = (await resposta.json());
        const situacao = dados.situacao?.toUpperCase() || '';
        if (situacao !== 'ATIVA') {
            return {
                valido: false,
                erro: `O CNPJ informado não está ativo na Receita Federal (Situação: ${situacao || 'Desconhecida'}).`,
                statusHttp: 400,
            };
        }
        return { valido: true };
    }
    catch (error) {
        console.error('Erro ao consultar API de CNPJ:', error);
        return {
            valido: false,
            erro: 'Falha de comunicação ao validar o CNPJ.',
            statusHttp: 502,
        };
    }
}
// CADASTRO DE RESTAURANTE
router.post('/', async (req, res) => {
    try {
        const { nome, endereco, telefone, email, cnpj, senha, } = req.body;
        if (!nome || !endereco || !telefone || !email || !cnpj || !senha) {
            return res.status(400).json({
                error: 'Preencha todos os campos',
            });
        }
        if (typeof senha !== 'string' ||
            typeof cnpj !== 'string' ||
            typeof email !== 'string') {
            return res.status(400).json({
                error: 'Senha, e-mail e CNPJ devem ser textos válidos.',
            });
        }
        const emailLimpo = email.trim().toLowerCase();
        const resultadoSenha = (0, validar_senhaRoutes_1.validarSenha)(senha);
        if (!resultadoSenha.valida) {
            return res.status(400).json({
                error: 'A senha não atende às regras de segurança.',
                erros: resultadoSenha.erros,
            });
        }
        const cnpjLimpo = cnpj
            .replace(/[^a-zA-Z0-9]/g, '')
            .toUpperCase();
        // Busca os dados cadastrados para verificar duplicidade.
        const restaurantes = await prismaClient_1.default.restauranteCadastro.findMany({
            select: {
                email: true,
                cnpj: true,
            },
        });
        const emailExiste = restaurantes.some((restaurante) => restaurante.email.trim().toLowerCase() === emailLimpo);
        const cnpjExiste = restaurantes.some((restaurante) => restaurante.cnpj
            .replace(/[^a-zA-Z0-9]/g, '')
            .toUpperCase() === cnpjLimpo);
        if (emailExiste && cnpjExiste) {
            return res.status(409).json({
                error: 'O e-mail e o CNPJ já estão cadastrados.',
            });
        }
        if (emailExiste) {
            return res.status(409).json({
                error: 'Este e-mail já está cadastrado.',
            });
        }
        if (cnpjExiste) {
            return res.status(409).json({
                error: 'Este CNPJ já está cadastrado.',
            });
        }
        // Valida o CNPJ na Receita Federal.
        const resultadoCnpj = await validarCnpjReceita(cnpjLimpo);
        if (!resultadoCnpj.valido) {
            return res.status(resultadoCnpj.statusHttp || 400).json({
                error: resultadoCnpj.erro,
            });
        }
        const senhaHash = await bcrypt_1.default.hash(senha, 10);
        const usuario = await prismaClient_1.default.restauranteCadastro.create({
            data: {
                name: nome,
                password: senhaHash,
                endereco,
                telefone,
                email: emailLimpo,
                cnpj: cnpjLimpo,
            },
        });
        return res.status(201).json({
            mensagem: 'Restaurante cadastrado com sucesso',
            usuario: {
                id: usuario.id,
                name: usuario.name,
                email: usuario.email,
                cnpj: usuario.cnpj,
                telefone: usuario.telefone,
                endereco: usuario.endereco,
            },
        });
    }
    catch (error) {
        console.error('Erro ao cadastrar restaurante:', error);
        return res.status(500).json({
            error: 'Erro ao cadastrar restaurante',
        });
    }
});
// LISTAR RESTAURANTES
router.get('/', auth_1.authenticate, async (req, res) => {
    try {
        const usuarios = await prismaClient_1.default.restauranteCadastro.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                cnpj: true,
                telefone: true,
                endereco: true,
            },
        });
        return res.status(200).json(usuarios);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao buscar usuarios',
        });
    }
});
exports.default = router;
