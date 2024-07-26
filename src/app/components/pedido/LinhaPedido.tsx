import { Pedido } from "@/core/model/Pedido"
import CelulaPedido from "./CelulaPedido"

export interface LinhaPedidoProps {
    pedido: Pedido
    onClick?: (pedido: Pedido) => void
}

export default function LinhaPedido(props: LinhaPedidoProps) {
    return (
        <div className="flex flex-row border border-bgter cursor-pointer rounded-md" onClick={() => props.onClick?.(props.pedido)}>
            <CelulaPedido texto={props.pedido.nome_cliente} class="w-[30%] text-start px-2 border-r" />
            <CelulaPedido texto={props.pedido.cod_pedido} class="w-[10%] border-r" />
            <CelulaPedido texto={props.pedido.quantidade} class="w-[10%] border-r" />
            <CelulaPedido texto={props.pedido.arte ? "✔" : ""} class={`${props.pedido.arte ? "bg-verdepry text-verdesec" : "bg-vermelhopry"} w-[5%] border-r`} />
            <CelulaPedido texto={props.pedido.exportacao ? "✔" : ""} class={`${props.pedido.exportacao ? "bg-verdepry text-verdesec" : "bg-vermelhopry"} w-[5%] border-r`} />
            <CelulaPedido texto={props.pedido.impressao ? "✔" : ""} class={`${props.pedido.impressao ? "bg-verdepry text-verdesec" : "bg-vermelhopry"} w-[5%] border-r`} />
            <CelulaPedido texto={props.pedido.corte ? "✔" : ""} class={`${props.pedido.corte ? "bg-verdepry text-verdesec" : "bg-vermelhopry"} w-[5%] border-r`} />
            <CelulaPedido texto={props.pedido.prensa ? "✔" : ""} class={`${props.pedido.prensa ? "bg-verdepry text-verdesec" : "bg-vermelhopry"} w-[5%] border-r`} />
            <CelulaPedido texto={props.pedido.costura ? "✔" : ""} class={`${props.pedido.costura ? "bg-verdepry text-verdesec" : "bg-vermelhopry"} w-[5%] border-r`} />
            <CelulaPedido texto={props.pedido.expedicao ? "✔" : ""} class={`${props.pedido.expedicao ? "bg-verdepry text-verdesec" : "bg-vermelhopry"} w-[5%] border-r`} />
            <CelulaPedido texto={props.pedido.costureira} class="w-[20%] text-start px-2 bg-amarelopry" />
        </div>
    )
}
