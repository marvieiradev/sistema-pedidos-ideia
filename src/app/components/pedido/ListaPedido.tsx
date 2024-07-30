import { Pedido } from "@/core/model/Pedido"
import LinhaPedido from "./LinhaPedido"
import { useEffect } from "react";

export interface ListaPedidoProps {
    pedidos: Pedido[]
    onClick?: (pedido: Pedido) => void
}

export default function ListaPedido(props: ListaPedidoProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.reload();
        }, 60000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col">
            {props.pedidos.map((pedido: Pedido) => {
                return <LinhaPedido key={pedido.id} pedido={pedido} onClick={props.onClick} />
            })}
        </div>
    )
}