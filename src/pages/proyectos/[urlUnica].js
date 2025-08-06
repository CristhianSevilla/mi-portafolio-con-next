import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";
import { useRouter } from 'next/router';
import PROYECTOS from "@/Data";

const Proyecto = () => {
    const { t } = useTranslation('projects')
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
    
    if (!proyecto) {
        return null;
    }
    
    const titulo = proyecto.titulo || '';
    const tipoProyecto = proyecto.tipoProyecto || { uno: '', dos: '' };
    const urlFondo = proyecto.urlFondo || '';
    const acerca1 = proyecto.acerca1 || '';
    const acerca2 = proyecto.acerca2 || '';
    const acerca3 = proyecto.acerca3 || '';
    const imgIphone1 = proyecto.imgIphone1 || '';
    const imgIphone2 = proyecto.imgIphone2 || '';
    const imgMac = proyecto.imgMac || '';
    const stack = proyecto.stack || '';
    const imgMacIphone = proyecto.imgMacIphone || '';
    const urlgithub = proyecto.urlgithub || '';
    const urlweb = proyecto.urlweb || '';

    return (
        <Layout
        title={titulo}
        >
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
                            proyecto && urlFondo ? (
                                <Image src={`/imagenes/projects${urlFondo}`} width={1000} height={1000} alt={`Proyecto ${titulo}`} quality={100} priority/>
                            ) : null
                        }
                    </div>

                    <div className="texto">
                        <h2 className="my-div">{t(`${proyecto?.urlUnica}.about`) || 'Acerca del proyecto'}</h2>

                        <p className="font-size-big">{t(`${proyecto?.urlUnica}.description1`) || acerca1}</p>

                        <p>{t(`${proyecto?.urlUnica}.description2`) || acerca2}</p>
                    </div>

                    <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen} elemento-animado`}>

                        {
                            proyecto && imgIphone1 ? (
                                <Image src={`/imagenes/projects${imgIphone1}`} width={1000} height={1000} alt={`Proyecto ${titulo} en un teléfono`} quality={100} />
                            ) : null
                        }

                        {
                            proyecto && imgIphone2 ? (
                                <Image src={`/imagenes/projects${imgIphone2}`} width={1000} height={1000} alt={`Proyecto ${titulo} en un teléfono`} quality={100}/>
                            ) : null
                        }

                    </div>
                    <div className="texto">
                        <p className="font-size-big">{t(`${proyecto?.urlUnica}.description3`) || acerca3}</p>

                        <div className={`${styles.proyectocontenedorimagen} elemento-animado`}>

                            {
                                proyecto && imgMac ? (
                                    <Image src={`/imagenes/projects${imgMac}`} width={1000} height={1000} alt={`Proyecto ${titulo} en una macbook`} quality={100}/>
                                ) : null
                            }

                        </div>

                        <div className={`${styles.contenedorbotones} elemento-animado`}>
                            {
                                urlweb &&
                                <Link className={styleBotones.boton} href={urlweb} aria-label="External Link" rel="noopener noreferrer" target="_blank">{t(`${proyecto?.urlUnica}.viewWebsite`) || 'Ver Sitio Web'}</Link>
                            }
                        </div>
                    </div>
                    <div className="Stack-proyecto descripcion-proyecto-portafolio">
                        <div className="texto">
                            <h2>{t(`${proyecto?.urlUnica}.stack`) || 'Stack del proyecto'}</h2>

                            <p className="font-size-big">{t(`${proyecto?.urlUnica}.stackDescription`) || stack}</p>
                            {/* <p className="font-size-big">{stack1? ? stack1 : ""}</p> */}
                            {/* // <p className="font-size-big">{stack2? && stack2}</p> */}
                        </div>
                        <div className={`${styles.proyectocontenedorimagen} elemento-animado`}>
                            {
                                proyecto && imgMacIphone ? (
                                    <Image src={`/imagenes/projects${imgMacIphone}`} width={1000} height={1000} alt={`Proyecto ${titulo} diseño responsivo`} quality={100}/>
                                ) : null
                            }
                        </div>
                        <div className={`${styles.contenedorbotones} elemento-animado`}>
                            <Link className={styleBotones.boton} href={urlgithub} target="_blank">{t(`${proyecto?.urlUnica}.viewCode`) || 'Ver Código'}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  }
}

export async function getStaticPaths() {
  const paths = []
  const locales = ['en', 'es']
  
  // Only include projects that have urlUnica
  const validProjects = PROYECTOS.filter(proyecto => proyecto.urlUnica)
  
  validProjects.forEach((proyecto) => {
    locales.forEach((locale) => {
      paths.push({
        params: { urlUnica: proyecto.urlUnica },
        locale: locale
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export default Proyecto