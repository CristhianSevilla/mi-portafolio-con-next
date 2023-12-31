import styles from "../styles/sliderInicio.module.css";
import Link from "next/link";
import Image from "next/image";

const SliderProyectos = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button> */}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className={`${styles.slider_background} ${styles.slider_background_bocados} `}
          >
            <div className={`${styles.slider_background_sombra}`}>
              <div className="contenedor ${styles.contenedor_info}">
                <div className={`${styles.info} texto contenedor`}>
                  <div className={styles.slider_texto}>
                    <div className="texto">
                      <h3>Bocados Elite</h3>
                      <p>Desarrollo Fullstack</p>
                      <p className={styles.descripcioncorta}>
                        Quiosco de comida. El diseño elegante y amigable hace
                        que la exploración del menú sea una experiencia
                        agradable y fácil de entender. Implementé un proceso de
                        pedido intuitivo que permite a los usuarios seleccionar
                        sus platos favoritos y personalizar sus órdenes en pocos
                        pasos.
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
                        <Link href="/proyectos/bocados-elite">Leer más</Link>

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
                            <title>Código en GitHub</title>
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
                            <title>Ver Sitio Web</title>
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
        <div className="carousel-item">
          <div
            className={`${styles.slider_background} ${styles.slider_background_guitar} `}
          >
            <div className={`${styles.slider_background_sombra}`}>
              <div className="contenedor ${styles.contenedor_info}">
                <div className={`${styles.info} texto contenedor`}>
                  <div className={styles.slider_texto}>
                    <div className="texto">
                      <h3>Guitar los ángeles</h3>
                      <p>Desarrollo Front-End</p>
                      <p className={styles.descripcioncorta}>
                        Tienda online de guitarras. El carrito de compras hace
                        que sea fácil y conveniente agregar guitarras a un
                        pedido, modificar las selecciones y ver el precio total.
                        También ofrece un blog de consejos para ayudar a mejorar
                        las habilidades de tocar la guitarra.
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
                          Leer más
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
                            <title>Código en GitHub</title>
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
                            <title>Ver Sitio Web</title>
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
        <div className="carousel-item">
          <div
            className={`${styles.slider_background} ${styles.slider_background_barber}`}
          >
            <div className={`${styles.slider_background_sombra}`}>
              <div className="contenedor">
                <div className={`${styles.info} texto contenedor`}>
                  <div className={styles.slider_texto}>
                    <div className="texto">
                      <h3>Barber Club</h3>
                      <p>Desarrollo Full-Stack</p>
                      <p className={styles.descripcioncorta}>
                        Aplicación web para reservar citas. Permite a los
                        clientes registrarse, elegir una fecha y hora, y
                        seleccionar los servicios que deseen. Después de crear
                        la cita, los detalles y el costo total se muestran al
                        cliente. La aplicación también permite a los clientes
                        editar o eliminar citas si es necesario. Los
                        administradores pueden crear, editar o eliminar
                        servicios y ver todas las citas del día en una sola
                        vista o buscar una cita por fecha.
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
                        <Link href="/proyectos/barber-club">Leer más</Link>

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
                            <title>Código en GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </Link>
                        {/* 
                                                <Link href="http://barber-club.domcloud.io/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                                        <title>Ver Sitio Web</title>
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                        <polyline points="15 3 21 3 21 9"></polyline>
                                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </Link> */}
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
        <div className="carousel-item">
          <div
            className={`${styles.slider_background} ${styles.slider_background_trago}`}
          >
            <div className={`${styles.slider_background_sombra}`}>
              <div className="contenedor">
                <div className={`${styles.info} texto contenedor`}>
                  <div className={styles.slider_texto}>
                    <div className="texto">
                      <h3>Trago Trax</h3>
                      <p>Desarrollo Front-End</p>
                      <p className={styles.descripcioncorta}>
                        Sitio web. Facilita la búsqueda de bebidas y cócteles
                        exquisitos mediante una organización por categorías
                        cuidadosamente seleccionadas. Permitiéndote encontrar
                        las recetas de bebidas perfectas que se ajusten a tus
                        preferencias y necesidades individuales.
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
                        <Link href="/proyectos/trago-trax">Leer más</Link>

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
                            <title>Código en GitHub</title>
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
                            <title>Ver Sitio Web</title>
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
        <div className="carousel-item">
          <div
            className={`${styles.slider_background} ${styles.slider_background_crm} `}
          >
            <div className={`${styles.slider_background_sombra}`}>
              <div className="contenedor">
                <div className={`${styles.info} texto contenedor`}>
                  <div className={styles.slider_texto}>
                    <div className="texto">
                      <h3>Client Connect</h3>
                      <p>Desarrollo Front-End</p>
                      <p className={styles.descripcioncorta}>
                        CRM con una funcionalidad completa de CRUD y una
                        conexión HTTP directa a una API. Permite gestionar
                        clientes con facilidad, asegurando que no se dupliquen
                        registros.
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
                        <Link href="/proyectos/client-connect">Leer más</Link>

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
                            <title>Código en GitHub</title>
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
        {/* <div className="carousel-item">
                    <div className={`${styles.slider_background} ${styles.slider_background_criptos}`}>
                        <div className={`${styles.slider_background_sombra}`}>
                            <div className="contenedor">
                                <div className={`${styles.info} texto contenedor`}>
                                    <div className={styles.slider_texto}>
                                        <div className="texto">
                                            <h3>Crypto Check</h3>
                                            <p>Desarrollo Front-End</p>
                                            <p className={styles.descripcioncorta}>Aplicación web que cotiza en tiempo real el precio de las 20 Criptomonedas con más valor o capitalización en el mercado. Para usarla, elige una moneda o divisa y una criptomoneda y haz clic en cotizar</p>
                                            <div className={styles.slider_tecnologias}>
                                                <ul className={styles.tecnologia}>
                                                    <li>Vite</li>
                                                    <li>React</li>
                                                    <li>Api</li>
                                                    <li>Fetch</li>
                                                    <li>JavaScript</li>
                                                    <li>Local-Storage</li>
                                                    <li>Styled-Componets</li>

                                                </ul>
                                            </div>

                                            <div className={styles.slider_enlaces}>
                                                <Link href="/proyectos/crypto-check">Leer más</Link>

                                                <Link href="https://github.com/CristhianSevilla/Criptomonedas" aria-label="GitHub" target="_blank" rel="noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github enlace-icon ">
                                                        <title>Código en GitHub</title>
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                    </svg>
                                                </Link>

                                                <Link href="https://cotiza-criptos-react.netlify.app/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                                        <title>Ver Sitio Web</title>
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                        <polyline points="15 3 21 3 21 9"></polyline>
                                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.slider_img}>
                                        <Link href="/proyectos/crypto-check">
                                            <Image src='/imagenes/projects/criptos/principal.jpg' width={1000} height={1000} alt="Desarrollador Web" quality={100} priority />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SliderProyectos;
