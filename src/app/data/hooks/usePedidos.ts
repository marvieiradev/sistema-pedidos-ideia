import Backend from "@/api";
import { Pedido } from "@/core/model/Pedido";
import { useEffect, useState } from "react";

export default function usePedidos() {
    const [pedidos, setPedidos] = useState<Pedido[]>([])
    const [pedido, setPedido] = useState<Partial<Pedido> | null>(null)

    useEffect(() => {
        Backend.pedidos.obter().then(setPedidos)
    }, [])

    async function salvar() {
        if (!pedido) return
        await Backend.pedidos.salvar(pedido)
        const pedidos = await Backend.pedidos.obter()
        setPedidos(pedidos)
        setPedido(null)
    }

    async function excluir() {
        if (!pedido || !pedido.id) return
        await Backend.pedidos.excluir(pedido.id)
        const pedidos = await Backend.pedidos.obter()
        setPedidos(pedidos)
        setPedido(null)
    }

    return {
        pedidos,
        pedido,
        salvar,
        excluir,
        cancelar: () => setPedido(null),
        alterarPedido: (pedido: Partial<Pedido> | null) => setPedido(pedido)
    }
}
