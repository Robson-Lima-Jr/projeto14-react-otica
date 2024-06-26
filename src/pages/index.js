import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Topo from "@/components/Topo";
import SecaoCapa from "@/components/SecaoCapa";
import SecaoProdutos from "@/components/SecaoProdutos";
import SecaoSobre from "@/components/SecaoSobre";
import SecaoContatos from "@/components/SecaoContatos";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <title>Projeto 14 - Óticas Vida</title>
        <meta name="description" content="Oticas Vida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="otica, vida, devmedia, react" />
        <meta name="author" content="Robson-Lima-Jr" />
      </Head>

      <Topo />

      <main>
        <SecaoCapa />

        <SecaoProdutos />

        <SecaoSobre />

        <SecaoContatos />
      </main>

      <Rodape />
    </div>
  );
}
