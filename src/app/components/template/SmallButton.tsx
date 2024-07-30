export interface SmallButtonProps {
    texto: string
    class: string
}

export default function Button(props: SmallButtonProps) {
    return (
        <button className={`flex items-center px-2 py-1 rounded-md border-[2px] text-[10px] md:text-[12px] font-semibold ${props.class}`}>
            {props.texto}
        </button >
    )
}