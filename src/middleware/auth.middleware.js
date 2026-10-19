const jwt = require("jsonwebtoken");

// Protege rotas: exige um token JWT válido no header Authorization.
// Ao validar, injeta req.userId e req.restaurantId para as próximas camadas.
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  const [, token] = authHeader.split(" "); // formato: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Token mal formatado." });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    req.restaurantId = payload.restaurantId;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido ou expirado." });
  }
}

module.exports = authMiddleware;
