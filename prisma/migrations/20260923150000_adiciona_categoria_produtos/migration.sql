-- Add category to products while preserving existing rows.
ALTER TABLE "produtos" ADD COLUMN "categoria" TEXT NOT NULL DEFAULT 'Outros';
