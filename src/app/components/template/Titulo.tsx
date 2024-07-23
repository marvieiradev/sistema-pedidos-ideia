import { ElementType } from "react"

export interface TituloProps {
    texto: string
    icone: ElementType
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex gap-2 mb-4">
            <props.icone size={60} stroke={1} />
            <h1 className="text-2xl">{props.texto}</h1>
        </div>
    )
}