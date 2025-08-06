import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";

const BocadosElite = () => {
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

  return (
    <Layout
      title="Bocados Élite"
      description=""
    >

      <section className={styles.proyectoportafolio}>
        <div className="contenedor-small">
          <div>
            <div className={styles.tituloportafolio}>
              <h1>{t('bocados-elite.title')}</h1>
              <p>{t('bocados-elite.type')}</p>
            </div>
            <div className={styles.heroimage}>
              <div className={styles.sombraimagen}>
              </div>
              <Image src='/imagenes/projects/bocados/fondo.jpg' width={1000} height={1000} alt="Proyecto Bocados Élite" quality={100} />
            </div>
          </div>

          <div className="texto">
            <h2>{t('bocados-elite.about')}</h2>

            <p className="font-size-big">{t('bocados-elite.description1')}</p>

            <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
              <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
              <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone-2.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
            </div>

            <p>{t('bocados-elite.description2')}</p>
          </div>

          <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
            <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone-3.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
            <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone-4.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
          </div>

          <div className="texto">
            <p className="font-size-big">{t('bocados-elite.description3')}</p>
            <p>{t('bocados-elite.description4')}</p>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/bocados/mac-iphone.png' width={1000} height={1000} alt="Proyecto Bocados Élite Responsive" quality={100} />
            </div>

            <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
              <Link className={styleBotones.boton} href="https://bocados-elite.vercel.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank">{t('bocados-elite.clientSite')}</Link>
              <Link className={styleBotones.boton} href="https://bocados-elite.vercel.app/admin" aria-label="External Link" rel="noopener noreferrer" target="_blank">{t('bocados-elite.adminSite')}</Link>
            </div>
          </div>

          <div className={styles.Stackproyecto}>
            <div className="texto">
              <h2>{t('bocados-elite.stack')}</h2>

              <p className="font-size-big">{t('bocados-elite.stackDescription')}</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image className="elemento-animado" src='/imagenes/projects/bocados/macbook.png' width={1000} height={1000} alt="Proyecto Bocados Élite en una MacBook" quality={100} />
              </div>

              <p>{t('bocados-elite.database')}</p>

              <p>{t('bocados-elite.notifications')}</p>

              <div className={`${styles.imagenesgrid}  ${styles.proyectocontenedorimagen}`}>
                <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone-5.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
                <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone-6.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
              </div>

              <div className={`${styles.contenedorbotones} elemento-animado`}>
                <Link className={styleBotones.boton} href="https://github.com/CristhianSevilla/Bocados-Elite" aria-label="External Link" rel="noopener noreferrer" target="_blank">{t('bocados-elite.viewCode')}</Link>
              </div>
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

export default BocadosElite