import { ElementType } from "react"

export interface TituloProps {
    texto: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex gap-2 items-center justify-center text-txpry">
            <h1 className="text-lg md:text-xl lg:text-2xl text-center  mt-8 mb-6 uppercase">{props.texto}</h1>
        </div>
    )
}