import Image from "next/image";
import { useTranslation } from 'next-i18next'
import styles from "../styles/habilidades.module.css";
import stylesSeccion from "../styles/secciones.module.css";

const Habilidades = () => {
  const { t } = useTranslation('common')
  
  return (
    <section className={`${stylesSeccion.seccion_backgound_2} seccion`}>
      <div className="contenedor-small-2">
        <div className={`${stylesSeccion.seccion_i}`}>
          <div className={`${styles.habilidades} texto elemento-animado`}>
            <ul>
              <li>
                <Image
                  src="/icons/react.svg"
                  width={45}
                  height={45}
                  alt="React"
                  quality={100}
                />
                <p>ReactJS</p>
              </li>
              <li>
                <Image
                  src="/icons/next.svg"
                  width={45}
                  height={45}
                  alt="NextJS"
                  quality={100}
                />
                <p>NextJS</p>
              </li>
              <li>
                <Image
                  src="/icons/vue.svg"
                  width={45}
                  height={45}
                  alt="NextJS"
                  quality={100}
                />
                <p>VueJS</p>
              </li>
              <li>
                <Image
                  src="/icons/api.svg"
                  width={45}
                  height={45}
                  alt="ApiRest"
                  quality={100}
                />
                <p>ApiRest</p>
              </li>
              <li>
                <Image
                  src="/icons/js.svg"
                  width={45}
                  height={45}
                  alt="JavaScript"
                  quality={100}
                />
                <p>JavaScript</p>
              </li>
              <li>
                <Image
                  src="/icons/html.svg"
                  width={45}
                  height={45}
                  alt="HTML"
                  quality={100}
                />
                <p>HTML</p>
              </li>
              <li>
                <Image
                  src="/icons/css3.svg"
                  width={45}
                  height={45}
                  alt="HTML"
                  quality={100}
                />
                <p>CSS3</p>
              </li>
              <li>
                <Image
                  src="/icons/sass.svg"
                  width={45}
                  height={45}
                  alt="SASS"
                  quality={100}
                />
                <p>SASS</p>
              </li>
              <li>
                <Image
                  src="/icons/tailwindcss.svg"
                  width={45}
                  height={45}
                  alt="HTML"
                  quality={100}
                />
                <p>Tailwind</p>
              </li>
              <li>
                <Image
                  src="/icons/bootstrap.svg"
                  width={45}
                  height={45}
                  alt="HTML"
                  quality={100}
                />
                <p>Bootstrap</p>
              </li>
              <li>
                <Image
                  src="/icons/git.svg"
                  width={45}
                  height={45}
                  alt="GitHub"
                  quality={100}
                />

                <p>Git</p>
              </li>
              <li>
                <Image
                  src="/icons/github.svg"
                  width={45}
                  height={45}
                  alt="GitHub"
                  quality={100}
                />

                <p>GitHub</p>
              </li>
              <li>
                <Image
                  src="/icons/php.svg"
                  width={45}
                  height={45}
                  alt="HTML"
                  quality={100}
                />

                <p>PHP8</p>
              </li>
              <li>
                <Image
                  src="/icons/java.svg"
                  width={45}
                  height={45}
                  alt="Java"
                  quality={100}
                />
                <p>Java</p>
              </li>
            </ul>
          </div>
          <div className="texto elemento-animado">
            <div className="titulo ">
              <h2>
                <span>{t('skills.title')}</span>
              </h2>
            </div>
            <div className={stylesSeccion.contenedor_texto}>
              <p>
                {t('skills.description1')}
              </p>

              <p>
                {t('skills.description2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
