import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";

export interface HeaderProps {
    texto: string
}

export default function Header(props: HeaderProps) {
    return (
        <div className=" flex w-screen bg-bgter justify-center">
            <div className="flex w-full md:max-w-[1200px] justify-between items-center h-[40px] px-2">
                <div className="flex gap-2 items-center">
                    <img src="./icon-ideia.svg" alt="" width="32px" />
                    <span>Controle de Pedidos</span>
                </div>
                <div className="flex gap-2">
                    <span className="capitalize">{props.texto}</span>
                    <Link href="/" onClick={() => sessionStorage.setItem("setor", "")}>
                        <IconLogout />
                    </Link>
                </div>
            </div>
        </div>
    );
}