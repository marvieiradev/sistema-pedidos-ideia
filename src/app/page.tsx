import Image from "next/image";
import Pagina from "./components/template/Pagina";
import InputTexto from "./components/shared/InputTexto";
import Link from "next/link";
import Titulo from "./components/template/Titulo";
import { IconUser } from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <Pagina>
        <Titulo icone={IconUser} texto="Login" />
        <div className="flex flex-col gap-5">
          <InputTexto label="Usuario" type="text" />
          <InputTexto label="Senha" type="password" />
          <div className="flex justify-center">
            <Link href="/pedidos">
              <button className="bg-blue-500 text-white p-2 rounded-md">Login</button>
            </Link>
          </div>
        </div>
      </Pagina>
    </>
  );
}
