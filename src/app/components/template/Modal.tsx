import React, { ReactNode } from "react";
import Button from "./Button";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    action: () => void;
    toast: () => void;
    text: string;
}

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <div className="z-30 modal-overlay bg-black fixed inset-0 bg-dark bg-opacity-10 backdrop-blur-sm flex justify-center items-center" onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className="modal-box">
                        <div className="h-[200px] w-[300px] lg:h-[250px] lg:w-[400px] bg-bgsec border-txter border-solid border shadow-lg rounded-lg">
                            <div className="flex flex-col items-center px-5">
                                <h1 className="mt-3 text-lg lg:mt-6 lg:text-xl text-center text-txpry font-bold uppercase">{props.text}</h1>
                                <h3 className="text-sm text-center mt-3 lg:font-semibold lg:mt-10 text-vermelhosec uppercase">Verifique o pedido antes de confirmar!</h3>
                                <div className="flex flex-row items-center justify-center gap-3 w-full mt-5 lg:mt-10 md:gap-6">
                                    <div onClick={props.action}>
                                        <div onClick={props.toast}>
                                            <Button texto="Sim" class="text-verdesec border-verdesec bg-verdepry w-[90px]" />
                                        </div>
                                    </div>
                                    <div onClick={props.toggle}>
                                        <Button texto="Não" class="text-vermelhosec border-vermelhosec bg-vermelhopry w-[90px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}