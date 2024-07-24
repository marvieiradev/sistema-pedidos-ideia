export default function Tabela() {
    return (
        <div className="flex flex-row border border-white mb-1 cursor-pointer text-yellow-500 bg-black">

            <div className="w-[30%] border border-white">
                <span className="ml-2">Cliente</span>
            </div>

            <div className="w-[10%] border border-white text-center">
                <span>Cód. Pedido</span>
            </div>

            <div className="w-[10%] border border-white text-center">
                <span>Quantidade</span>
            </div>

            <div className="w-[5%] border border-white text-center">
                <span>ART</span>
            </div>

            <div className="w-[5%] border border-white text-center">
                <span>EXP</span>
            </div>

            <div className="w-[5%] border border-white text-center">
                <span>IMP</span>
            </div>

            <div className="w-[5%] border border-white text-center">
                <span>COR</span>
            </div>

            <div className="w-[5%] border border-white text-center">
                <span>PRE</span>
            </div>

            <div className="w-[5%] border border-white text-center">
                <span>COS</span>
            </div>

            <div className="w-[20%] border border-white">
                <span className="ml-2">Costureira</span>
            </div>
        </div>
    )
}