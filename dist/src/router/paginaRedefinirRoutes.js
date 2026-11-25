"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const pagina = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>EcoFood - Criar nova senha</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f0fdf4; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
    .caixa { background: #fff; padding: 32px; border-radius: 12px; width: 100%; max-width: 380px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
    h1 { color: #16a34a; margin-top: 0; }
    input { width: 100%; padding: 10px; margin-top: 12px; border: 1px solid #ccc; border-radius: 6px; box-sizing: border-box; font-size: 15px; }
    button { width: 100%; margin-top: 20px; padding: 12px; background: #16a34a; color: #fff; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; }
    #mensagem { margin-top: 16px; font-size: 14px; white-space: pre-line; }
    .erro { color: #dc2626; } .ok { color: #16a34a; }
  </style>
</head>
<body>
  <div class="caixa">
    <h1>Criar nova senha</h1>
    <input type="password" id="novaSenha" placeholder="Nova senha" />
    <input type="password" id="confirmar" placeholder="Confirmar senha" />
    <button id="botao">Salvar nova senha</button>
    <p id="mensagem"></p>
  </div>
  <script>
    var botao = document.getElementById('botao');
    var msg = document.getElementById('mensagem');
    function mostrar(t, c) { msg.textContent = t; msg.className = c; }

    botao.addEventListener('click', async function () {
      var token = new URLSearchParams(window.location.search).get('token');
      var nova = document.getElementById('novaSenha').value;
      var conf = document.getElementById('confirmar').value;

      if (!token) return mostrar('Link inválido. Peça um novo email.', 'erro');
      if (!nova || !conf) return mostrar('Preencha os dois campos.', 'erro');
      if (nova !== conf) return mostrar('As senhas não são iguais.', 'erro');

      botao.disabled = true;
      try {
        var r = await fetch('/api/login/redefinir-senha', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: token, novaSenha: nova })
        });
        var d = await r.json();
        if (r.ok) {
          mostrar('Senha alterada com sucesso! Agora é só entrar com a senha nova.', 'ok');
        } else {
          mostrar(d.erros ? d.erros.join('\\n') : d.error, 'erro');
          botao.disabled = false;
        }
      } catch (e) {
        mostrar('Erro de conexão com o servidor.', 'erro');
        botao.disabled = false;
      }
    });
  </script>
</body>
</html>`;
router.get('/redefinir-senha', (req, res) => {
    res.status(200).send(pagina);
});
exports.default = router;
