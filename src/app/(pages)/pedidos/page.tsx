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

export default function Page() {
    const { pedido, pedidos, salvar, excluir, alterarPedido } = usePedidos()
    return (
        <Pagina>
            <Header texto="Administração" />
            <div className="w-[70%]">
                <Titulo icone={IconPackage} texto="Controle de Pedidos" />
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