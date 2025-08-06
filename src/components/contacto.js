import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next'
import styles from "../styles/secciones.module.css";
import styleBotones from "../styles/botones.module.css";

const Contacto = () => {
  const { t } = useTranslation('common')
  
  return (
    <section className={`${styles.seccion_backgound_2} seccion`}>
      <div className="contenedor-small-2">
        <div className={styles.seccion_i}>
          <div
            className={`${styles.seccion_img} elemento-animado ${styles.imagen_deforme}`}
          >
            <Image
              src="/imagenes/n.jpg"
              width={350}
              height={350}
              alt="Di hola"
              quality={100}
            />
          </div>
          <div className=" texto elemento-animado">
            <div className="titulo">
              <h2>
                <span>{t('contact.title')}</span>
              </h2>
            </div>

            <div className={styles.contenedor_texto}>
              <p>
                {t('contact.description1')}
              </p>

              <p>
                {t('contact.description2')}
              </p>
            </div>

            <div
              className={`${styleBotones.contenedorbotones} elemento-animado`}
            >
              <Link
                href="mailto:crissev17@gmail.com"
                className={styleBotones.boton}
              >
                {t('contact.sayHello')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
