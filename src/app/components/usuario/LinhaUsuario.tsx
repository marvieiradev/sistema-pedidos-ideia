import { Usuario } from "@prisma/client"

export interface LinhaUsuarioProps {
    usuario: Usuario
    onClick?: (usuario: Usuario) => void
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className="flex flex-row gap-4 p-4 bg-neutral-600 border border-emerald-300 mb-1 cursor-pointer" onClick={() => props.onClick?.(props.usuario)}>
            <span>{props.usuario.nome} | </span>
            <span>{props.usuario.email} | </span>
            <span>{props.usuario.id}</span>
        </div>
    )
}