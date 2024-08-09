'use client'
import FormularioPedido from "@/app/components/pedido/FormularioPedido";
import ListaPedido from "@/app/components/pedido/ListaPedido";
import Button from "@/app/components/template/Button";
import Header from "@/app/components/template/Header";
import Pagina from "@/app/components/template/Pagina";
import Tabela from "@/app/components/template/Tabela";
import Titulo from "@/app/components/template/Titulo";
import usePedidos from "@/app/data/hooks/usePedidos";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const { pedido, pedidos, salvar, excluir, alterarPedido } = usePedidos()
    const [user, setUser] = useState("");
    useEffect(() => {
        const user = sessionStorage.getItem("setor")
        setUser("" + user)
        if (!user) {
            redirect('/')
        }
    }, [pedido]);

    return (
        <Pagina>
            <div className="bg-bgpry sticky top-0 z-50">
                <Header texto={user} />
                <Titulo texto="Acompanhamento Diário" />
            </div>
            <div className="w-full md:max-w-[1200px] px-2">
                {pedido ? (
                    <FormularioPedido
                        pedido={pedido}
                        onChange={alterarPedido}
                        salvar={salvar}
                        salvarItem={alterarPedido}
                        cancelar={() => alterarPedido(null)}
                        excluir={excluir}
                    />
                ) : (
                    <>
                        <div className="flex justify-end mb-4" onClick={() => alterarPedido({})}>
                            {user == "administração" && (
                                <Button texto="Novo Pedido" class="text-azulsec border-azulsec bg-azulpry" />
                            )}
                        </div>
                        <Tabela />
                        <ListaPedido pedidos={pedidos} onClick={alterarPedido} />
                    </>
                )}
            </div>
        </Pagina>
    )
}