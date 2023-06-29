import Link from "next/link"
import Image from "next/image"
import styles from "../styles/secciones.module.css"
import styleBotones from "../styles/botones.module.css"

const Contacto = () => {
    return (

        <section className={styles.seccion_proyectos}>
            <div className={`${styles.seccion_proyectos_background} texto`}>
                <div className={`contenedor`}>
                    <div className={styles.seccion}>
                        <div className={`${styles.contenedortexto} elemento-animado`}>
                            <div className="texto">
                                <div className="titulo elemento-animado">
                                    <h2><span>Contacto</span></h2>
                                </div>
                                <p>Deseo formar parte de un equipo laboral motivado, en el que podamos inspirarnos mutuamente para lograr grandes objetivos.</p>

                                <p>Mi bandeja de entrada está disponible para recibir sus mensajes. Si tiene alguna pregunta, propuesta o simplemente quiere saludar, no dude en escribirme. </p>

                                <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
                                    <a href="mailto:crissev17@gmail.com" className={styleBotones.boton}>¡Di Hola!</a>
                                </div>

                            </div>
                        </div>
                        <div className={`${styles.inicioimagenvertical}`}>
                            <Image src='/imagenes/hola.jpg' width={300} height={300} alt="Dí Hola" quality={100} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contacto