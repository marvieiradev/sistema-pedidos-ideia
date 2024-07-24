'use server'
import Id from "@/core/util/Id";
import RepositorioPedido from "./RepositorioPedido";
import { Pedido } from "@/core/model/Pedido";

export default async function salvarPedido(pedido: Partial<Pedido>) {
    const novoPedido = {
        ...pedido,
        id: pedido.id ?? Id.novo,

    }

    return RepositorioPedido.salvar(novoPedido as Pedido)
}