'use server'
import RepositorioPedido from "./RepositorioPedido";

export default async function excluirPedido(id: string) {
    return RepositorioPedido.excluir(id)
}