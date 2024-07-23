import { Usuario } from "@prisma/client"

export interface LinhaUsuarioProps {
    usuario: Usuario
    onClick?: (usuario: Usuario) => void
    color: string
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className={`flex flex-row gap-4 p-4 border border-emerald-300 mb-1 cursor-pointer ${props.color}`} onClick={() => props.onClick?.(props.usuario)}>
            <span>{props.usuario.nome} | </span>
            <span>{props.usuario.email} | </span>
            <span>{props.usuario.senha}</span>
        </div>
    )
}