import Backend from "@/api";
import { Usuario } from '@/core/model/Usuario';
import { useEffect, useState } from "react";

export default function useUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuario, setUsuario] = useState<Partial<Usuario> | null>(usuarios[0])

    useEffect(() => {
        Backend.usuarios.obter().then(setUsuarios)
    }, [])

    async function salvar() {
        //salvar no bd
        if (!usuario) return
        await Backend.usuarios.salvar(usuario)
        const usuarios = await Backend.usuarios.obter()
        setUsuarios(usuarios)
        setUsuario(null)
    }

    async function excluir() {
        //exclui bd
        if (!usuario || !usuario.id) return
        await Backend.usuarios.excluir(usuario.id)
        const usuarios = await Backend.usuarios.obter()
        setUsuarios(usuarios)
        setUsuario(null)
    }

    return {
        usuarios,
        usuario,
        salvar,
        excluir,
        cancelar: () => setUsuario(null),
        alterarUsuario: (usuario: Partial<Usuario> | null) => setUsuario(usuario)
    }
}