const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");

function generateToken(user) {
  return jwt.sign(
    { userId: user.id, restaurantId: user.restaurantId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
}

// POST /auth/register
// Recebe os dados das duas telas de cadastro (1 de 2 e 2 de 2) juntos.
// Body esperado:
// {
//   restaurant: { name, cuisineType, address, phone, cnpj },
//   user: { name, email, password, confirmPassword }
// }
async function register(req, res) {
  try {
    const { restaurant, user } = req.body;

    if (!restaurant || !user) {
      return res.status(400).json({ error: "Dados do restaurante e do usuário são obrigatórios." });
    }

    const { name: restaurantName, cuisineType, address, phone, cnpj } = restaurant;
    const { name: userName, email, password, confirmPassword } = user;

    if (!restaurantName || !cuisineType || !address || !phone || !cnpj) {
      return res.status(400).json({ error: "Preencha todos os dados do restaurante." });
    }

    if (!userName || !email || !password) {
      return res.status(400).json({ error: "Preencha todos os dados de acesso." });
    }

    if (confirmPassword !== undefined && password !== confirmPassword) {
      return res.status(400).json({ error: "As senhas não coincidem." });
    }

    const [emailInUse, cnpjInUse] = await Promise.all([
      prisma.user.findUnique({ where: { email } }),
      prisma.restaurant.findUnique({ where: { cnpj } }),
    ]);

    if (emailInUse) {
      return res.status(409).json({ error: "Este e-mail já está cadastrado." });
    }
    if (cnpjInUse) {
      return res.status(409).json({ error: "Este CNPJ já está cadastrado." });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    // Cria restaurante + usuário responsável em uma transação,
    // já que as duas telas de cadastro formam um único fluxo.
    const createdUser = await prisma.$transaction(async (tx) => {
      const newRestaurant = await tx.restaurant.create({
        data: { name: restaurantName, cuisineType, address, phone, cnpj },
      });

      const newUser = await tx.user.create({
        data: {
          name: userName,
          email,
          passwordHash,
          restaurantId: newRestaurant.id,
        },
      });

      return newUser;
    });

    const token = generateToken(createdUser);

    return res.status(201).json({
      token,
      user: { id: createdUser.id, name: createdUser.name, email: createdUser.email },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao cadastrar restaurante." });
  }
}

// POST /auth/login
// Body: { email, password }
async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Informe e-mail e senha." });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: { restaurant: true },
    });

    if (!user) {
      return res.status(401).json({ error: "E-mail ou senha inválidos." });
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatches) {
      return res.status(401).json({ error: "E-mail ou senha inválidos." });
    }

    const token = generateToken(user);

    return res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
      restaurant: { id: user.restaurant.id, name: user.restaurant.name },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao efetuar login." });
  }
}

module.exports = { register, login };
