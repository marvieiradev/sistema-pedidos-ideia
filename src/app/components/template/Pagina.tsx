import Menu from "./Menu"

export interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex items-center justify-center">
            <main className="flex flex-col items-center justify-center">
                {props.children}
            </main>
        </div>
    )
}