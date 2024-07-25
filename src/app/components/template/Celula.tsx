export interface CelulaProps {
    texto: string
    class: string
}

export default function Celula(props: CelulaProps) {
    return (
        <div className={`flex flex-col text-center border-txter p-[2px] ${props.class}`}>
            <span>
                {props.texto}
            </span>
        </div>
    )
}