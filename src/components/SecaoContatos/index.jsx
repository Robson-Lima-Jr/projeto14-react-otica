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

            <div className={styles.contato_box}>
                <div>
                    <h5>Contato</h5>
                    <div className={styles.contato_descricao}>
                        <div>
                            <Image src={Local_icon} alt="local" className={styles.icones_contato} />
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div>
                            <Image src={Telefone_icon} alt="telefone" className={styles.icones_contato} />
                            <p>(21) 9999-9999</p>
                        </div>
                        <div>
                            <Image src={Email_icon} alt="email" className={styles.icones_contato} />
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h5>Nossas Redes Sociais</h5>
                    <div className={styles.contato_descricao}>
                        <div>
                            <Image src={Facebook_icon} alt="facebook" className={styles.icones_contato} />
                            <p>/oticaVida</p>
                        </div>
                        <div>
                            <Image src={Intagram_icon} alt="instagram" className={styles.icones_contato} />
                            <p>@oticavidarj</p>
                        </div>
                        <div>
                            <Image src={Twitter_icon} alt="twitter" className={styles.icones_contato} />
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}