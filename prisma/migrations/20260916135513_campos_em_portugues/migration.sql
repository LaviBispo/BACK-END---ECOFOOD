/*
  Warnings:

  - You are about to drop the column `categoria` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `fornecedor` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `precoUnitario` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `situacao` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `valorEstimado` on the `registros_impacto` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `restaurantes` table. All the data in the column will be lost.
  - You are about to drop the column `tipoCozinha` on the `restaurantes` table. All the data in the column will be lost.
  - You are about to drop the column `cargo` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `senhaHash` on the `usuarios` table. All the data in the column will be lost.
  - Made the column `email` on table `restaurantes` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `senha` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_itens_lista_compras" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT,
    "quantidade" REAL NOT NULL DEFAULT 1,
    "unidade" TEXT NOT NULL DEFAULT 'un',
    "prioridade" BOOLEAN NOT NULL DEFAULT false,
    "comprado" BOOLEAN NOT NULL DEFAULT false,
    "restauranteId" INTEGER NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "itens_lista_compras_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_itens_lista_compras" ("categoria", "comprado", "criadoEm", "id", "nome", "prioridade", "quantidade", "restauranteId", "unidade") SELECT "categoria", "comprado", "criadoEm", "id", "nome", "prioridade", "quantidade", "restauranteId", "unidade" FROM "itens_lista_compras";
DROP TABLE "itens_lista_compras";
ALTER TABLE "new_itens_lista_compras" RENAME TO "itens_lista_compras";
CREATE TABLE "new_produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "codigoBarras" TEXT,
    "localArmazenamento" TEXT NOT NULL,
    "quantidade" REAL NOT NULL DEFAULT 1,
    "unidade" TEXT NOT NULL DEFAULT 'un',
    "dataValidade" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ATIVO',
    "restauranteId" INTEGER NOT NULL,
    "deuEntradaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "produtos_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_produtos" ("atualizadoEm", "codigoBarras", "dataValidade", "id", "localArmazenamento", "nome", "quantidade", "restauranteId", "unidade") SELECT "atualizadoEm", "codigoBarras", "dataValidade", "id", "localArmazenamento", "nome", "quantidade", "restauranteId", "unidade" FROM "produtos";
DROP TABLE "produtos";
ALTER TABLE "new_produtos" RENAME TO "produtos";
CREATE TABLE "new_registros_impacto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produtoId" INTEGER NOT NULL,
    "restauranteId" INTEGER NOT NULL,
    "quantidadeKg" REAL NOT NULL,
    "foiAproveitado" BOOLEAN NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "registros_impacto_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "registros_impacto_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_registros_impacto" ("criadoEm", "foiAproveitado", "id", "produtoId", "quantidadeKg", "restauranteId") SELECT "criadoEm", "foiAproveitado", "id", "produtoId", "quantidadeKg", "restauranteId" FROM "registros_impacto";
DROP TABLE "registros_impacto";
ALTER TABLE "new_registros_impacto" RENAME TO "registros_impacto";
CREATE TABLE "new_restaurantes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "atualizadoEm" DATETIME NOT NULL
);
INSERT INTO "new_restaurantes" ("atualizadoEm", "cnpj", "email", "endereco", "id", "nome", "telefone") SELECT "atualizadoEm", "cnpj", "email", "endereco", "id", "nome", "telefone" FROM "restaurantes";
DROP TABLE "restaurantes";
ALTER TABLE "new_restaurantes" RENAME TO "restaurantes";
CREATE UNIQUE INDEX "restaurantes_cnpj_key" ON "restaurantes"("cnpj");
CREATE TABLE "new_usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "fotoUrl" TEXT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "restauranteId" INTEGER NOT NULL,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "usuarios_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_usuarios" ("atualizadoEm", "email", "id", "nome", "restauranteId") SELECT "atualizadoEm", "email", "id", "nome", "restauranteId" FROM "usuarios";
DROP TABLE "usuarios";
ALTER TABLE "new_usuarios" RENAME TO "usuarios";
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
