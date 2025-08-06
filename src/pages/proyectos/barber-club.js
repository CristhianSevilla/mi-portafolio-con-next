import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";

const BarberClub = () => {
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
      title="Barber Club"
      description=""
    >
      <section className={styles.proyectoportafolio}>
        <div className="contenedor-small">
          <div>
            <div className={styles.tituloportafolio}>
              <h1>{t('barber-club.title')}</h1>
              <p>{t('barber-club.type')}</p>
            </div>
            <div className={styles.heroimage}>
              <div className={styles.sombraimagen}>
              </div>
              <Image src='/imagenes/projects/barber/fondo.jpg' width={1000} height={1000} alt="Barber Club" quality={100}/>
            </div>
          </div>

          <div>
            <div className="texto">
              <h2>{t('barber-club.about')}</h2>

              <p className="font-size-big">{t('barber-club.description1')}</p>
              <p>{t('barber-club.description2')}</p>
              <p>{t('barber-club.description3')}</p>
            </div>
            <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
              <Image className="elemento-animado" src='/imagenes/projects/barber/iphone-1.png' width={1000} height={1000} alt="Proyecto Barber Club en un teléfono" quality={100}/>
              <Image className="elemento-animado" src='/imagenes/projects/barber/iphone-2.png' width={1000} height={1000} alt="Proyecto Barber Club en un teléfono" quality={100}/>

            </div>
            <div className="texto">
              <p className="font-size-big">{t('barber-club.description4')}</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image className="elemento-animado" src='/imagenes/projects/barber/mac-iphone.png' width={1000} height={1000} alt="Proyecto Barber Club  en una MacBook y Iphone" quality={100}/>
              </div>
            </div>
          </div>

          <div className="texto">
            <h2>{t('barber-club.stack')}</h2>

            <p>{t('barber-club.stackDescription')}</p>

            <h3>{t('barber-club.myRole')}</h3>
            <p>{t('barber-club.myRoleDescription')}</p>

            <p>{t('barber-club.apiConnection')}</p>

            <p>{t('barber-club.optimization')}</p>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/barber/mac-iphone-2.png' width={1000} height={1000} alt="Proyecto Barber Club en una MacBook y Iphone" quality={100}/>

            </div>

            <p>{t('barber-club.backend')}</p>

            <p>{t('barber-club.features')}</p>

            <p>{t('barber-club.database')}</p>

            <p>{t('barber-club.testing')}</p>

            <p><span>{t('barber-club.note')}</span></p>

            <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
              <Image className="elemento-animado" src='/imagenes/projects/barber/iphone-3.png' width={1000} height={1000} alt="Proyecto Barber Club en un teléfono" quality={100}/>
              <Image className="elemento-animado" src='/imagenes/projects/barber/iphone-4.png' width={1000} height={1000} alt="Proyecto Barber Club en un teléfono" quality={100}/>

            </div>

            <div className={`${styles.contenedorbotones} elemento-animado`}>
              <Link href="https://github.com/CristhianSevilla/barberia-citas" target="_blank" className={styleBotones.boton}>{t('barber-club.viewCode')}</Link>
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

export default BarberClub