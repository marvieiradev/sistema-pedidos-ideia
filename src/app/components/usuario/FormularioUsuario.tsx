import InputTexto from "../shared/InputTexto"
import { Usuario } from '@/core/model/Usuario'

export interface FormularioUsuarioProps {
    usuario: Partial<Usuario>
    onChange: (usuario: Partial<Usuario>) => void
    salvar: () => void
    cancelar: () => void
    excluir: () => void
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputTexto label="Nome" type="text" value={props.usuario.nome} onChange={(e) => props.onChange?.({ ...props.usuario, nome: (e.target as HTMLInputElement).value })} />
            <InputTexto label="Cód. Pedido" type="number" value={props.usuario.email} onChange={(e) => props.onChange?.({ ...props.usuario, email: (e.target as HTMLInputElement).value })} />
            <InputTexto label="Quantidade" type="number" value={props.usuario.senha} onChange={(e) => props.onChange?.({ ...props.usuario, senha: (e.target as HTMLInputElement).value })} />

            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button className="bg-blue-500 text-white p-2 rounded-md" onClick={props.salvar}>Salvar</button>
                    <button className="bg-zinc-500 text-white p-2 rounded-md" onClick={props.cancelar}>Cancelar</button>
                </div>
                <div>
                    {props.usuario.senha && (
                        <button className="bg-red-700 text-white p-2 rounded-md" onClick={props.excluir}>Finalizar Pedido</button>
                    )}
                </div>
            </div>
        </div>
    )
}