import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next'
import styles from "../styles/secciones.module.css";
import styleBotones from "../styles/botones.module.css";
import Image from "next/image";

const MiTrabajo = () => {
  const { t } = useTranslation('common')
  const [elementosAnimados, setElementosAnimados] = useState([]);

  useEffect(() => {
    const elementos = document.querySelectorAll(".elemento-animado");

    const opcionesObservador = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25, // Cambiado a 0.25 para que aparezca al 25%
    };

    const callbackObservador = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animado");
          observador.unobserve(entry.target);
        }
      });
    };

    const observador = new IntersectionObserver(
      callbackObservador,
      opcionesObservador
    );

    elementos.forEach((elemento) => {
      observador.observe(elemento);
    });

    setElementosAnimados(elementos);

    return () => {
      observador.disconnect();
    };
  }, []);

  return (
    <section className={`${styles.seccion_backgound} seccion`}>
      <div className="contenedor-small-2">
        <div className={styles.seccion}>
          <div className=" texto elemento-animado">
            <div className="titulo">
              <h2>
                <span>{t('projects.title')}</span>
              </h2>
            </div>
            <div className={styles.contenedor_texto}>
              <p>
                {t('projects.description1')}
              </p>

              <p>
                {t('projects.description2')}
              </p>
            </div>

            <div
              className={`${styleBotones.contenedorbotones} elemento-animado`}
            >
              <Link href="/proyectos" className={styleBotones.boton}>
                {t('projects.viewProjects')}
              </Link>
            </div>
          </div>
          <div
            className={`${styles.seccion_img} elemento-animado ${styles.imagen_deforme}`}
          >
            <Image
              src="/imagenes/1.jpg"
              width={350}
              height={350}
              alt="Web Developer"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiTrabajo;
