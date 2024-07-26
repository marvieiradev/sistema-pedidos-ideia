/*
  Warnings:

  - The `arte` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `exportacao` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `impressao` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `prensa` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `costura` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `expedicao` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "arte",
ADD COLUMN     "arte" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "exportacao",
ADD COLUMN     "exportacao" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "impressao",
ADD COLUMN     "impressao" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "prensa",
ADD COLUMN     "prensa" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "costura",
ADD COLUMN     "costura" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "expedicao",
ADD COLUMN     "expedicao" BOOLEAN NOT NULL DEFAULT false;
