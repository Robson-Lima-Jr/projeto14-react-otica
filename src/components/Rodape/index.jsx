import styles from "./Rodape.module.css";
import Link from "next/link";

export default function Rodape() {
    return (
        <footer className={styles.container_rodape}>
            <div className={styles.container_base}>
                <p>&copy;2022 Óticas Vida. Todos os direitos reservados</p>
                
                <p>Projeto <Link href="https://www.devmedia.com.br/" target="_blank" className={styles.links_rodape}>DevMedia</Link>. Desenvolvido por <Link href="https://github.com/Robson-Lima-Jr" target="_blank" className={styles.links_rodape}>Robson Lima Jr.</Link></p>
            </div>
        </footer>
    );
}