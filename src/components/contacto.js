import Link from "next/link"
import Image from "next/image"
import styles from "../styles/secciones.module.css"
import stylesH from "../styles/habilidades.module.css"
import styleBotones from "../styles/botones.module.css"
import Formulario from "./formulario"

const Contacto = () => {
    return (

        <section className={`${stylesH.habilidades_background} seccion`}>
            <div className="contenedor-small-2">
                <div className={styles.seccion_i}>
                    {/* <div>
                        <div className="titulo">
                            <h2><span>Contato</span></h2>
                        </div>
                        <Formulario />
                    </div> */}

                    <div className={`${styles.seccion_img_v} elemento-animado`}>
                        <Image src='/imagenes/hola.jpg' width={350} height={350} alt="Cristhian Sevilla" quality={100} priority />
                    </div>
                    <div className=" texto elemento-animado">
                    <div className="titulo">
                            <h2><span>Contato</span></h2>
                        </div>

                        <p>Deseo unirme a un equipo de trabajo motivado donde podamos inspirarnos mutuamente para alcanzar grandes metas.</p>

                        <p>Estoy disponible en mi bandeja de entrada para recibir sus mensajes. Si tiene alguna pregunta, propuesta o simplemente quiere saludar, no dude en escribirme.</p>

                        <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
                            <Link href="mailto:crissev17@gmail.com" className={styleBotones.boton}>¡Di Hola!</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Contacto