const { PrismaClient } = require("@prisma/client");

// Instância única do Prisma reaproveitada em todo o back-end,
// evitando abrir várias conexões com o banco.
const prisma = new PrismaClient();

module.exports = prisma;
