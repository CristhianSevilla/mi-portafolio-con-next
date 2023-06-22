import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/proyectos.module.css"

const ProyectosDestacados = ({ proyecto }) => {

    const [elementosAnimados, setElementosAnimados] = useState([]);

    useEffect(() => {
        const elementos = document.querySelectorAll(".elemento-animado");

        const opcionesObservador = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3, // Cambiado a 0.5 para que aparezca al 50%
        };

        const callbackObservador = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animado");
                    observador.unobserve(entry.target);
                }
            });
        };

        const observador = new IntersectionObserver(callbackObservador, opcionesObservador);

        elementos.forEach((elemento) => {
            observador.observe(elemento);
        });

        setElementosAnimados(elementos);

        return () => {
            observador.disconnect();
        };
    }, []);

        const { titulo, tipo, descripcion, urlgithub, urlweb, img, tecnologias, urlUnica  } = proyecto

    return (
            <div className={`${styles.proyectos} contenedor  elemento-animado`}>
                <div className={styles.proyecto}>
                    <div className={`${styles.proyectodescripcion} texto`}>

                        <h3>{titulo}</h3>
                        <div className={styles.tipoproyecto}>
                            <p>Desarrollo <span>{tipo}</span></p>
                        </div>

                        <p className={styles.descripcioncorta}>{descripcion}</p>

                        <div className={styles.proyectotecnologias}>
                            <ul className={styles.tecnologia}>

                                {
                                    tecnologias.map(tecnologia => (
                                        <li key={tecnologia} >{tecnologia}</li>
                                    ))
                                }
                            
                            </ul>
                        </div>

                        <div className={styles.proyectoenlaces}>
                            <Link href={urlgithub} aria-label="GitHub" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github enlace-icon ">
                                    <title>Código en GitHub</title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </Link>

                            {
                                urlweb ?
                                    (
                                        <>
                                            <Link href={urlweb} aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                                    <title>Ver Sitio Web</title>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </Link>
                                        </>
                                    )

                                    : ""

                            }

                            <Link href={`/proyectos/${urlUnica}`}>
                                Leer más</Link>
                        </div>

                    </div>
                    <div className={styles.proyectoimagen}>
                        <Link href={`/proyectos/${urlUnica}`}>
                            <Image src={`/imagenes/projects${img}`} width={400} height={400} alt="Proyecto Guitar los Angeles" />
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default ProyectosDestacados