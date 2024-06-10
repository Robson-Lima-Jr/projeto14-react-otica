import Link from "next/link";
import Image from "next/image";
import styles from "./Topo.module.css"

import Logo from "../../../public/logo.png";

export default function Topo() {
    return (
        <header className={styles.container_topo}>
            <Image src={Logo} alt="logo" className={styles.imagemTopo}></Image>

            <nav>
                <Link href="#produtos" className={styles.linksTopo}>PRODUTOS</Link>
                <Link href="#sobre" className={styles.linksTopo}>SOBRE</Link>
                <Link href="#produtos" className={styles.linksTopo}>CONTATO</Link>
            </nav>
        </header>
    );
}