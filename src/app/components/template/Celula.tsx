export interface CelulaProps {
    texto: string
    class: string
}

export default function Celula(props: CelulaProps) {
    return (
        <div className={`flex flex-col text-center border-txter p-[2px] ${props.class}`}>
            <span className="text-[10px] md:text-sm lg:text-base overflow-hidden whitespace-nowrap">
                {props.texto.toUpperCase()}
            </span>
        </div>
    )
}