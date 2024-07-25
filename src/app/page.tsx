import Pagina from "./components/template/Pagina";
import InputTexto from "./components/shared/InputTexto";
import Link from "next/link";
import Button from "./components/template/Button";

export default function Home() {
  return (
    <>
      <Pagina>
        <div className="bg-bgsec border border-txter m-[50%] items-center flex flex-col p-8 rounded-lg">
          <img src="./logo-preto.svg" alt="" width={150} />
          <span className="text-center text-txpry text-xl mt-4">Login</span>
          <div className="flex flex-col gap-4 mt-4">
            <InputTexto label="Usuario" type="text" />
            <InputTexto label="Senha" type="password" />
            <div className="flex justify-center">
              <Link href="/pedidos">
                <Button texto="Login" class="text-verdesec border-verdesec bg-verdepry" />
              </Link>
            </div>
          </div>
        </div>
      </Pagina>
    </>
  );
}
