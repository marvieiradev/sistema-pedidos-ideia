import { ElementType } from "react"

export interface TituloProps {
    texto: string
    icone: ElementType
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex gap-2 m-4 items-center justify-center text-txpry">
            <props.icone size={35} stroke={1.5} />
            <h1 className="text-2xl">{props.texto}</h1>
        </div>
    )
}