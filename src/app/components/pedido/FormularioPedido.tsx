import { Pedido } from "@/core/model/Pedido"
import InputTexto from "../shared/InputTexto"
import Button from "../template/Button"
import Modal from "../template/Modal"
import useModal from "../template/UseModal"
import { useEffect, useState } from "react"
import TextArea from "../shared/TextArea"
import InputDisabled from "../shared/InputDisabled"
import TextAreaDisabled from "../shared/TextaAreaDisabled"
import SmallButton from "../template/SmallButton"

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
    let conf = ""
    const [user, setUser] = useState("");
    useEffect(() => {
        const user = sessionStorage.getItem("setor")
        setUser("" + user)
    }, []);

    if (props.pedido.nome_cliente && props.pedido.cod_pedido && props.pedido.quantidade && props.pedido.costureira && props.pedido.id && user === 'administração') {
        editar = true;
    }

    const { isOpen, toggle } = useModal();

    return (
        <>
            <div className="flex flex-col gap-5 border border-txsec p-4 rounded-lg bg-bgsec">
                {user == 'administração' && (<span className="text-center text-txpry text-lg md:text-xl mb:2 md:mb-4">{!editar ? "Novo Pedido" : "Editar Pedido"}</span>)}
                {user != 'administração' && (<span className="text-center text-txpry text-lg md:text-xl mb:2 md:mb-4">Detalhes do Pedido</span>)}
                <div className="flex flex-col md:gap-3 md:flex-row">
                    <div className="md:w-[50%]">

                        {user == "administração" ? (
                            <InputTexto label="Nome" type="text" value={props.pedido.nome_cliente} onChange={(e) => props.onChange?.({ ...props.pedido, nome_cliente: (e.target as HTMLInputElement).value.toUpperCase() })} />
                        ) : (<InputDisabled label="Nome" type="text" value={props.pedido.nome_cliente} />)}

                        {user == "administração" ? (
                            <InputTexto label="Cód. Pedido" type="number" value={props.pedido.cod_pedido} onChange={(e) => props.onChange?.({ ...props.pedido, cod_pedido: (e.target as HTMLInputElement).value.toUpperCase() })} />
                        ) : (<InputDisabled label="Cód. Pedido" type="number" value={props.pedido.cod_pedido} />)}
                    </div>
                    <div className="md:w-[50%]">
                        {user == "administração" ? (
                            <InputTexto label="Quantidade" type="number" value={props.pedido.quantidade} onChange={(e) => props.onChange?.({ ...props.pedido, quantidade: (e.target as HTMLInputElement).value.toUpperCase() })} />
                        ) : (<InputDisabled label="Quantidade" type="number" value={props.pedido.quantidade} />)}

                        {user == "administração" || user == "prensa" ? (
                            <InputTexto label="Costureira" type="text" value={props.pedido.costureira} onChange={(e) => props.onChange?.({ ...props.pedido, costureira: (e.target as HTMLInputElement).value.toUpperCase() })} />
                        ) : (<InputDisabled label="Costureira" type="text" value={props.pedido.costureira} />)}
                    </div>
                </div>

                <div className="flex flex-col md:gap-3 md:flex-row">
                    <div className="md:w-[50%]">
                        {user == "administração" ? (
                            <TextArea label="Observação" type="textarea" value={props.pedido.obs} onChange={(e) => props.onChange?.({ ...props.pedido, obs: (e.target as HTMLInputElement).value.toUpperCase() })} />
                        ) : (<TextAreaDisabled label="Observação" type="textarea" value={props.pedido.obs} />)}
                    </div>
                    <div className="md:w-[50%] flex flex-wrap justify-center border-2 border-vermelhopry rounded-md">

                        <div className="flex mt-2 p-2 px-4 items-center justify-center gap-2 border border-cinzasec rounded-md">
                            <span className="font-semibold text-center text-sm">PRIORIDADE: {props.pedido.prioridade}</span>
                            {props.pedido.prioridade == "BAIXA" ? (
                                <div onClick={() => props.salvarItem?.({ ...props.pedido, prioridade: "ALTA" })}>
                                    <SmallButton texto="Alterar Prioridade" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            ) : (
                                <div onClick={() => props.salvarItem?.({ ...props.pedido, prioridade: "BAIXA" })}>
                                    <SmallButton texto="Alterar Prioridade" class="text-cinzasec border-cinzasec bg-cinzapry" />
                                </div>
                            )}

                        </div>

                        <div className="flex flex-wrap justify-center p-2 gap-3 md:gap-1">
                            <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md">
                                <span className="font-semibold text-center text-[12px]">EXPORTAÇÃO</span>
                                <span className="font-semibold text-center text-sm">{props.pedido.exportacao ? "SIM" : "NÃO"}</span>
                                {props.pedido.exportacao ? (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, exportacao: false })}>
                                        <SmallButton texto="Remover" class="text-cinzasec border-cinzasec bg-cinzapry" />
                                    </div>
                                ) : (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, exportacao: true })}>
                                        <SmallButton texto="Adicionar" class="text-azulsec border-azulsec bg-azulpry" />
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md">
                                <span className="font-semibold text-center text-[12px]">IMPRESSÃO</span>
                                <span className="font-semibold text-center text-sm">{props.pedido.impressao ? "SIM" : "NÃO"}</span>
                                {props.pedido.impressao ? (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, impressao: false })}>
                                        <SmallButton texto="Remover" class="text-cinzasec border-cinzasec bg-cinzapry" />
                                    </div>
                                ) : (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, impressao: true })}>
                                        <SmallButton texto="Adicionar" class="text-azulsec border-azulsec bg-azulpry" />
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md">
                                <span className="font-semibold text-center text-[12px]">CORTE</span>
                                <span className="font-semibold text-center text-sm">{props.pedido.corte ? "SIM" : "NÃO"}</span>
                                {props.pedido.corte ? (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, corte: false })}>
                                        <SmallButton texto="Remover" class="text-cinzasec border-cinzasec bg-cinzapry" />
                                    </div>
                                ) : (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, corte: true })}>
                                        <SmallButton texto="Adicionar" class="text-azulsec border-azulsec bg-azulpry" />
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md">
                                <span className="font-semibold text-center text-[12px]">PRENSA</span>
                                <span className="font-semibold text-center text-sm">{props.pedido.prensa ? "SIM" : "NÃO"}</span>
                                {props.pedido.prensa ? (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, prensa: false })}>
                                        <SmallButton texto="Remover" class="text-cinzasec border-cinzasec bg-cinzapry" />
                                    </div>
                                ) : (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, prensa: true })}>
                                        <SmallButton texto="Adicionar" class="text-azulsec border-azulsec bg-azulpry" />
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md">
                                <span className="font-semibold text-center text-[12px]">COSTURA</span>
                                <span className="font-semibold text-center text-sm">{props.pedido.costura ? "SIM" : "NÃO"}</span>
                                {props.pedido.costura ? (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, costura: false })}>
                                        <SmallButton texto="Remover" class="text-cinzasec border-cinzasec bg-cinzapry" />
                                    </div>
                                ) : (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, costura: true })}>
                                        <SmallButton texto="Adicionar" class="text-azulsec border-azulsec bg-azulpry" />
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md">
                                <span className="font-semibold text-center text-[12px]">EXPEDIÇÃO</span>
                                <span className="font-semibold text-center text-sm">{props.pedido.expedicao ? "SIM" : "NÃO"}</span>
                                {props.pedido.expedicao ? (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, expedicao: false })}>
                                        <SmallButton texto="Remover" class="text-cinzasec border-cinzasec bg-cinzapry" />
                                    </div>
                                ) : (
                                    <div onClick={() => props.salvarItem?.({ ...props.pedido, expedicao: true })}>
                                        <SmallButton texto="Adicionar" class="text-azulsec border-azulsec bg-azulpry" />
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-2 md:gap-5">
                        {(user === "administração" || user === "prensa") && (
                            <div className="flex justify-end mb-4" onClick={props.salvar}>
                                <Button texto="Salvar" class="text-verdesec border-verdesec bg-verdepry" />
                            </div>
                        )}

                        {user === "exportação" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, exportacao: true })}>
                                    <Button texto="Confirmar Corte" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        {user === "impressão" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, impressao: true })}>
                                    <Button texto="Confirmar Impressão" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        {user === "corte" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, corte: true })}>
                                    <Button texto="Confirmar Corte" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        {user === "prensa" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, prensa: true })}>
                                    <Button texto="Confirmar Prensa" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        {user === "costura" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, costura: true })}>
                                    <Button texto="Confirmar Costura" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        {user === "expedicao" && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, expedicao: true })}>
                                    <Button texto="Confirmar Expedição" class="text-azulsecsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end mb-4" onClick={props.cancelar} >
                            <Button texto="Cancelar" class="text-cinzasec border-cinzasec bg-cinzapry" />
                        </div>
                    </div>
                    <div>
                        {editar && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => { }} >
                                    <Button texto="Entregar Pedido" class="text-vermelhosec border-vermelhosec bg-vermelhopry" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >
            {user === "administração" && (<Modal text="Deseja fazer entregar do pedido?" action={props.excluir} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "exportação" && (<Modal text="Deseja confirmar a exportação?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "impressão" && (<Modal text="Deseja confirmar a impressão?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "corte" && (<Modal text="Deseja confirmar o corte?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "prensa" && (<Modal text="Deseja confirmar a prensa?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "costura" && (<Modal text="Deseja confirmar costura?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
            {user === "expedição" && (<Modal text="Deseja confirmar a expedição?" action={props.salvar} isOpen={isOpen} toggle={toggle}></Modal>)}
        </>
    )
}