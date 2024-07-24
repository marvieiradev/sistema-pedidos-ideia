import { Pedido } from "@/core/model/Pedido"
import LinhaPedido from "./LinhaPedido"

export interface ListaPedidoProps {
    pedidos: Pedido[]
    onClick?: (pedido: Pedido) => void
}

export default function ListaPedido(props: ListaPedidoProps) {

    return (
        <div className="flex flex-col">
            {props.pedidos.map((pedido: Pedido) => {
                return <LinhaPedido key={pedido.id} pedido={pedido} onClick={props.onClick} />
            })}
        </div>
    )
}