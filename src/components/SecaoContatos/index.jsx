import styles from "./SecaoContatos.module.css";
import Image from "next/image";

import Facebook_icon from "../../../public/fb.png"
import Twitter_icon from "../../../public/tt.png"
import Intagram_icon from "../../../public/ig.png"
import Local_icon from "../../../public/local.png"
import Telefone_icon from "../../../public/telefone.png"
import Email_icon from "../../../public/email.png"

export default function SecaoContatos() {
    return (
        <div className={styles.contato_area}>
            <h3>FALE CONOSCO</h3>

            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

            <div></div>
        </div>
    );
}