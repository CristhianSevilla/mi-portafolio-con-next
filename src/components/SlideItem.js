import styles from "../styles/sliderInicio.module.css";
import Link from "next/link";
import Image from "next/image";

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-github enlace-icon"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-external-link"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const SlideItem = ({ project, t, isActive }) => {
  return (
    <div className={styles.slide}>
      <div className={`${styles.slider_background} ${project.backgroundClass}`}>
        <div className={styles.slider_background_sombra}>
          <div className="contenedor">
            <div className={`${styles.info} texto contenedor`}>
              <div className={styles.slider_texto}>
                <div className="texto">
                  <h3>{t(`slider.${project.key}.title`)}</h3>
                  <p>{t(`slider.${project.key}.type`)}</p>

                  <p className={styles.descripcioncorta}>
                    {t(`slider.${project.key}.description`)}
                  </p>
                  <div className={styles.slider_tecnologias}>
                    <ul className={styles.tecnologia}>
                      {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.slider_enlaces}>
                    <Link href={project.detailUrl}>{t("slider.readMore")}</Link>
                    <Link
                      href={project.githubUrl}
                      aria-label="GitHub"
                      target="_blank"
                      rel="noreferrer"
                      title={t("slider.viewCode")}
                    >
                      <GitHubIcon />
                    </Link>
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        aria-label="External Link"
                        className="external"
                        rel="noopener noreferrer"
                        target="_blank"
                        title={t("slider.viewWebsite")}
                      >
                        <ExternalIcon />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`${styles.slider_img} ${project.imageClass || ""}`}
              >
                <Link href={project.detailUrl}>
                  <Image
                    src={project.image}
                    width={1000}
                    height={1000}
                    alt={
                      t(`slider.${project.key}.imageAlt`) ||
                      `${t(`slider.${project.key}.title`)} project screenshot`
                    }
                    quality={100}
                    priority={isActive}
                    loading={isActive ? "eager" : "lazy"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
