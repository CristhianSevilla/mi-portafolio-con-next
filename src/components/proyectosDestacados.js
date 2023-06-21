import Link from "next/link"
import Image from "next/image"
import styles from "../styles/proyectos.module.css"
import { PROYECTOS, TECNOLOGIAS } from "@/Data/proyectos"

const ProyectosDestacados = () => {
    return (
        <main>
            <div className={`${styles.proyectos} contenedor       `}>
                <div className={styles.proyecto}>
                    <div className="proyecto-descripcion texto">

                        <h3>Guitar Los Ángeles</h3>
                        <div className="tipo-proyecto">
                            <p>Desarrollo <span>Front-End</span></p>
                        </div>

                        <p className="descripcion-corta">Tienda online con una amplia selección de guitarras. El carrito de compras hace que sea fácil y conveniente agregar guitarras a un pedido, modificar las selecciones y ver el precio total. También ofrece un blog de consejos para ayudar a mejorar las habilidades de tocar la guitarra.</p>

                        <div className="proyecto-tecnologias">
                            <ul className="tecnologia">
                                <li>React</li>
                                <li>Next.js</li>
                                <li>JavaScript</li>
                                <li>API</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>

                        <div className="proyecto-enlaces">
                            <Link href="https://github.com/CristhianSevilla/GuitarLA" aria-label="GitHub" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github enlace-icon ">
                                    <title>Código en GitHub</title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </Link>

                            <Link href="https://guitar-la-mu.vercel.app/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link">
                                    <title>Ver Sitio Web</title>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </Link>

                            <Link href="proyecto-guitar">
                                Leer más</Link>
                        </div>

                    </div>
                    <div className="proyecto-imagen">
                        <a href="proyecto-guitar">
                            <Image src='/imagenes/cristhiansevilla.jpg' width={200} height={300} alt="Proyecto Guitar los Angeles" />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProyectosDestacados