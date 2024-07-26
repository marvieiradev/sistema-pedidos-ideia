export interface CelulaProps {
    texto: string
    class: string
}

export default function Celula(props: CelulaProps) {
    return (
        <button className={`flex items-center px-4 py-2 rounded-md border-[2px] ${props.class}`}>
            {props.texto}
        </button >
    )
}