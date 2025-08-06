import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";

const TragoTrax = () => {
  const { t } = useTranslation('projects')
  const [elementosAnimados, setElementosAnimados] = useState([]);

  useEffect(() => {
    const elementos = document.querySelectorAll(".elemento-animado");

    const opcionesObservador = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
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

  return (
    <Layout
      title="Trago Trax"
      description=""
    >
      <section className={styles.proyectoportafolio}>
        <div className="contenedor-small">
          <div className={styles.tituloportafolio}>
            <h1>{t('trago-trax.title')}</h1>
            <p>{t('trago-trax.type')}</p>
          </div>
          <div className={styles.heroimage}>
            <div className={styles.sombraimagen}>
            </div>
            <Image src='/imagenes/projects/trax/fondo.jpg' width={1000} height={1000} alt="Proyecto Trago Trax" quality={100}/>
          </div>

          <div className="texto">
            <h2>{t('trago-trax.about')}</h2>
            <p className="font-size-big">{t('trago-trax.description1')}</p>
            <p>{t('trago-trax.description2')}</p>
          </div>

          <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
            <Image className="elemento-animado" src='/imagenes/projects/trax/iphone-1.png' width={1000} height={1000} alt="Proyecto Trago Trax en un teléfono" quality={100}/>
            <Image className="elemento-animado" src='/imagenes/projects/trax/iphone-2.png' width={1000} height={1000} alt="Proyecto Trago Trax en un teléfono" quality={100}/>
          </div>

          <div className="texto">
            <p className="font-size-big">{t('trago-trax.description3')}</p>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/trax/macbook.png' width={1000} height={1000} alt="Proyecto Trago Trax en una macbook" quality={100}/>
            </div>

            <div className={`${styles.contenedorbotones} elemento-animado`}>
              <Link className={styleBotones.boton} href="https://trago-trax.netlify.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank">{t('trago-trax.viewWebsite')}</Link>
            </div>
          </div>

          <div className="texto">
            <h2>{t('trago-trax.stack')}</h2>
            <p className="font-size-big">{t('trago-trax.stackDescription')}</p>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/trax/mac-iphone.png' width={1000} height={1000} alt="Proyecto Trago Trax diseño responsivo" quality={100}/>
            </div>

            <div className={`${styles.contenedorbotones} elemento-animado`}>
              <Link className={styleBotones.boton} href="https://github.com/CristhianSevilla/Trago-Trax" target="_blank">{t('trago-trax.viewCode')}</Link>
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

export default TragoTrax