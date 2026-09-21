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

router.get("/", async (req: Request, res: Response) => {
  try {

    const usuarios = await prisma.restauranteCadastro.findMany({
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

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao buscar usuarios",
    });
  }
});

export default router;