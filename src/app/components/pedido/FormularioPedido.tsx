import { Pedido } from "@/core/model/Pedido"
import InputTexto from "../shared/InputTexto"
import Button from "../template/Button"

export interface FormularioPedidoProps {
    pedido: Partial<Pedido>
    onChange: (pedido: Partial<Pedido>) => void
    salvar: () => void
    cancelar: () => void
    excluir: () => void
}

export default function FormularioPedido(props: FormularioPedidoProps) {
    let editar = false;

    if (props.pedido.nome_cliente && props.pedido.cod_pedido && props.pedido.quantidade && props.pedido.costureira && props.pedido.imagem_url && props.pedido.id) {
        editar = true;
    }

    return (
        <div className="flex flex-col gap-5 border border-txsec p-4 rounded-lg bg-bgsec">
            <span className="text-center text-txpry text-xl mb-4">{!editar ? "Novo Pedido" : "Editar Pedido"}</span>
            <div className="flex gap-3">
                <div className="w-[50%]">
                    <InputTexto label="Nome" type="text" value={props.pedido.nome_cliente} onChange={(e) => props.onChange?.({ ...props.pedido, nome_cliente: (e.target as HTMLInputElement).value })} />
                    <InputTexto label="Cód. Pedido" type="number" value={props.pedido.cod_pedido} onChange={(e) => props.onChange?.({ ...props.pedido, cod_pedido: (e.target as HTMLInputElement).value })} />
                    <InputTexto label="Quantidade" type="number" value={props.pedido.quantidade} onChange={(e) => props.onChange?.({ ...props.pedido, quantidade: (e.target as HTMLInputElement).value })} />
                    <InputTexto label="Costureira" type="text" value={props.pedido.costureira} onChange={(e) => props.onChange?.({ ...props.pedido, costureira: (e.target as HTMLInputElement).value })} />
                    <InputTexto label="Imagem" type="text" value={props.pedido.imagem_url} onChange={(e) => props.onChange?.({ ...props.pedido, imagem_url: (e.target as HTMLInputElement).value })} />
                </div>
                <div className="w-[50%]">
                    <div className="bg-azulpry w-full h-full rounded-lg">
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex gap-5">
                    <div className="flex justify-end mb-4" onClick={props.salvar}>
                        <Button texto="Salvar" class="text-verdesec border-verdesec bg-verdepry" />
                    </div>
                    <div className="flex justify-end mb-4" onClick={props.cancelar} >
                        <Button texto="Cancelar" class="text-cinzasec border-cinzasec bg-cinzapry" />
                    </div>
                </div>
                <div>
                    {editar && (
                        <div className="flex justify-end mb-4" onClick={props.excluir} >
                            <Button texto="Finalizar Pedido" class="text-vermelhosec border-vermelhosec bg-vermelhopry" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}