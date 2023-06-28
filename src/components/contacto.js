import Link from "next/link"
import Image from "next/image"
import styles from "../styles/inicio.module.css"
import styleBotones from "../styles/botones.module.css"

const Contacto = () => {
    return (

        <section className={styles.inicio}>
            <div className="contenedor">
                <div className={styles.seccion}>

                    <div className={`${styles.contenedortexto} elemento-animado`}>
                        <div className="texto">
                            <div className="titulo elemento-animado">
                                <h2><span>Contacto</span></h2>
                            </div>
                            <p>Estoy ansioso por <span>unirme a un equipo laboral</span> apasionado en el que podamos inspirarnos mutuamente y lograr grandes cosas.</p>

                            <p>Mi bandeja de entrada siempre está abierta. <span>¡Me encantara recibir sus mensajes!</span> Si tiene alguna pregunta, propuesta o simplemente quiere decir hola, no dude en escribirme. ¡Yo haré todo lo posible por responderle!</p>

                            <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
                                <a href="mailto:crissev17@gmail.com" className={styleBotones.boton}>¡Di Hola!</a>
                            </div>

                        </div>
                    </div>

                    <div className={`${styles.inicioimagenvertical} elemento-animado`}>

                        <Image src='/imagenes/hola.jpg' width={300} height={300} alt="Dí Hola" quality={100}/>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Contacto