import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";

export interface HeaderProps {
    texto: string
}

export default function Header(props: HeaderProps) {
    return (
        <div className="flex w-screen justify-between items-center bg-bgter h-[40px] px-4">
            <img src="./icon-preto.svg" alt="" width="32px" className="items-start" />
            <span>Controle de Pedidos</span>
            <div className="flex gap-2">
                <span>{props.texto}</span>
                <Link href="/">
                    <IconLogout />
                </Link>
            </div>
        </div>
    );
}