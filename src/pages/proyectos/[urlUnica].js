import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";
import { useRouter } from 'next/router';
import PROYECTOS from "@/Data";

const Proyecto = () => {

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

    const router = useRouter();
    const { query } = router;
    const proyectos = PROYECTOS.filter(proyecto => proyecto.urlUnica === query.urlUnica);
    const proyecto = proyectos[0]
    const titulo = proyecto ? proyecto.titulo : '';
    const tipoProyecto = proyecto ? proyecto.tipoProyecto : '';
    const urlFondo = proyecto ? proyecto.urlFondo : '';
    const acerca1 = proyecto ? proyecto.acerca1 : '';
    const acerca2 = proyecto ? proyecto.acerca2 : '';
    const acerca3 = proyecto ? proyecto.acerca3 : '';
    const imgIphone1 = proyecto ? proyecto.imgIphone1 : '';
    const imgIphone2 = proyecto ? proyecto.imgIphone2 : '';
    const imgMac = proyecto ? proyecto.imgMac : '';
    const stack = proyecto ? proyecto.stack : '';
    const imgMacIphone = proyecto ? proyecto.imgMacIphone : '';
    const urlgithub = proyecto ? proyecto.urlgithub : '';
    const urlweb = proyecto ? proyecto.urlweb : '';

    return (
        <Layout>
            <section className={styles.proyectoportafolio}>
                <div className="contenedor-small">
                    <div className={styles.tituloportafolio}>
                        <h1>{titulo}</h1>
                        <p>{tipoProyecto.uno} <span>{tipoProyecto.dos}</span></p>
                    </div>
                    <div className={styles.heroimage}>
                        <div className={styles.sombraimagen}>
                        </div>
                        {
                            proyecto ? (
                                <Image src={`/imagenes/projects${urlFondo}`} width={1000} height={1000} alt={`Proyecto ${titulo}`} priority />
                            ) : ""
                        }
                    </div>

                    <div className="texto">
                        <h2 className="my-div">Acerca del proyecto</h2>

                        <p className="font-size-big">{acerca1}</p>

                        <p>{acerca2}</p>
                    </div>

                    <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen} elemento-animado`}>

                        {
                            proyecto ? (
                                <>
                                    <Image src={`/imagenes/projects${imgIphone1}`} width={1000} height={1000} alt={`Proyecto ${titulo} en un teléfono`} />
                                </>
                            ) : ""
                        }

                        {
                            proyecto ? (
                                <>
                                    <Image src={`/imagenes/projects${imgIphone2}`} width={1000} height={1000} alt={`Proyecto ${titulo} en un teléfono`} />
                                </>
                            ) : ""
                        }

                    </div>
                    <div className="texto">
                        <p className="font-size-big">{acerca3}</p>

                        <div className={`${styles.proyectocontenedorimagen} elemento-animado`}>

                            {
                                proyecto ? (
                                    <Image src={`/imagenes/projects${imgMac}`} width={400} height={400} alt={`Proyecto ${titulo} en una macbook`} />
                                ) : ""
                            }

                        </div>

                        <div className={`${styles.contenedorbotones} elemento-animado`}>
                            {
                                urlweb &&
                                <Link className={styleBotones.boton} href={urlweb} aria-label="External Link" rel="noopener noreferrer" target="_blank">Ver Sitio Web</Link>
                            }
                        </div>
                    </div>
                    <div className="Stack-proyecto descripcion-proyecto-portafolio">
                        <div className="texto">
                            <h2>Stack del proyecto</h2>

                            <p className="font-size-big">{stack}</p>
                        </div>
                        <div className={`${styles.proyectocontenedorimagen} elemento-animado`}>
                            {
                                proyecto ? (
                                    <Image src={`/imagenes/projects${imgMacIphone}`} width={1000} height={1000} alt={`Proyecto ${titulo} diseño responsivo`} />
                                ) : ""
                            }
                        </div>
                        <div className={`${styles.contenedorbotones} elemento-animado`}>
                            <Link className={styleBotones.boton} href={urlgithub} target="_blank">Ver Código</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Proyecto