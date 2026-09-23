-- Add category to shopping-list items while preserving existing rows.
ALTER TABLE "itens_lista_compras" ADD COLUMN "categoria" TEXT NOT NULL DEFAULT 'Outros';
