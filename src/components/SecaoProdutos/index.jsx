import styles from "./SecaoProdutos.module.css";
import Image from "next/image";

import OculosGrau from "../../../public/oculos01.png"
import OculosTransition from "../../../public/oculos02.png"
import OculosSol from "../../../public/oculos03.png"
import OculosInfantil from "../../../public/oculos04.png"

export default function SecaoProdutos() {
    return (
        <div className={styles.base_produtos}>
            <h3>Nossos Produtos</h3>

            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

            <div className={styles.area_produtos}>
                <div className={styles.produtos}>
                    <h4>Óculos de grau</h4>
                    
                    <Image src={OculosGrau} alt="oculos de grau" className={styles.imagens}/>
                    
                    <p>R$ 500,00</p>
                </div>

                <div className={styles.produtos}>
                    <h4>Óculos de transition</h4>
                    
                    <Image src={OculosTransition} alt="oculos transition" className={styles.imagens}/>
                    
                    <p>R$ 750,00</p>
                </div>

                <div className={styles.produtos}>
                    <h4>Óculos de sol</h4>
                    
                    <Image src={OculosSol} alt="oculos de sol" className={styles.imagens}/>
                    
                    <p>R$ 700,00</p>
                </div>

                <div className={styles.produtos}>
                    <h4>Óculos infantil</h4>
                    
                    <Image src={OculosInfantil} alt="oculos infantil" className={styles.imagens}/>
                    
                    <p>R$ 500,00</p>
                </div>
            </div>

            <p>Todos os nossos produtos incluem:</p>

            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </div>
    )
}