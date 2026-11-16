/*
  Warnings:

  - You are about to drop the `impact_logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `restaurants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shopping_list_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "impact_logs";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "products";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "restaurants";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "shopping_list_items";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "restaurantes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipoCozinha" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT,
    "cnpj" TEXT NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senhaHash" TEXT NOT NULL,
    "cargo" TEXT NOT NULL DEFAULT 'DONO',
    "restauranteId" INTEGER NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "usuarios_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "codigoBarras" TEXT,
    "categoria" TEXT NOT NULL,
    "localArmazenamento" TEXT NOT NULL,
    "quantidade" REAL NOT NULL DEFAULT 1,
    "unidade" TEXT NOT NULL DEFAULT 'un',
    "precoUnitario" REAL,
    "fornecedor" TEXT,
    "dataValidade" DATETIME NOT NULL,
    "situacao" TEXT NOT NULL DEFAULT 'ATIVO',
    "restauranteId" INTEGER NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "produtos_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "registros_impacto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produtoId" INTEGER NOT NULL,
    "restauranteId" INTEGER NOT NULL,
    "quantidadeKg" REAL NOT NULL,
    "valorEstimado" REAL NOT NULL,
    "foiAproveitado" BOOLEAN NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "registros_impacto_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "registros_impacto_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "itens_lista_compras" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT,
    "quantidade" REAL NOT NULL DEFAULT 1,
    "unidade" TEXT NOT NULL DEFAULT 'un',
    "prioridade" BOOLEAN NOT NULL DEFAULT false,
    "comprado" BOOLEAN NOT NULL DEFAULT false,
    "restauranteId" INTEGER NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "itens_lista_compras_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurantes_cnpj_key" ON "restaurantes"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
