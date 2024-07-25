'use client'

import FormularioPedido from "@/app/components/pedido/FormularioPedido";
import ListaPedido from "@/app/components/pedido/ListaPedido";
import Button from "@/app/components/template/Button";
import Header from "@/app/components/template/Header";
import Pagina from "@/app/components/template/Pagina";
import Tabela from "@/app/components/template/Tabela";
import Titulo from "@/app/components/template/Titulo";
import usePedidos from "@/app/data/hooks/usePedidos";
import { IconPackage, IconPlus } from "@tabler/icons-react";
import { redirect } from "next/navigation";

export default function Page() {
    const { pedido, pedidos, salvar, excluir, alterarPedido } = usePedidos()
    var user = sessionStorage.getItem("setor");
    if (!user) {
        redirect('/')
    }
    return (
        <Pagina>
            <Header texto={user} />
            <div className="w-full md:max-w-[1200px] px-2">
                <Titulo texto="Acompanhamento Diário" />
                {pedido ? (
                    <FormularioPedido
                        pedido={pedido}
                        onChange={alterarPedido}
                        salvar={salvar}
                        cancelar={() => alterarPedido(null)}
                        excluir={excluir}
                    />
                ) : (
                    <>
                        <div className="flex justify-end mb-4" onClick={() => alterarPedido({})}>
                            <Button texto="Novo Pedido" class="text-azulsec border-azulsec bg-azulpry" />
                        </div>
                        <Tabela />
                        <ListaPedido pedidos={pedidos} onClick={alterarPedido} />
                    </>
                )}
            </div>
        </Pagina>
    )
}