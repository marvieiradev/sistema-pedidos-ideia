'use server'
import RepositorioUsuario from "./RepositorioUsuarios";

export default async function excluirUsuario(id: string) {
    return RepositorioUsuario.exluir(id)
}