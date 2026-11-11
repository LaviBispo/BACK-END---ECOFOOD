
import { Router, Request, Response } from 'express';
import { validarSenha } from './validar-senhaRoutes';

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const { senha } = req.body;

    if (typeof senha !== 'string') {
        return res.status(400).json({
            valida: false,
            erros: ['Informe uma senha válida.'],
        });
    }

    const resultado = validarSenha(senha);

    if (!resultado.valida) {
        return res.status(400).json(resultado);
    }

    return res.status(200).json({
        valida: true,
        mensagem: 'A senha atende a todas as regras de segurança.',
    });
});

export default router;
