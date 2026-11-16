import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function enviarEmailRedefinicao(
  destino: string,
  nome: string,
  link: string,
) {
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