'use client'
import Backend from "@/api";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import { Usuario } from '@/core/model/Usuario';
import { IconPackage, IconPlus, IconUser } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Page() {
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

    return (
        <Pagina>
            <Titulo icone={IconPackage} texto="Controle de Pedidos" />
            {usuario ? (
                <FormularioUsuario
                    usuario={usuario}
                    onChange={setUsuario}
                    salvar={salvar}
                    cancelar={() => setUsuario(null)}
                />
            ) : (
                <>
                    <div className="flex justify-end mb-4">
                        <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md" onClick={() => setUsuario({})}>
                            <IconPlus />
                            <span>Novo</span>
                        </button>

                    </div>
                    <ListaUsuario usuarios={usuarios} onClick={setUsuario} />
                </>

            )}
        </Pagina>
    )
}