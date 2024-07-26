import { Pedido } from "@/core/model/Pedido"
import InputTexto from "../shared/InputTexto"
import Button from "../template/Button"
import Modal from "../template/Modal"
import useModal from "../template/UseModal"

export interface FormularioPedidoProps {
    pedido: Partial<Pedido>
    onChange: (pedido: Partial<Pedido>) => void
    salvarItem: (pedido: Partial<Pedido>) => void
    salvar: () => void
    cancelar: () => void
    excluir: () => void
}

export default function FormularioPedido(props: FormularioPedidoProps) {
    let editar = false;
    var user = sessionStorage.getItem("setor");

    if (props.pedido.nome_cliente && props.pedido.cod_pedido && props.pedido.quantidade && props.pedido.costureira && props.pedido.imagem_url && props.pedido.id && user === 'admin') {
        editar = true;
    }

    const { isOpen, toggle } = useModal();

    return (
        <>
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

                        {user === "admin" && (
                            <div className="flex justify-end mb-4" onClick={props.salvar}>
                                <Button texto="Salvar" class="text-verdesec border-verdesec bg-verdepry" />
                            </div>
                        )}

                        {user === "arte" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, arte: true })}>
                                    <Button texto="Confirmar Corte" class="text-verdesec border-verdesec bg-verdepry" />
                                </div>
                            </div>
                        )}

                        {user === "exportação" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, exportacao: true })}>
                                    <Button texto="Confirmar Corte" class="text-verdesec border-verdesec bg-verdepry" />
                                </div>
                            </div>
                        )}

                        {user === "impressão" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, impressao: true })}>
                                    <Button texto="Confirmar Impressão" class="text-verdesec border-verdesec bg-verdepry" />
                                </div>
                            </div>
                        )}

                        {user === "corte" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, corte: true })}>
                                    <Button texto="Confirmar Corte" class="text-verdesec border-verdesec bg-verdepry" />
                                </div>
                            </div>
                        )}

                        {user === "prensa" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, prensa: true })}>
                                    <Button texto="Confirmar Prensa" class="text-verdesec border-verdesec bg-verdepry" />
                                </div>
                            </div>
                        )}

                        {user === "costura" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, costura: true })}>
                                    <Button texto="Confirmar Costura" class="text-verdesec border-verdesec bg-verdepry" />
                                </div>
                            </div>
                        )}

                        {user === "expedicao" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, expedicao: true })}>
                                    <Button texto="Confirmar Expedição" class="text-verdesec border-verdesec bg-verdepry" />
                                </div>
                            </div>
                        )}

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
            </div >
            {user === "arte" && (<Modal text="Deseja confirmar a arte?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "exportação" && (<Modal text="Deseja confirmar a exportação?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "impressão" && (<Modal text="Deseja confirmar a impressão?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "corte" && (<Modal text="Deseja confirmar o corte?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "prensa" && (<Modal text="Deseja confirmar a prensa?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "costura" && (<Modal text="Deseja confirmar costura?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "expedição" && (<Modal text="Deseja confirmar a expedição?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}

        </>
    )
}