import { Router, Request, Response } from 'express'
import prisma from '../lib/prismaClient';

const userRouter = Router()

userRouter.post('/', async (req:Request, res:Response) => {
  try{
    const {nome, endereco, telefone, email, cnpj } = req.body;

    if (!nome || !endereco || !telefone || !email || !cnpj ) {
        return res.status(400).json({
            error: "Preencha todos os campos"
        });
    }

    const usuarioExistente = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { cnpj }],
      },
    });

    if (usuarioExistente) {
      return res.status(400).json({
        error: "Email ou cnpj já cadastrado",
      });
    }

      const usuario = await prisma.user.create({
      data: {
        nome,
        email,
        cpf,
        curso,
        role: "USER",
        senha: senhaHash,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao registrar restaurante",
    });
  }
})























export default userRouter
