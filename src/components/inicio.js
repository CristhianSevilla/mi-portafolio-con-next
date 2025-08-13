import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/inicio.module.css";
import styleBotones from "../styles/botones.module.css";
import Link from "next/link";

const Inicio = () => {
  const { t } = useTranslation("common");

  return (
    <section className={styles.home}>
      <div className={styles.home_contenido}>
        <div className={`contenedor-small-2 ${styles.contenedor_contenido}`}>
          <div className={`${styles.home_saludo}`}>
            <p>{t("home.greeting")}</p>
          </div>
          <h1>
            {t("home.name")} <span>{t("home.role")}</span>
          </h1>
        </div>
      </div>
      <div className={`${styles.contenedor_boton}`}>
        <Link href="/proyectos" className={styleBotones.boton}>
          {t("home.myWork")}
        </Link>
      </div>
    </section>
  );
};

export default Inicio;
