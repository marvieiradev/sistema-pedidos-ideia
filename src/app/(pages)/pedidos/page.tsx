'use client'

import FormularioPedido from "@/app/components/pedido/FormularioPedido";
import ListaPedido from "@/app/components/pedido/ListaPedido";
import Pagina from "@/app/components/template/Pagina";
import Tabela from "@/app/components/template/Tabela";
import Titulo from "@/app/components/template/Titulo";
import usePedidos from "@/app/data/hooks/usePedidos";
import { IconPackage, IconPlus } from "@tabler/icons-react";

export default function Page() {
    const { pedido, pedidos, salvar, excluir, alterarPedido } = usePedidos()
    return (
        <Pagina>
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
                    <div className="flex justify-end mb-4">
                        <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md" onClick={() => alterarPedido({})}>
                            <IconPlus />
                            <span>Novo</span>
                        </button>

                    </div>
                    <Tabela />
                    <ListaPedido pedidos={pedidos} onClick={alterarPedido} />
                </>
            )}
        </Pagina>
    )
}