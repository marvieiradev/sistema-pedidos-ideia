'use server'
import RepositorioPedido from "./RepositorioPedido";

export default async function obterTodos() {
    return RepositorioPedido.obterTodos()
}