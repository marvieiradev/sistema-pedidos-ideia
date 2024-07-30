import { PrismaClient } from "@prisma/client";
import { Pedido } from "@/core/model/Pedido";

export default class RepositorioPedido {
    private static db: PrismaClient = new PrismaClient();

    static async salvar(pedido: Pedido): Promise<Pedido> {
        return await this.db.pedido.upsert({
            where: { id: pedido.id },
            update: pedido,
            create: pedido,
        })
    }

    static async obterTodos(): Promise<Pedido[]> {
        return await this.db.pedido.findMany({
            orderBy: {
                prioridade: 'asc',
            },
        })
    }

    static async obterPorId(id: string): Promise<Pedido> {
        const pedido = await this.db.pedido.findUnique({ where: { id } })
        return pedido as Pedido
    }

    static async excluir(id: string): Promise<void> {
        await this.db.pedido.delete({ where: { id } })
    }
}