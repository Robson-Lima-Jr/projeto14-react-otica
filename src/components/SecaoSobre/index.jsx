import styles from "./SecaoSobre.module.css";
import Image from "next/image";

import Atendimento from "../../../public/atendimento.png"
import Loja from "../../../public/loja.png";

export default function SecaoSobre() {
    return (
        <div className={styles.sobre_area}>
            <h3>QUEM SOMOS NÓS?</h3>

            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>

            <div className={styles.sobre_box}>
                <Image src={Loja} alt="loja" layout="fixed" className={styles.imagens} />


                <div className={styles.sobre_box_conteudo}>
                    <h4>Nossas Filiais</h4>

                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>

                <div className={styles.sobre_box_conteudo}>
                    <h4>Atendimento flexível</h4>

                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>

                <Image src={Atendimento} alt="atendimento" layout="fixed" className={styles.imagens} />
            </div>
        </div>
    );
};