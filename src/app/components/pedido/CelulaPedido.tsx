export interface CelulaPedidoProps {
    texto: string
    class: string
}

export default function CelulaPedido(props: CelulaPedidoProps) {
    return (
        <div className={`flex flex-col text-center text-txpry border-txquar p-[2px] ${props.class}`}>
            <span className="text-[10px] md:text-sm lg:text-base font-semibold overflow-hidden whitespace-nowrap">
                {props.texto.toUpperCase()}
            </span>
        </div>
    )
}