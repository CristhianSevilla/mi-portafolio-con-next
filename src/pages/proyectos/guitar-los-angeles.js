import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";

const GuitarLosAngeles = () => {
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
      title="Guitar Los Angeles"
      description=""
    >

      <section className={styles.proyectoportafolio}>
        <div className="contenedor-small">
          <div>
            <div className={styles.tituloportafolio}>
              <h1>{t('guitar-los-angeles.title')}</h1>
              <p>{t('guitar-los-angeles.type')}</p>
            </div>
            <div className={styles.heroimage}>
              <div className={styles.sombraimagen}>
              </div>
              <Image src='/imagenes/projects/guitar/fondo.jpg' width={1000} height={1000} alt="Proyecto GuitarLA" quality={100}/>
            </div>
          </div>

          <div className="texto">
            <h2>{t('guitar-los-angeles.about')}</h2>

            <p className="font-size-big">{t('guitar-los-angeles.description1')}</p>

            <p>{t('guitar-los-angeles.description2')}</p>

            <p>{t('guitar-los-angeles.description3')}</p>

          </div>

          <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
            <Image  className="elemento-animado" src='/imagenes/projects/guitar/iphone.png' width={1000} height={1000} alt="Proyecto GuitarLA-blog en un Teléfono" quality={100}/>
            <Image  className="elemento-animado" src='/imagenes/projects/guitar/iphone-2.png' width={1000} height={1000} alt="Proyecto GuitarLA-blog en un Teléfono" quality={100}/>
          </div>

          <div className="texto">
            <h3>{t('guitar-los-angeles.cartTitle')}</h3>
            <p className="font-size-big">{t('guitar-los-angeles.cartDescription1')}</p>
            <p>{t('guitar-los-angeles.cartDescription2')}</p>

            <div className={styles.proyectocontenedorimagen}>
              <Image  className="elemento-animado" src='/imagenes/projects/guitar/macbook.png' width={1000} height={1000} alt="Proyecto GuitarLA-blog en una MacBook" quality={100}/>
            </div>

            <div className={`${styles.contenedorbotones} elemento-animado`}>
              <Link className={styleBotones.boton} href="https://guitar-la-mu.vercel.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank">{t('guitar-los-angeles.viewWebsite')}</Link>
            </div>
          </div>

          <div className={styles.Stackproyecto}>
            <div className="texto">
              <h2>{t('guitar-los-angeles.stack')}</h2>

              <p className="font-size-big">{t('guitar-los-angeles.stackDescription')}</p>

              <h3>{t('guitar-los-angeles.myRole')}</h3>
              <p>{t('guitar-los-angeles.myRoleDescription')}</p>

              <p>{t('guitar-los-angeles.metaInfo')}</p>

              <p>{t('guitar-los-angeles.imageOptimization')}</p>

              <p>{t('guitar-los-angeles.routing')}</p>

              <p>{t('guitar-los-angeles.styling')}</p>

              <p>{t('guitar-los-angeles.cart')}</p>

              <p>{t('guitar-los-angeles.hydration')}</p>

              <div className={`${styles.imagenesgrid}  ${styles.proyectocontenedorimagen}`}>
                <Image  className="elemento-animado" src='/imagenes/projects/guitar/iphone-carrito-uno.png' width={1000} height={1000} alt="Proyecto GuitarLA en un Teléfono" quality={100}/>
                <Image  className="elemento-animado" src='/imagenes/projects/guitar/iphone-carrito-dos.png' width={1000} height={1000} alt="Proyecto GuitarLA en un Teléfono" quality={100}/>
              </div>

              <h3>{t('guitar-los-angeles.api')}</h3>

              <p className="font-size-big">{t('guitar-los-angeles.apiDescription')}</p>

              <p>{t('guitar-los-angeles.apiImplementation')}</p>

              <p>{t('guitar-los-angeles.guitarComponent')}</p>

              <p>{t('guitar-los-angeles.dynamicRouting')}</p>

              <p>{t('guitar-los-angeles.blogImplementation')}</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image  className="" src='/imagenes/projects/guitar/macbook-iphone.png' width={1000} height={1000} alt="Proyecto GuitarLA en una MacBook" quality={100}/>
              </div>

              <div className={`${styles.contenedorbotones} elemento-animado`}>
                <Link className={styleBotones.boton} href="https://github.com/CristhianSevilla/GuitarLA" aria-label="External Link" rel="noopener noreferrer" target="_blank">{t('guitar-los-angeles.viewCode')}</Link>
              </div>

              <h3>{t('guitar-los-angeles.backend')}</h3>
              <p>{t('guitar-los-angeles.backendDescription')}</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image  className="elemento-animado" src='/imagenes/projects/guitar/strapi.jpg' width={1000} height={1000} alt="Interfaz de Strapi" quality={100}/>

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

export default GuitarLosAngeles