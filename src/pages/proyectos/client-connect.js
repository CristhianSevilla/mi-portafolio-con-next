import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";

const ClientConnect = () => {
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
      title="Client Connect"
      description=""
    >

      <section className={styles.proyectoportafolio}>
        <div className="contenedor-small">
          <div>
            <div className={styles.tituloportafolio}>
              <h1>{t('client-connect.title')}</h1>
              <p><span>{t('client-connect.type')}</span></p>
            </div>
            <div className={styles.heroimage}>
              <div className={styles.sombraimagen}>
              </div>
              <Image src='/imagenes/projects/crm/fondo.jpg' width={1000} height={1000} alt="Proyecto CRM-Clientes en una MacBook" quality={100}/>
            </div>
          </div>
          <div className={styles.descripcionproyectoportafolio}>

            <div className="texto">
              <h2>{t('client-connect.about')}</h2>

              <p className="font-size-big">{t('client-connect.description1')}</p>

              <p>{t('client-connect.description2')}</p>

              <p>{t('client-connect.description3')}</p>

            </div>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/crm/macbook.jpeg' width={1000} height={1000} alt="Proyecto CRM-Clientes en una MacBook" quality={100}/>
            </div>

          </div>
          <div>
            <div className="texto">
              <h2>{t('client-connect.stack')}</h2>

              <p className="font-size-big">{t('client-connect.stackDescription')}</p>

              <h3>{t('client-connect.myRole')}</h3>

              <p>{t('client-connect.myRoleDescription')}</p>

              <p>{t('client-connect.tailwindSetup')}</p>

              <p>{t('client-connect.routing')}</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image className="elemento-animado" src='/imagenes/projects/crm/macbook-2.png' width={1000} height={1000} alt="Proyecto CRM-Clientes en una MacBook" quality={100}/>
              </div>

              <p>{t('client-connect.formHandling')}</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image className="elemento-animado" src='/imagenes/projects/crm/macbook-3.png' width={1000} height={1000} alt="Proyecto CRM-Clientes en una MacBook" quality={100}/>
              </div>

              <h3>{t('client-connect.apiRest')}</h3>

              <p>{t('client-connect.apiSecurity')}</p>

              <p>{t('client-connect.apiQuery')}</p>

              <p>{t('client-connect.apiCreate')}</p>

              <p>{t('client-connect.apiDynamic')}</p>

              <p>{t('client-connect.apiUpdate')}</p>

              <p>{t('client-connect.apiDelete')}</p>

              <p>{t('client-connect.deleteConfirmation')}</p>

              <div className={`${styles.contenedorbotones} elemento-animado`}>
                <Link className={styleBotones.boton} href="https://github.com/CristhianSevilla/CRM-Clientes" aria-label="External Link" rel="noopener noreferrer" target="_blank">{t('client-connect.viewCode')}</Link>
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

export default ClientConnect