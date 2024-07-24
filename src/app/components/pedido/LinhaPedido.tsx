import { Pedido } from "@/core/model/Pedido"

export interface LinhaPedidoProps {
    pedido: Pedido
    onClick?: (pedido: Pedido) => void
}

export default function LinhaPedido(props: LinhaPedidoProps) {
    return (
        <div className={`flex flex-row border border-emerald-300 mb-1 cursor-pointer text-white`} onClick={() => props.onClick?.(props.pedido)}>

            <div className="w-[30%] border border-emerald-300">
                <span className="ml-2">{props.pedido.nome_cliente}</span>
            </div>

            <div className="w-[10%] border border-emerald-300 text-center">
                <span>{props.pedido.cod_pedido}</span>
            </div>

            <div className="w-[10%] border border-emerald-300 text-center">
                <span>{props.pedido.quantidade}</span>
            </div>

            <div className={`w-[5%] border border-emerald-300 text-center ${props.pedido.arte ? "bg-green-300" : "bg-red-300"}`}>
                <span>{props.pedido.arte ? "✔️" : "❌"}</span>
            </div>

            <div className={`w-[5%] border border-emerald-300 text-center ${props.pedido.exportacao ? "bg-green-300" : "bg-red-300"}`}>
                <span>{props.pedido.exportacao ? "✔️" : "❌"}</span>
            </div>

            <div className={`w-[5%] border border-emerald-300 text-center ${props.pedido.impressao ? "bg-green-300" : "bg-red-300"}`}>
                <span>{props.pedido.impressao ? "✔️" : "❌"}</span>
            </div>

            <div className={`w-[5%] border border-emerald-300 text-center ${props.pedido.corte ? "bg-green-300" : "bg-red-300"}`}>
                <span>{props.pedido.corte ? "✔️" : "❌"}</span>
            </div>

            <div className={`w-[5%] border border-emerald-300 text-center ${props.pedido.prensa ? "bg-green-300" : "bg-red-300"}`}>
                <span>{props.pedido.prensa ? "✔️" : "❌"}</span>
            </div>

            <div className={`w-[5%] border border-emerald-300 text-center ${props.pedido.costura ? "bg-green-300" : "bg-red-300"}`}>
                <span>{props.pedido.costura ? "✔️" : "❌"}</span>
            </div>

            <div className="w-[20%] border border-emerald-300">
                <span className="ml-2">{props.pedido.costureira}</span>
            </div>
        </div>
    )
}
