const prisma = require("../config/prisma");

// GET /restaurant/me
// Tela "Meu Perfil"
async function getProfile(req, res) {
  try {
    const { restaurantId } = req;

    const restaurant = await prisma.restaurant.findUnique({
      where: { id: restaurantId },
      select: {
        id: true,
        name: true,
        cuisineType: true,
        address: true,
        phone: true,
        email: true,
        cnpj: true,
        createdAt: true,
      },
    });

    if (!restaurant) {
      return res.status(404).json({ error: "Restaurante não encontrado." });
    }

    return res.json(restaurant);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao buscar perfil do restaurante." });
  }
}

// PUT /restaurant/me
// Tela "Meu Perfil" -> ícone de editar em "Dados do restaurante"
// Body: { name?, cuisineType?, address?, phone?, email? }  (CNPJ não é editável)
async function updateProfile(req, res) {
  try {
    const { restaurantId } = req;
    const { name, cuisineType, address, phone, email } = req.body;

    const updated = await prisma.restaurant.update({
      where: { id: restaurantId },
      data: {
        ...(name !== undefined && { name }),
        ...(cuisineType !== undefined && { cuisineType }),
        ...(address !== undefined && { address }),
        ...(phone !== undefined && { phone }),
        ...(email !== undefined && { email }),
      },
    });

    return res.json(updated);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao atualizar perfil do restaurante." });
  }
}

module.exports = { getProfile, updateProfile };
