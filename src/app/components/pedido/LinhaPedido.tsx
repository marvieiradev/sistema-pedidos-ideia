import { Pedido } from "@/core/model/Pedido"

export interface LinhaPedidoProps {
    pedido: Pedido
    onClick?: (pedido: Pedido) => void
}

export default function LinhaPedido(props: LinhaPedidoProps) {
    return (
        <div className={`flex flex-row gap-4 p-4 border border-emerald-300 mb-1 cursor-pointer text-white`} onClick={() => props.onClick?.(props.pedido)}>
            <span>{props.pedido.nome_cliente}</span>
            { /*<span>{props.pedido.cod_pedido}</span>
            <span>{props.pedido.quantidade}</span>
            <span>{props.pedido.arte}</span>
            <span>{props.pedido.exportacao}</span>
            <span>{props.pedido.impressao}</span>
            <span>{props.pedido.corte}</span>
            <span>{props.pedido.prensa}</span>
            <span>{props.pedido.costura}</span>
            <span>{props.pedido.costureira}</span>*/}
        </div>
    )
}
