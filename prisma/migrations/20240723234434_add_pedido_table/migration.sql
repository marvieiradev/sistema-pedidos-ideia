-- CreateTable
CREATE TABLE "Pedido" (
    "id" TEXT NOT NULL,
    "cod_pedido" TEXT NOT NULL,
    "nome_cliente" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,
    "costureira" TEXT NOT NULL,
    "imagem_url" TEXT NOT NULL,
    "arte" BOOLEAN NOT NULL DEFAULT false,
    "exportacao" BOOLEAN NOT NULL DEFAULT false,
    "impressao" BOOLEAN NOT NULL DEFAULT false,
    "corte" BOOLEAN NOT NULL DEFAULT false,
    "prensa" BOOLEAN NOT NULL DEFAULT false,
    "costura" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_cod_pedido_key" ON "Pedido"("cod_pedido");
