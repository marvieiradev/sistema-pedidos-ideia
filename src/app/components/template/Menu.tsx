import { IconCactus, IconHome, IconPackage } from "@tabler/icons-react";
import Link from "next/link";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <aside className="w-35 bg-zinc-900 h-screen text-white">
            <nav className="flex flex-col gap-1 py-7">
                <MenuItem icone={IconHome} texto="Início" url="/" />
                <MenuItem icone={IconPackage} texto="Pedidos" url="/pedidos" />
            </nav>
        </aside>
    );
}