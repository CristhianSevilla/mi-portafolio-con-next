import { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next'
import styles from "../styles/inicio.module.css";
import styleBotones from "../styles/botones.module.css";
import Link from "next/link";
import GreetingTooltip from './GreetingTooltip';

const Inicio = () => {
  const { t } = useTranslation('common')
  
  return (
    <section className={styles.home}>
      <div className={styles.home_contenido}>
        <div className={`contenedor-small-2 ${styles.contenedor_contenido}`}>
          <div className={styles.content_wrapper}>
            <GreetingTooltip />
            <h1>
              {t('home.name')} <span>{t('home.role')}</span>
            </h1>
          </div>
        </div>
      </div>
      <div className={`${styles.contenedor_boton}`}>
        <Link href="/proyectos" className={styleBotones.boton}>
          {t('home.myWork')}
        </Link>
      </div>
      <div 
        className={styles.scroll_indicator} 
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        onTouchStart={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span>⬇</span>
      </div>
    </section>
  );
};

export default Inicio;
