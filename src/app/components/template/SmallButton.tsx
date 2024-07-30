export interface SmallButtonProps {
    texto: string
    class: string
}

export default function Button(props: SmallButtonProps) {
    return (
        <button className={`flex items-center px-2 py-1 rounded-md border-[2px] text-[9px] md:text-[11px] font-semibold uppercase ${props.class}`}>
            {props.texto}
        </button >
    )
}