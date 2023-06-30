import styles from "../styles/inicio.module.css"
import styleBotones from "../styles/botones.module.css"
import Link from "next/link"

const Inicio = () => {
    return (
        <section className={styles.home}>
            <div className={styles.home_contenido}>
                <div className="contenedor-small-2">
                    <div className={`${styles.home_saludo}`}>
                        <p>
                            Hola, yo soy
                        </p>
                    </div>
                    <h1>Cristhian</h1>
                    {/* <h1>Hola <span>soy</span> <span>Cristhian</span></h1> */}
                    <div className={`${styles.home_profesion}`}>
                        <p >
                            Desarrollador <span>Web</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className={`${styles.contenedor_boton}`}>
                <Link href="/proyectos" className={styleBotones.boton}>Mi trabajo</Link>
            </div> */}
        </section>
    )
}

export default Inicio