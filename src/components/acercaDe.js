import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import styles from "../styles/secciones.module.css";
import styleBotones from "../styles/botones.module.css";

const AcercaDe = () => {
  const { t } = useTranslation("common");

  return (
    <section className={`${styles.seccion_backgound} seccion`}>
      <div className="contenedor-small-2">
        <div className={styles.seccion}>
          <div className=" texto elemento-animado">
            <div className="titulo">
              <h2>
                <span>{t("about.title")}</span>
              </h2>
            </div>
            <div className={styles.contenedor_texto}>
              <p>{t("about.description1")}</p>
              <p>{t("about.description2")}</p>
            </div>

            <div
              className={`${styleBotones.contenedorbotones} elemento-animado`}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                download="CV Cristhian Sevilla"
                href="cv.pdf"
                className={styleBotones.boton}
              >
                {t("about.downloadCV")}
              </Link>
            </div>
          </div>
          <div
            className={`${styles.seccion_img} elemento-animado ${styles.imagen_deforme}`}
          >
            <Image
              src="/imagenes/cristhiansevilla.jpg"
              width={350}
              height={350}
              alt="Cristhian Sevilla"
              quality={100}
              priority
              className={styles.responsive_image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
