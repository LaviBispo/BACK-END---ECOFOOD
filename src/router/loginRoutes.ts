import { Router, Request, Response } from 'express';
import prisma from '../lib/prismaClient';

const router = Router();

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