//import salvarUsuario from "./usuario/salvarUsuario";
//import obterTodos from "./usuario/obterTodos";
//import excluirUsuario from "./usuario/excluirUsuario";
import salvarPedido from "./pedido/salvarPedido";
import excluirPedido from "./pedido/excluirPedido";
import obterTodos from "./pedido/obterTodos";

export default class Backend {
    /*static readonly usuarios = {
        salvar: salvarUsuario,
        obter: obterTodos,
        excluir: excluirUsuario,
    }*/

    static readonly pedidos = {
        salvar: salvarPedido,
        obter: obterTodos,
        excluir: excluirPedido,
    }
}