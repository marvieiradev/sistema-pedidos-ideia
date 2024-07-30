export interface ButtonProps {
    texto: string
    class: string
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`flex items-center px-4 py-2 rounded-md border-[2px] text-xs md:text-sm lg:text-base font-semibold ${props.class}`}>
            {props.texto}
        </button >
    )
}