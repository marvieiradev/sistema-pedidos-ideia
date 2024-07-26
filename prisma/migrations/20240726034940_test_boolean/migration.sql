/*
  Warnings:

  - The `corte` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "corte",
ADD COLUMN     "corte" BOOLEAN NOT NULL DEFAULT false;
