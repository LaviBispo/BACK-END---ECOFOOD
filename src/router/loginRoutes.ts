import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prismaClient';
import { authenticate } from '../middlewares/auth';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import rateLimit from 'express-rate-limit';
import { enviarEmailRedefinicao } from '../lib/mailer';
import { validarSenha } from './validar-senhaRoutes';

const router = Router();

  router.get('/abrir-app', (req: Request, res: Response) => {
  const token = req.query.token;
  res.redirect(`ecofood://esqueciSenha?token=${token}`);
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

    const senhaCorreta = await bcrypt.compare(senha, usuario.password);

    if (!senhaCorreta) {
      return res.status(401).json({
        error: 'Email ou senha incorretos',
      });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ error: 'JWT_SECRET não configurado' });
    }

    const token = jwt.sign(
      {
        userId: usuario.id,
        restaurantId: usuario.id,
        name: usuario.name,
        email: usuario.email,
      },
      jwtSecret,
      { expiresIn: '8h' },
    );

    return res.status(200).json({
      token,
      usuario: {
        id: usuario.id,
        name: usuario.name,
        email: usuario.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Erro ao fazer login',
    });
  }
});


router.get("/", authenticate, async (req: Request, res: Response) => {
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


router.get("/me", authenticate, async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

    const usuario = await prisma.restauranteCadastro.findUnique({
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
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Erro ao buscar usuário",
    });
  }
});

const limitadorEsqueciSenha = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5,
  message: { error: 'Muitas tentativas. Tente novamente em alguns minutos.' },
});

router.post(
  '/esqueci-senha',
  limitadorEsqueciSenha,
  async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Informe o email' });
      }

      // Mesma resposta exista o email ou não (não revela quais emails estão cadastrados)
      const respostaPadrao = {
        mensagem:
          'Se o email estiver cadastrado, você receberá um link para redefinir a senha.',
      };

      const usuario = await prisma.restauranteCadastro.findUnique({
        where: { email },
      });

      if (!usuario) {
        return res.status(200).json(respostaPadrao);
      }

      const token = crypto.randomBytes(32).toString('hex');
      const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

      await prisma.restauranteCadastro.update({
        where: { id: usuario.id },
        data: {
          resetPasswordToken: tokenHash,
          resetPasswordExpires: new Date(Date.now() + 60 * 60 * 1000), // 1 hora
        },
      });

     const link = `${process.env.API_URL}/redefinir-senha?token=${token}`;

      await enviarEmailRedefinicao(usuario.email, usuario.name, link);

      return res.status(200).json(respostaPadrao);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: 'Erro ao solicitar redefinição de senha' });
    }
  },
);

router.post('/redefinir-senha', async (req: Request, res: Response) => {
  try {
    const { token, novaSenha } = req.body;

    if (!token || typeof token !== 'string' || typeof novaSenha !== 'string') {
      return res
        .status(400)
        .json({ error: 'Token e nova senha são obrigatórios' });
    }

    const resultado = validarSenha(novaSenha);

    if (!resultado.valida) {
      return res.status(400).json(resultado);
    }

    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

    const usuario = await prisma.restauranteCadastro.findFirst({
      where: {
        resetPasswordToken: tokenHash,
        resetPasswordExpires: { gt: new Date() },
      },
    });

    if (!usuario) {
      return res.status(400).json({ error: 'Token inválido ou expirado' });
    }

    const senhaHash = await bcrypt.hash(novaSenha, 10);

    await prisma.restauranteCadastro.update({
      where: { id: usuario.id },
      data: {
        password: senhaHash,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });

    return res.status(200).json({ mensagem: 'Senha redefinida com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao redefinir senha' });
  }
});

export default router;