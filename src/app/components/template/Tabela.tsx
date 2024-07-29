import { useEffect, useState } from "react";
import Celula from "./Celula"

export default function Tabela() {
    const [user, setUser] = useState("");
    useEffect(() => {
        const user = sessionStorage.getItem("setor")
        setUser("" + user)
    }, []);
    return (
        <div className="flex flex-row bg-bgter text-txpry border border-txter mb-[1px] py-[2px] rounded-md font-semibold text-sm">
            {(user == "administração") && (
                <>
                    <Celula texto="Cliente" class="w-[30%] border-r" />
                    <Celula texto="Cód. Pedido" class="w-[10%] border-r" />
                    <Celula texto="Quant." class="w-[10%] border-r" />
                    <Celula texto="EXP" class="w-[5%] border-r" />
                    <Celula texto="IMP" class="w-[5%] border-r" />
                    <Celula texto="COR" class="w-[5%] border-r" />
                    <Celula texto="PRE" class="w-[5%] border-r" />
                    <Celula texto="COS" class="w-[5%] border-r" />
                    <Celula texto="EXP" class="w-[5%] border-r" />
                    <Celula texto="Costureira" class="w-[20%]" />
                </>
            )}
            {(user == "loja") && (
                <>
                    <Celula texto="Cliente" class="w-[45%] border-r" />
                    <Celula texto="Cód. Pedido" class="w-[20%] border-r" />
                    <Celula texto="Quant." class="w-[20%] border-r" />
                    <Celula texto="EXP" class="w-[8%] border-r" />
                    <Celula texto="IMP" class="w-[8%] border-r" />
                    <Celula texto="COR" class="w-[8%] border-r" />
                </>
            )}
            {(user == "corte") && (
                <>
                    <Celula texto="Cliente" class="w-[45%] border-r" />
                    <Celula texto="Cód. Pedido" class="w-[20%] border-r" />
                    <Celula texto="Quant." class="w-[20%] border-r" />
                    <Celula texto="EXP" class="w-[8%] border-r" />
                    <Celula texto="IMP" class="w-[8%] border-r" />
                    <Celula texto="COR" class="w-[8%] border-r" />
                </>
            )}
            {(user == "prensa") && (
                <>
                    <Celula texto="Cliente" class="w-[45%] border-r" />
                    <Celula texto="Cód. Pedido" class="w-[15%] border-r" />
                    <Celula texto="Quant." class="w-[15%] border-r" />
                    <Celula texto="IMP" class="w-[8%] border-r" />
                    <Celula texto="COR" class="w-[8%] border-r" />
                    <Celula texto="PRE" class="w-[8%] border-r " />
                    <Celula texto="Costureira" class="w-[20%] " />
                </>
            )}
            {(user == "costura") && (
                <>
                    <Celula texto="Cliente" class="w-[45%] border-r" />
                    <Celula texto="Cód. Pedido" class="w-[15%] border-r" />
                    <Celula texto="Quant." class="w-[15%] border-r" />
                    <Celula texto="PRE" class="w-[8%] border-r" />
                    <Celula texto="COS" class="w-[8%] border-r" />
                    <Celula texto="Costureira" class="w-[20%] " />
                </>
            )}
            {(user == "expedição") && (
                <>
                    <Celula texto="Cliente" class="w-[45%] border-r" />
                    <Celula texto="Cód. Pedido" class="w-[15%] border-r" />
                    <Celula texto="Quant." class="w-[15%] border-r" />
                    <Celula texto="COS" class="w-[8%] border-r" />
                    <Celula texto="EXD" class="w-[8%] border-r" />
                    <Celula texto="Costureira" class="w-[20%]" />
                </>
            )}
        </div>
    )
}