import styles from "../styles/inicio.module.css"

const Inicio = () => {
    return (
        <section className={styles.home}>
            <div className={styles.home_sombra}>
                <h1>Hola <span>soy</span> <span>Cristhian</span></h1>
                <p className={styles.home_profesion}>
                    Desarrollador <span>front-end</span>
                </p>
            </div>
        </section>
    )
}

export default Inicio