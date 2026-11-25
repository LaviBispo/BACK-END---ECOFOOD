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
// Função auxiliar para limpar e consultar o CNPJ na API pública do CNPJá
async function validarCnpjReceita(cnpjBruto) {
    const cnpjLimpo = cnpjBruto.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
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
        console.log('Resposta da API de CNPJ:', resposta);
        if (!resposta.ok) {
            return {
                valido: false,
                erro: 'Não foi possível validar o CNPJ no momento.',
                statusHttp: 502,
            };
        }
        // 2. Aplique o tipo 'as CnpjaResponse' aqui
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
router.post('/', async (req, res) => {
    try {
        const { nome, endereco, telefone, email, cnpj, senha, } = req.body;
        if (!nome || !endereco || !telefone || !email || !cnpj || !senha) {
            return res.status(400).json({
                error: 'Preencha todos os campos',
            });
        }
        if (typeof senha !== 'string' || typeof cnpj !== 'string') {
            return res.status(400).json({
                error: 'Senha e CNPJ devem ser textos válidos.',
            });
        }
        const resultadoSenha = (0, validar_senhaRoutes_1.validarSenha)(senha);
        if (!resultadoSenha.valida) {
            return res.status(400).json({
                error: 'A senha não atende às regras de segurança.',
                erros: resultadoSenha.erros,
            });
        }
        // Padroniza o CNPJ (apenas números/letras) antes de buscar no banco e na API
        const cnpjLimpo = cnpj.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        // Verifica primeiro no banco local para economizar requisições na API externa
        const usuarioExistente = await prismaClient_1.default.restauranteCadastro.findFirst({
            where: {
                OR: [{ email }, { cnpj: cnpjLimpo }],
            },
        });
        if (usuarioExistente) {
            return res.status(409).json({
                error: 'Email ou CNPJ já cadastrado',
            });
        }
        // Valida se o CNPJ existe e está ativo na Receita Federal
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
                email,
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
        console.error(error);
        return res.status(500).json({
            error: 'Erro ao cadastrar restaurante',
        });
    }
});
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
