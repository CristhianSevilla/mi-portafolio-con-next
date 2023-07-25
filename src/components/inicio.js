import { useEffect, useState } from 'react';
import styles from "../styles/inicio.module.css"
import styleBotones from "../styles/botones.module.css"
import Link from "next/link"


const Inicio = () => {

    
    return (
        <section className={styles.home}>
            <div className={styles.home_contenido}>
                <div className={`contenedor-small-2 ${styles.contenedor_contenido}`}>
                    <div className={`${styles.home_saludo}`}>
                        <p>
                            Hola, yo soy
                        </p>
                    </div>
                    <h1>Cristhian <span>Desarrollador Web</span> </h1>
                </div>
            </div>
            <div className={`${styles.contenedor_boton}`}>
                <Link href="/proyectos" className={styleBotones.boton}>Mi trabajo</Link>
            </div>
        </section>
    )
}

export default Inicio