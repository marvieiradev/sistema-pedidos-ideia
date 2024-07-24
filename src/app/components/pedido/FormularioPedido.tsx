import { Pedido } from "@/core/model/Pedido"
import InputTexto from "../shared/InputTexto"

export interface FormularioPedidoProps {
    pedido: Partial<Pedido>
    onChange: (pedido: Partial<Pedido>) => void
    salvar: () => void
    cancelar: () => void
    excluir: () => void
}

export default function FormularioPedido(props: FormularioPedidoProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputTexto label="Nome" type="text" value={props.pedido.nome_cliente} onChange={(e) => props.onChange?.({ ...props.pedido, nome_cliente: (e.target as HTMLInputElement).value })} />
            <InputTexto label="Cód. Pedido" type="number" value={props.pedido.cod_pedido} onChange={(e) => props.onChange?.({ ...props.pedido, cod_pedido: (e.target as HTMLInputElement).value })} />
            <InputTexto label="Quantidade" type="number" value={props.pedido.quantidade} onChange={(e) => props.onChange?.({ ...props.pedido, quantidade: (e.target as HTMLInputElement).value })} />
            <InputTexto label="Costureira" type="text" value={props.pedido.costureira} onChange={(e) => props.onChange?.({ ...props.pedido, costureira: (e.target as HTMLInputElement).value })} />
            <InputTexto label="Imagem" type="text" value={props.pedido.imagem_url} onChange={(e) => props.onChange?.({ ...props.pedido, imagem_url: (e.target as HTMLInputElement).value })} />

            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button className="bg-blue-500 text-white p-2 rounded-md" onClick={props.salvar}>Salvar</button>
                    <button className="bg-zinc-500 text-white p-2 rounded-md" onClick={props.cancelar}>Cancelar</button>
                </div>
                <div>
                    {props.pedido.cod_pedido && (
                        <button className="bg-red-700 text-white p-2 rounded-md" onClick={props.excluir}>Finalizar Pedido</button>
                    )}
                </div>
            </div>
        </div>
    )
}