import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";

export interface HeaderProps {
    texto: string
}

export default function Header(props: HeaderProps) {
    return (
        <div className=" flex w-screen bg-bgter justify-center items-center">
            <div className="flex w-full md:max-w-[1200px] justify-between items-center h-[35px] md:h-[40px] px-2">
                <div className="flex gap-2 items-center">
                    <img src="./icon-ideia.svg" alt="" className="w-[24px] md:w-[32px]" />
                    <span className="text-xs md:text-base uppercase font-semibold">CONTROLE DE PEDIDOS</span>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="text-xs md:text-base uppercase font-semibold">{props.texto}</span>
                    <div className="border border-txter rounded-md">
                        <Link href="/" onClick={() => sessionStorage.setItem("setor", "")}>
                            <IconLogout />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}