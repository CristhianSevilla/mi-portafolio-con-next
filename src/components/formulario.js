import React from 'react'
import styles from '../styles/formulario.module.css'
import styleBotones from "../styles/botones.module.css"
import Link from 'next/link'


const Formulario = () => {
    return (
        <div className={`${styles.contact_wrapper} ${styles.animated} ${styles.bounceInUp}`}>
            <div className={styles.contact_form}>
                <form action="">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="fullname" />
                    </p>
                    <p>
                        <label>Correo</label>
                        <input type="email" name="email" />
                    </p>
                    <p className={styles.block}>
                        <label>Mensaje</label>
                        <textarea name="message" rows="3"></textarea>
                    </p>
                  <div>
                      <Link href="#" className={styleBotones.boton}>Enviar</Link>
                  </div>
                </form>
            </div>
        </div>

    )
}

export default Formulario