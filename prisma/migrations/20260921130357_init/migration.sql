/*
  Warnings:

  - Added the required column `senha` to the `restaurantes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_restaurantes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "atualizadoEm" DATETIME NOT NULL
);
INSERT INTO "new_restaurantes" ("atualizadoEm", "cnpj", "email", "endereco", "id", "nome", "telefone") SELECT "atualizadoEm", "cnpj", "email", "endereco", "id", "nome", "telefone" FROM "restaurantes";
DROP TABLE "restaurantes";
ALTER TABLE "new_restaurantes" RENAME TO "restaurantes";
CREATE UNIQUE INDEX "restaurantes_email_key" ON "restaurantes"("email");
CREATE UNIQUE INDEX "restaurantes_cnpj_key" ON "restaurantes"("cnpj");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
