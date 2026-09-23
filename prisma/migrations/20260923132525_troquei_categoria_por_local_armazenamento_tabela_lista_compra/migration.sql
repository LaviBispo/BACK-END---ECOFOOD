/*
  Warnings:

  - You are about to drop the column `categoria` on the `itens_lista_compras` table. All the data in the column will be lost.
  - Added the required column `localArmazenamento` to the `itens_lista_compras` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_itens_lista_compras" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "localArmazenamento" TEXT NOT NULL,
    "quantidade" REAL NOT NULL DEFAULT 1,
    "unidade" TEXT NOT NULL DEFAULT 'un',
    "prioridade" BOOLEAN NOT NULL DEFAULT false,
    "comprado" BOOLEAN NOT NULL DEFAULT false,
    "restauranteId" INTEGER NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "itens_lista_compras_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_itens_lista_compras" ("comprado", "criadoEm", "id", "nome", "prioridade", "quantidade", "restauranteId", "unidade") SELECT "comprado", "criadoEm", "id", "nome", "prioridade", "quantidade", "restauranteId", "unidade" FROM "itens_lista_compras";
DROP TABLE "itens_lista_compras";
ALTER TABLE "new_itens_lista_compras" RENAME TO "itens_lista_compras";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
