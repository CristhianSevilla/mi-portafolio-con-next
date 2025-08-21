import Image from "next/image";
import { useTranslation } from "next-i18next";
import styles from "../styles/habilidades.module.css";
import stylesSeccion from "../styles/secciones.module.css";

const Habilidades = () => {
  const { t } = useTranslation("common");

  return (
    <section className={`${stylesSeccion.seccion_backgound} seccion`}>
      <div className="contenedor-small-2">
        <div className={`${stylesSeccion.seccion_i}`}>
          <div className={`${styles.habilidades} texto elemento-animado`}>
            <ul>
              {/* Frontend */}
              <li>
                <Image
                  src="/icons/vue.svg"
                  width={45}
                  height={45}
                  alt="Vue.js"
                  quality={100}
                />
                <p>Vue.js</p>
              </li>
              <li>
                <Image
                  src="/icons/react.svg"
                  width={45}
                  height={45}
                  alt="React"
                  quality={100}
                />
                <p>React</p>
              </li>
              <li>
                <Image
                  src="/icons/next.svg"
                  width={45}
                  height={45}
                  alt="Next.js"
                  quality={100}
                />
                <p>Next.js</p>
              </li>
              <li>
                <Image
                  src="/icons/pinia.svg"
                  width={45}
                  height={45}
                  alt="Pinia"
                  quality={100}
                  style={{ width: "2rem", height: "auto" }}
                />
                <p>Pinia</p>
              </li>

              <li>
                <Image
                  src="/icons/tailwindcss.svg"
                  width={45}
                  height={45}
                  alt="Tailwind CSS"
                  quality={100}
                />
                <p>Tailwind</p>
              </li>
              <li>
                <Image
                  src="/icons/vuetify.svg"
                  width={45}
                  height={45}
                  alt="Vuetify"
                  quality={100}
                />
                <p>Vuetify</p>
              </li>
              <li>
                <Image
                  src="/icons/bootstrap.svg"
                  width={45}
                  height={45}
                  alt="Bootstrap"
                  quality={100}
                />
                <p>Bootstrap</p>
              </li>
              <li>
                <Image
                  src="/icons/js.svg"
                  width={45}
                  height={45}
                  alt="JavaScript"
                  quality={100}
                />
                <p>Java Script</p>
              </li>

              {/* Backend */}
              <li>
                <Image
                  src="/icons/java.svg"
                  width={45}
                  height={45}
                  alt="Java"
                  quality={100}
                  style={{ width: "2.6rem", height: "auto" }}
                />
                <p>Java</p>
              </li>
              <li>
                <Image
                  src="/icons/spring-batch.svg"
                  width={45}
                  height={45}
                  alt="Spring"
                  quality={100}
                />
                <p>Spring Batch</p>
              </li>
              <li>
                <Image
                  src="/icons/sql-server.svg"
                  width={45}
                  height={45}
                  alt="SQL Server"
                  quality={100}
                />
                <p>SQL Server</p>
              </li>

              {/* Cloud / Architecture */}
              {/* <li>
                <Image
                  src="/icons/aws.svg"
                  width={45}
                  height={45}
                  alt="AWS"
                  quality={100}
                />
                <p>AWS</p>
              </li> */}
              <li>
                <Image
                  src="/icons/api.svg"
                  width={45}
                  height={45}
                  alt="REST APIs"
                  quality={100}
                />
                <p>REST APIs</p>
              </li>
              {/* Testing / Tools */}
              <li>
                <Image
                  src="/icons/jest.svg"
                  width={45}
                  height={45}
                  alt="Jest"
                  quality={100}
                />
                <p>Jest</p>
              </li>
              <li>
                <Image
                  src="/icons/git.svg"
                  width={45}
                  height={45}
                  alt="Git"
                  quality={100}
                />
                <p>Git</p>
              </li>

              <li>
                <Image
                  src="/icons/jira.svg"
                  width={45}
                  height={45}
                  alt="Jira"
                  quality={100}
                />
                <p>Jira</p>
              </li>
              <li>
                <Image
                  src="/icons/postman.svg"
                  width={45}
                  height={45}
                  alt="Postman"
                  quality={100}
                />
                <p>Postman</p>
              </li>
            </ul>
          </div>
          <div className="texto elemento-animado">
            <div className="titulo ">
              <h2>
                <span>{t("skills.title")}</span>
              </h2>
            </div>
            <div className={stylesSeccion.contenedor_texto}>
              <p>{t("skills.description1")}</p>

              <p>{t("skills.description2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
