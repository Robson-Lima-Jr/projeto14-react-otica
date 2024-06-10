import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Topo from "@/components/Topo";

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
    </div>
  );
}
