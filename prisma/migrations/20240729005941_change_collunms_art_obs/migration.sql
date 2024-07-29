/*
  Warnings:

  - You are about to drop the column `arte` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `imagem_url` on the `Pedido` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "arte",
DROP COLUMN "imagem_url",
ADD COLUMN     "obs" TEXT NOT NULL DEFAULT '';
