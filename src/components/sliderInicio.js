import styles from "../styles/sliderInicio.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const SliderProyectos = () => {
  const { t } = useTranslation('common')
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const projects = [
    {
      key: 'bocados',
      backgroundClass: styles.slider_background_bocados,
      technologies: ['React', 'NextJS', 'Prisma', 'JavaScript', 'API Rest', 'Axios', 'Tailwind', 'PostgreSQL'],
      detailUrl: '/proyectos/bocados-elite',
      githubUrl: 'https://github.com/CristhianSevilla/Bocados-Elite',
      liveUrl: 'https://bocados-elite.vercel.app/',
      image: '/imagenes/projects/bocados/principal.jpeg'
    },
    {
      key: 'guitar',
      backgroundClass: styles.slider_background_guitar,
      technologies: ['React', 'NextJS', 'JavaScript', 'API', 'Fetch', 'PostgreSQL'],
      detailUrl: '/proyectos/guitar-los-angeles',
      githubUrl: 'https://github.com/CristhianSevilla/GuitarLA',
      liveUrl: 'https://guitar-la-mu.vercel.app/',
      image: '/imagenes/projects/guitar/principal.jpeg'
    },
    {
      key: 'barber',
      backgroundClass: styles.slider_background_barber,
      technologies: ['PHP8', 'MVC', 'MySQL', 'JavaScript', 'API-Rest', 'SASS'],
      detailUrl: '/proyectos/barber-club',
      githubUrl: 'https://github.com/CristhianSevilla/barberia-citas',
      image: '/imagenes/projects/barber/principal.jpg'
    },
    {
      key: 'trago',
      backgroundClass: styles.slider_background_trago,
      technologies: ['Vite', 'React', 'Bootstrap', 'Context', 'JavaScript', 'Axios', 'API'],
      detailUrl: '/proyectos/trago-trax',
      githubUrl: 'https://github.com/CristhianSevilla/Trago-Trax',
      liveUrl: 'https://trago-trax.netlify.app/',
      image: '/imagenes/projects/trax/principal.jpeg'
    },
    {
      key: 'crm',
      backgroundClass: styles.slider_background_crm,
      technologies: ['Vite', 'React', 'TailwinCSS', 'React-Router-Dom', 'JavaScript', 'Api-Rest'],
      detailUrl: '/proyectos/client-connect',
      githubUrl: 'https://github.com/CristhianSevilla/CRM-Clientes',
      image: '/imagenes/projects/crm/principal.jpg'
    }
  ]
  
  const totalSlides = projects.length
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  const goToSlide = (index) => setCurrentSlide(index)

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github enlace-icon">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  )

  const ExternalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
  
  return (
    <div className={styles.slider}>
      <div className={styles.indicators}>
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
            aria-current={currentSlide === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className={styles.sliderInner} style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}>
        {projects.map((project) => (
          <div key={project.key} className={styles.slide}>
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
                          <Link href={project.detailUrl}>{t('slider.readMore')}</Link>
                          <Link href={project.githubUrl} aria-label="GitHub" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                            <title>{t('slider.viewCode')}</title>
                          </Link>
                          {project.liveUrl && (
                            <Link href={project.liveUrl} aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                              <ExternalIcon />
                              <title>{t('slider.viewWebsite')}</title>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.slider_img} ${project.key === 'bocados' ? 'imagen_deforme' : ''}`}>
                      <Link href={project.detailUrl}>
                        <Image
                          src={project.image}
                          width={1000}
                          height={1000}
                          alt="Desarrollador Web"
                          quality={100}
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.prevButton} type="button" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className={styles.nextButton} type="button" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>
    </div>
  );
};

export default SliderProyectos;