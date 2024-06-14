import styles from "./SecaoCapa.module.css"

export default function SecaoCapa() {
    return (
        <section className={styles.banner_container}>
            <div className={styles.container_base}>
                <div className={styles.titulo_area}>
                    <p>Preços baixos em</p>
                    <h1>Óculos de grau e de sol</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </div>
        </section>
    );
};