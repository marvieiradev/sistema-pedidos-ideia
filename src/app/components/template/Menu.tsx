import { Icon12Hours, Icon360, IconHome, IconPackage } from "@tabler/icons-react";
import Link from "next/link";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <aside className="w-72 bg-zinc-900 h-screen">
            <nav className="flex flex-col gap-1 py-7">
                <MenuItem icone={IconHome} texto="Início" url="/" />
                <MenuItem icone={IconPackage} texto="Pedidos" url="/usuarios" />
                <MenuItem icone={Icon360} texto="Exemplo" url="/" />
                <MenuItem icone={Icon12Hours} texto="Exemplo" url="/" />
            </nav>
        </aside>
    );
}