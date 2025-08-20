import styles from "../styles/sliderInicio.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const SliderProyectos = () => {
  const { t } = useTranslation('common')
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5
  
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  const goToSlide = (index) => setCurrentSlide(index)
  
  return (
    <div className={styles.slider}>
      <div className={styles.indicators}>
        {Array.from({ length: totalSlides }, (_, index) => (
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
      <div className={styles.sliderInner} style={{ transform: `translateX(-${currentSlide * 20}%)` }}>
        <div className={styles.slide}>
          <div
            className={`${styles.slider_background} ${styles.slider_background_bocados} `}
          >
            <div className={`${styles.slider_background_sombra}`}>
              <div className="contenedor ${styles.contenedor_info}">
                <div className={`${styles.info} texto contenedor`}>
                  <div className={styles.slider_texto}>
                    <div className="texto">
                      <h3>{t('slider.bocados.title')}</h3>
                      <p>{t('slider.bocados.type')}</p>
                      <p className={styles.descripcioncorta}>
                        {t('slider.bocados.description')}
                      </p>
                      <div className={styles.slider_tecnologias}>
                        <ul className={styles.tecnologia}>
                          <li>React</li>
                          <li>NextJS</li>
                          <li>Prisma</li>
                          <li>JavaScript</li>
                          <li>API Rest</li>
                          <li>Axios</li>
                          <li>Tailwind</li>
                          <li>PostgreSQL</li>
                        </ul>
                      </div>

                      <div className={styles.slider_enlaces}>
                        <Link href="/proyectos/bocados-elite">{t('slider.readMore')}</Link>

                        <Link
                          href="https://github.com/CristhianSevilla/Bocados-Elite"
                          aria-label="GitHub"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github enlace-icon "
                          >
                            <title>{t('slider.viewCode')}</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </Link>

                        <Link
                          href="https://bocados-elite.vercel.app/"
                          aria-label="External Link"
                          className="external"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
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
                            <title>{t('slider.viewWebsite')}</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.slider_img}  imagen_deforme`}>
                    <Link href="/proyectos/bocados-elite">
                      <Image
                        src="/imagenes/projects/bocados/principal.jpeg"
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
        <div className={styles.slide}>
          <div
            className={`${styles.slider_background} ${styles.slider_background_guitar} `}
          >
            <div className={`${styles.slider_background_sombra}`}>
              <div className="contenedor ${styles.contenedor_info}">
                <div className={`${styles.info} texto contenedor`}>
                  <div className={styles.slider_texto}>
                    <div className="texto">
                      <h3>{t('slider.guitar.title')}</h3>
                      <p>{t('slider.guitar.type')}</p>
                      <p className={styles.descripcioncorta}>
                        {t('slider.guitar.description')}
                      </p>
                      <div className={styles.slider_tecnologias}>
                        <ul className={styles.tecnologia}>
                          <li>React</li>
                          <li>NextJS</li>
                          <li>JavaScript</li>
                          <li>API</li>
                          <li>Fetch</li>
                          <li>PostgreSQL</li>
                        </ul>
                      </div>

                      <div className={styles.slider_enlaces}>
                        <Link href="/proyectos/guitar-los-angeles">
                          {t('slider.readMore')}
                        </Link>

                        <Link
                          href="https://github.com/CristhianSevilla/GuitarLA"
                          aria-label="GitHub"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github enlace-icon "
                          >
                            <title>{t('slider.viewCode')}</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </Link>

                        <Link
                          href="https://guitar-la-mu.vercel.app/"
                          aria-label="External Link"
                          className="external"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
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
                            <title>{t('slider.viewWebsite')}</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider_img}>
                    <Link href="/proyectos/guitar-los-angeles">
                      <Image
                        src="/imagenes/projects/guitar/principal.jpeg"
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
        <div className={styles.slide}>
          <div
            className={`${styles.slider_background} ${styles.slider_background_barber}`}
          >
            <div className={`${styles.slider_background_sombra}`}>
              <div className="contenedor">
                <div className={`${styles.info} texto contenedor`}>
                  <div className={styles.slider_texto}>
                    <div className="texto">
                      <h3>{t('slider.barber.title')}</h3>
                      <p>{t('slider.barber.type')}</p>
                      <p className={styles.descripcioncorta}>
                        {t('slider.barber.description')}
                      </p>
                      <div className={styles.slider_tecnologias}>
                        <ul className={styles.tecnologia}>
                          <li>PHP8</li>
                          <li>MVC</li>
                          <li>MySQL</li>
                          <li>JavaScript</li>
                          <li>API-Rest</li>
                          <li>SASS</li>
                        </ul>
                      </div>

                      <div className={styles.slider_enlaces}>
                        <Link href="/proyectos/barber-club">{t('slider.readMore')}</Link>

                        <Link
                          href="https://github.com/CristhianSevilla/barberia-citas"
                          aria-label="GitHub"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github enlace-icon "
                          >
                            <title>{t('slider.viewCode')}</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider_img}>
                    <Link href="/proyectos/barber-club">
                      <Image
                        src="/imagenes/projects/barber/principal.jpg"
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
        <div className={styles.slide}>
          <div
            className={`${styles.slider_background} ${styles.slider_background_trago}`}
          >
            <div className={`${styles.slider_background_sombra}`}>
              <div className="contenedor">
                <div className={`${styles.info} texto contenedor`}>
                  <div className={styles.slider_texto}>
                    <div className="texto">
                      <h3>{t('slider.trago.title')}</h3>
                      <p>{t('slider.trago.type')}</p>
                      <p className={styles.descripcioncorta}>
                        {t('slider.trago.description')}
                      </p>
                      <div className={styles.slider_tecnologias}>
                        <ul className={styles.tecnologia}>
                          <li>Vite</li>
                          <li>React</li>
                          <li>Bootstrap</li>
                          <li>Context</li>
                          <li>JavaScript</li>
                          <li>Axios</li>
                          <li>API</li>
                        </ul>
                      </div>

                      <div className={styles.slider_enlaces}>
                        <Link href="/proyectos/trago-trax">{t('slider.readMore')}</Link>

                        <Link
                          href="https://github.com/CristhianSevilla/Trago-Trax"
                          aria-label="GitHub"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github enlace-icon "
                          >
                            <title>{t('slider.viewCode')}</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </Link>

                        <Link
                          href="https://trago-trax.netlify.app/"
                          aria-label="External Link"
                          className="external"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
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
                            <title>{t('slider.viewWebsite')}</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider_img}>
                    <Link href="/proyectos/trago-trax">
                      <Image
                        src="/imagenes/projects/trax/principal.jpeg"
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
        <div className={styles.slide}>
          <div
            className={`${styles.slider_background} ${styles.slider_background_crm} `}
          >
            <div className={`${styles.slider_background_sombra}`}>
              <div className="contenedor">
                <div className={`${styles.info} texto contenedor`}>
                  <div className={styles.slider_texto}>
                    <div className="texto">
                      <h3>{t('slider.crm.title')}</h3>
                      <p>{t('slider.crm.type')}</p>
                      <p className={styles.descripcioncorta}>
                        {t('slider.crm.description')}
                      </p>
                      <div className={styles.slider_tecnologias}>
                        <ul className={styles.tecnologia}>
                          <li>Vite</li>
                          <li>React</li>
                          <li>TailwinCSS</li>
                          <li>React-Router-Dom</li>
                          <li>JavaScript</li>
                          <li>Api-Rest</li>
                        </ul>
                      </div>

                      <div className={styles.slider_enlaces}>
                        <Link href="/proyectos/client-connect">{t('slider.readMore')}</Link>

                        <Link
                          href="https://github.com/CristhianSevilla/CRM-Clientes"
                          aria-label="GitHub"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github enlace-icon "
                          >
                            <title>{t('slider.viewCode')}</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider_img}>
                    <Link href="/proyectos/client-connect">
                      <Image
                        src="/imagenes/projects/crm/principal.jpg"
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
      </div>
      <button
        className={styles.prevButton}
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className={styles.nextButton}
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
};

export default SliderProyectos;