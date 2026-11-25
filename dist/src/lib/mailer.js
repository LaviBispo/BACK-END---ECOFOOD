"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviarEmailRedefinicao = enviarEmailRedefinicao;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});
async function enviarEmailRedefinicao(destino, nome, link) {
    await transporter.sendMail({
        from: `"EcoFood" <${process.env.SMTP_USER}>`,
        to: destino,
        subject: 'Redefinição de senha',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2>Olá, ${nome}!</h2>
        <p>Recebemos um pedido para redefinir a senha da sua conta.</p>
        <p>
          <a href="${link}"
             style="display:inline-block;padding:12px 24px;background:#16a34a;color:#fff;text-decoration:none;border-radius:6px;">
            Criar nova senha
          </a>
        </p>
        <p>Esse link expira em <b>1 hora</b>.</p>
        <p style="color:#666;font-size:13px;">
          Se você não fez esse pedido, é só ignorar este email. Sua senha continua a mesma.
        </p>
      </div>
    `,
    });
}
