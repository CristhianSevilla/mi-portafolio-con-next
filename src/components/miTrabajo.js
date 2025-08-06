import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next'
import styles from "../styles/secciones.module.css";
import styleBotones from "../styles/botones.module.css";
import timelineStyles from "../styles/experiencia.module.css";

const Experiencia = () => {
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
        <div className="texto elemento-animado">
          <div className="titulo">
            <h2>
              <span>{t('experience.title')}</span>
            </h2>
          </div>
        </div>
        
        <div className={timelineStyles.timeline}>
          {/* Exos Technology - Backend */}
          <div className={`${timelineStyles.timelineItem} ${timelineStyles.left} elemento-animado`}>
            <div className={timelineStyles.content}>
              <div className={timelineStyles.period}>{t('experience.exos.period')}</div>
              <div className={timelineStyles.company}>{t('experience.exos.company')}</div>
              <div className={timelineStyles.role}>{t('experience.exos.backend.role')}</div>
              <div className={timelineStyles.description}>
                {t('experience.exos.backend.description1')}
              </div>
              <div className={timelineStyles.description}>
                {t('experience.exos.backend.description2')}
              </div>
            </div>
          </div>

          {/* Exos Technology - Frontend */}
          <div className={`${timelineStyles.timelineItem} ${timelineStyles.right} elemento-animado`}>
            <div className={timelineStyles.content}>
              <div className={timelineStyles.period}>{t('experience.exos.period')}</div>
              <div className={timelineStyles.company}>{t('experience.exos.company')}</div>
              <div className={timelineStyles.role}>{t('experience.exos.frontend.role')}</div>
              <div className={timelineStyles.description}>
                {t('experience.exos.frontend.description1')}
              </div>
              <div className={timelineStyles.description}>
                {t('experience.exos.frontend.description2')}
              </div>
              <div className={timelineStyles.description}>
                {t('experience.exos.frontend.description3')}
              </div>
              <div className={timelineStyles.description}>
                {t('experience.exos.frontend.description4')}
              </div>
            </div>
          </div>

          {/* Freelance */}
          <div className={`${timelineStyles.timelineItem} ${timelineStyles.left} elemento-animado`}>
            <div className={timelineStyles.content}>
              <div className={timelineStyles.period}>{t('experience.freelance.period')}</div>
              <div className={timelineStyles.company}>{t('experience.freelance.company')}</div>
              <div className={timelineStyles.role}>{t('experience.freelance.role')}</div>
              <div className={timelineStyles.description}>
                {t('experience.freelance.description1')}
              </div>
              <div className={timelineStyles.description}>
                {t('experience.freelance.description2')}
              </div>
              <div className={timelineStyles.description}>
                {t('experience.freelance.description3')}
              </div>
            </div>
          </div>
        </div>

        <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
          <Link href="/proyectos" className={styleBotones.boton}>
            {t('projects.viewProjects')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
