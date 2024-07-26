import Celula from "./Celula"

export default function Tabela() {
    return (
        <div className="flex flex-row bg-bgter text-txpry border border-txter mb-[1px] py-[2px] rounded-md font-semibold text-sm">
            <Celula texto="Cliente" class="w-[30%] border-r" />
            <Celula texto="Cód. Pedido" class="w-[10%] border-r" />
            <Celula texto="Quant." class="w-[10%] border-r" />
            <Celula texto="ART" class="w-[5%] border-r" />
            <Celula texto="EXP" class="w-[5%] border-r" />
            <Celula texto="IMP" class="w-[5%] border-r" />
            <Celula texto="COR" class="w-[5%] border-r" />
            <Celula texto="PRE" class="w-[5%] border-r" />
            <Celula texto="COS" class="w-[5%] border-r" />
            <Celula texto="EXP" class="w-[5%] border-r" />
            <Celula texto="Costureira" class="w-[20%]" />
        </div>
    )
}