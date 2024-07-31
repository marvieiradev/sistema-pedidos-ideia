'use client'
import Pagina from "./components/template/Pagina";
import InputTexto from "./components/shared/InputTexto";
import Link from "next/link";
import Button from "./components/template/Button";
import React, { useEffect } from "react";
import funcionarios from "./data/constants/funcionarios";
import { Funcionario } from "@/core/model/Funcionario";


let error = false;
export default function Home() {
  let nome = ""; let senha = "";

  return (
    <>
      <Pagina>
        <div className="w-screen h-screen flex justify-center items-center p-2">
          <div className="bg-bgsec border border-txter items-center flex flex-col p-8 rounded-lg w-full md:max-w-[400px]">
            <img src="./logo-preto.svg" alt="" width={150} />
            <span className="text-center text-txpry text-xl mt-4">Login</span>
            <div className="flex flex-col gap-4 m-4 w-full">
              <InputTexto label="Usuario" type="text" onChange={(e) => nome = (e.target as HTMLInputElement).value.toLocaleLowerCase()} />
              <InputTexto label="Senha" type="password" onChange={(e) => senha = (e.target as HTMLInputElement).value.toLocaleLowerCase()} />
              <div className="flex justify-center">
                <Link href="/pedidos" onClick={() => {
                  funcionarios.map((funcionario: Funcionario) => {
                    if (funcionario.nome == nome && funcionario.senha == senha) {
                      sessionStorage.setItem("setor", funcionario.setor)
                      error = false;
                    } else {
                      error = true;
                    }
                  })
                }}>
                  <Button texto="Login" class="text-verdesec border-verdesec bg-verdepry" />
                </Link>
              </div>

              <div className="flex items-center justify-center text-vermelhosec text-center h-[25px] font-semibold">
                {error && (
                  <span>Usuário ou senha incorretos, por favor tente novamente</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Pagina >
    </>
  );
}

