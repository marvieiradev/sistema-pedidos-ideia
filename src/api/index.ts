import salvarPedido from "./pedido/salvarPedido";
import excluirPedido from "./pedido/excluirPedido";
import obterTodos from "./pedido/obterTodos";

export default class Backend {
    static readonly pedidos = {
        salvar: salvarPedido,
        obter: obterTodos,
        excluir: excluirPedido,
    }
}