import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      nome,
      endereco,
      telefone,
      email,
      cnpj,
      senha,
    } = req.body;

    if (!nome || !endereco || !telefone || !email || !cnpj || !senha) {
      return res.status(400).json({
        error: 'Preencha todos os campos',
      });
    }

const usuarioExistente = await prisma.restauranteCadastro.findFirst({
  where: {
    OR: [{ email }, { cnpj }],
  },
});

    if (usuarioExistente) {
      return res.status(409).json({
        error: 'Email ou CNPJ já cadastrado',
      });
    }

const usuario = await prisma.restauranteCadastro.create({
  data: {
    name: nome,
    password: senha,
    endereco,
    telefone,
    email,
    cnpj,
  },
});

    return res.status(201).json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Erro ao registrar restaurante',
    });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;

     if (!email || !senha) {
      return res.status(400).json({
        error: "Preencha email e senha",
      });
    }

    const usuario = await prisma.restauranteCadastro.findUnique({
      where: {
        email,
      },
    });

    if (!usuario) {
      return res.status(404).json({
        error: 'Restaurante não encontrado',
      });
    }

    if (usuario.password !== senha) {
      return res.status(401).json({
        error: 'Senha incorreta',
      });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Erro ao fazer login',
    });
  }
});

export default router;