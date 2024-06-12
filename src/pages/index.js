import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Topo from "@/components/Topo";
import SecaoCapa from "@/components/SecaoCapa";
import SecaoProdutos from "@/components/SecaoProdutos";
import SecaoSobre from "@/components/SecaoSobre";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Projeto 14 - Óticas Vida</title>
        <meta name="description" content="Oticas Vida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="otica, vida, devmedia, react" />
        <meta name="author" content="Robson-Lima-Jr" />
      </Head>

      <Topo />

      <main>
        <section className={styles.banner_container}>
          <div className={styles.container_base}>
            <SecaoCapa />
          </div>
        </section>

        <section id="produtos">
          <div className={styles.container_base}>
            <SecaoProdutos/>
          </div>
        </section>

        <section className={styles.container_sobre} id="sobre">
          <div className={styles.container_base}>
            <SecaoSobre />
          </div>
        </section>


      </main>

    </div>
  );
}
