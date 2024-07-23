'use server'
import RepositorioUsuario from "./RepositorioUsuarios";

export default async function obterTodos() {
    return RepositorioUsuario.obterTodos()
}