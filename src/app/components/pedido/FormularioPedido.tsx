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
import React from "react"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const [user, setUser] = useState("");
    useEffect(() => {
        const user = sessionStorage.getItem("setor")
        setUser("" + user)
    }, []);

    const notifVerde = (texto: string) => toast.success(texto, { position: "top-center", autoClose: 3000 });
    const notifAzul = (texto: string) => toast.info(texto, { position: "top-center", autoClose: 3000 });

    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

    if (props.pedido.nome_cliente && props.pedido.cod_pedido && props.pedido.quantidade && props.pedido.id! && user === 'administração') {
        editar = true;
    }
    const { isOpen, toggle } = useModal();
    return (
        <>
            <div className="flex flex-col gap-5 border border-txsec p-4 rounded-lg bg-bgsec">
                {user == 'administração' && (<span className="text-center text-txpry text-lg md:text-xl mb:2 md:mb-4 uppercase">{!editar ? "Novo Pedido" : "Editar Pedido"}</span>)}
                {user != 'administração' && (<span className="text-center text-txpry text-lg md:text-xl mb:2 md:mb-4 uppercase">Detalhes do Pedido</span>)}
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
                    {user == "administração" && (
                        <div className="md:w-[50%] flex flex-wrap justify-center border-2 border-vermelhopry rounded-md">
                            <div className="flex mt-2 p-2 px-8 items-center justify-center gap-2 border border-cinzasec rounded-md">
                                <span className="font-semibold text-center text-sm">PRIORIDADE:</span>

                                <div className="relative w-[100px] bg-bgpry border border-cinzasec" onClick={handleMenuClick}>
                                    <span className="cursor-pointer font-semibold text-center text-sm pr-1">{props.pedido.prioridade == "1" ? "ALTA" : props.pedido.prioridade == "2" ? "MÉDIA" : props.pedido.prioridade == "3" ? "BAIXA" : "BAIXA"}</span>

                                    {menuIsOpen && (
                                        <div className="z-50 absolute w-[100px] bg-bgpry left-[-1px]" onMouseLeave={() => setMenuIsOpen(false)}>
                                            <div onClick={() => setMenuIsOpen(false)}>
                                                <div className="flex flex-row p-1 items-center gap-2 border border-cinzasec" onClick={() => props.salvarItem?.({ ...props.pedido, prioridade: "3" })}>
                                                    <span className="cursor-pointer font-semibold text-center text-sm"> BAIXA</span>
                                                </div>

                                                <div className="flex flex-row p-1 items-center gap-2 border border-cinzasec bg-priormedia" onClick={() => props.salvarItem?.({ ...props.pedido, prioridade: "2" })}>
                                                    <span className="cursor-pointer font-semibold text-center text-sm"> MÉDIA</span>
                                                </div>

                                                <div className="flex flex-row p-1 items-center gap-2 border border-cinzasec bg-prioralta" onClick={() => props.salvarItem?.({ ...props.pedido, prioridade: "1" })}>
                                                    <span className="cursor-pointer font-semibold text-center text-sm"> ALTA</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center p-2 gap-3 md:gap-1">

                                <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md w-[84px]">
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

                                <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md w-[84px]">
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

                                <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md w-[84px]">
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

                                <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md w-[84px]">
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

                                <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md w-[84px]">
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

                                <div className="flex flex-col p-1 items-center justify-center border border-cinzasec rounded-md w-[84px]">
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
                    )}
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-2 md:gap-5">
                        {((user === "administração" || user === "prensa") && props.pedido.nome_cliente && props.pedido.cod_pedido && props.pedido.quantidade) && (
                            <div className="flex justify-end mb-4" onClick={props.salvar}>
                                <div onClick={() => notifVerde("PEDIDO SALVO!")}>
                                    <Button texto="Salvar" class="text-verdesec border-verdesec bg-verdepry" />
                                </div>
                            </div>
                        )}

                        {(user === "loja" && !props.pedido.exportacao) && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, exportacao: true })}>
                                    <Button texto="Concluir Exportação" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        {(user === "loja" && props.pedido.exportacao && !props.pedido.impressao) && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, impressao: true })}>
                                    <Button texto="Concluir Impressão" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        {(user === "corte" && !props.pedido.corte) && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, corte: true })}>
                                    <Button texto="Concluir Corte" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        {(user === "prensa" && props.pedido.corte && !props.pedido.prensa) && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, prensa: true })}>
                                    <Button texto="Concluir Prensa" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        {(user === "costura" && props.pedido.prensa && !props.pedido.costura) && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, costura: true })}>
                                    <Button texto="Concluir Costura" class="text-azulsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        {(user === "expedição" && props.pedido.costura && !props.pedido.expedicao) && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => props.salvarItem?.({ ...props.pedido, expedicao: true })}>
                                    <Button texto="Concluir Expedição" class="text-azulsecsec border-azulsec bg-azulpry" />
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end mb-4" onClick={props.cancelar} >
                            <Button texto="Cancelar" class="text-cinzasec border-cinzasec bg-cinzapry" />
                        </div>
                    </div>
                    <div>
                        {(editar && props.pedido.exportacao && props.pedido.impressao && props.pedido.corte && props.pedido.prensa && props.pedido.costura && props.pedido.expedicao) && (
                            <div onClick={toggle}>
                                <div className="flex justify-end mb-4" onClick={() => { }} >
                                    <Button texto="Entregar Pedido" class="text-vermelhosec border-vermelhosec bg-vermelhopry" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >
            {user === "administração" && (<Modal text="Deseja entregar o pedido?" action={props.excluir} isOpen={isOpen} toggle={toggle} toast={() => notifAzul("PEDIDO ENTREGUE!")}></Modal>)
            }
            {user === "exportação" && (<Modal text="Deseja concluir a exportação?" action={props.salvar} isOpen={isOpen} toggle={toggle} toast={() => notifVerde("EXPORTAÇÃO CONCLUÍDA!")}></Modal>)}
            {user === "impressão" && (<Modal text="Deseja concluir a impressão?" action={props.salvar} isOpen={isOpen} toggle={toggle} toast={() => notifVerde("IMPRESSÃO CONCLUÍDA!")}></Modal>)}
            {user === "corte" && (<Modal text="Deseja concluir o corte?" action={props.salvar} isOpen={isOpen} toggle={toggle} toast={() => notifVerde("CORTE CONCLUÍDO!")}></Modal>)}
            {user === "prensa" && (<Modal text="Deseja concluir a prensa?" action={props.salvar} isOpen={isOpen} toggle={toggle} toast={() => notifVerde("PRENSA CONCLUÍDA!")}></Modal>)}
            {user === "costura" && (<Modal text="Deseja concluir costura?" action={props.salvar} isOpen={isOpen} toggle={toggle} toast={() => notifVerde("COSTURA CONCLUÍDA!")}></Modal>)}
            {user === "expedição" && (<Modal text="Deseja concluir a expedição?" action={props.salvar} isOpen={isOpen} toggle={toggle} toast={() => notifVerde("EXPEDIÇÃO CONCLUÍDA!")}></Modal>)}
        </>
    )
}
