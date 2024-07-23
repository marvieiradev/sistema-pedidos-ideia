import { Usuario } from '@/core/model/Usuario';
import LinhaUsuario from './LinhaUsuario';

export interface ListaUsuarioProps {
    usuarios: Usuario[]
    onClick?: (usuario: Usuario) => void
}

export default function ListaUsuario(props: ListaUsuarioProps) {

    return (
        <div className="flex flex-col">
            {props.usuarios.map((usuario: Usuario) => {
                return <LinhaUsuario key={usuario.id} usuario={usuario} onClick={props.onClick} color={Number(usuario.senha) > 10 ? "bg-green-700" : "bg-red-700"} />
            })}
        </div>
    )
}