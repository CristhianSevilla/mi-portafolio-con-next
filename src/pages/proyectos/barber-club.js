import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";

const BarberClub = () => {


  const [elementosAnimados, setElementosAnimados] = useState([]);

  useEffect(() => {
    const elementos = document.querySelectorAll(".elemento-animado");

    const opcionesObservador = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Cambiado a 0.5 para que aparezca al 50%
    };

    const callbackObservador = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animado");
          observador.unobserve(entry.target);
        }
      });
    };

    const observador = new IntersectionObserver(callbackObservador, opcionesObservador);

    elementos.forEach((elemento) => {
      observador.observe(elemento);
    });

    setElementosAnimados(elementos);

    return () => {
      observador.disconnect();
    };
  }, []);

  return (
    <Layout
      title="Barber Club"
      description=""
    >
      <section className={styles.proyectoportafolio}>
        <div className="contenedor-small">
          <div>
            <div className={styles.tituloportafolio}>
              <h1>Barber Shop V&M</h1>
              <p>Aplicación <span>web</span></p>
            </div>
            <div className={styles.heroimage}>
              <div className={styles.sombraimagen}>
              </div>
              <Image src='/imagenes/projects/barber/fondo.jpg' width={1000} height={1000} alt="Barber Club" quality={100}/>
            </div>
          </div>

          <div>
            <div className="texto">
              <h2>Acerca del proyecto</h2>

              <p className="font-size-big">Tiene una interfaz fácil de usar que hace que el proceso sea fácil, rápido y sin esfuerzo. En la app web se puede reservar una cita desde cualquier lugar y en cualquier momento.</p>
              <p>Simplemente el cliente se registra con su correo electrónico y con solo unos clics, puede elegir el día, la hora y los servicios que más le convengan. Y si en algún momento olvida su contraseña, puede restablecerla fácilmente.</p>
              <p>Una vez que el cliente haya reservado su cita, tendrá acceso a un resumen detallado que incluye la fecha, hora, servicios y el total a pagar. Y si cambia de opinión o necesita ajustar la hora o los servicios, puede editar o eliminar la cita en cualquier momento, justo como si estuviera en un carrito de compras.</p>
            </div>
            <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
              <Image className="elemento-animado" src='/imagenes/projects/barber/iphone-1.png' width={1000} height={1000} alt="Proyecto Barber Club en un teléfono" quality={100}/>
              <Image className="elemento-animado" src='/imagenes/projects/barber/iphone-2.png' width={1000} height={1000} alt="Proyecto Barber Club en un teléfono" quality={100}/>

            </div>
            <div className="texto">
              <p className="font-size-big">Los administradores de la aplicación pueden acceder a todas las citas del día, pero también tiene la opción de buscar citas por fechas específicas y si necesitan añadir un nuevo servicio, eliminar o modificar uno existente lo pueden hacer fácilmente.</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image className="elemento-animado" src='/imagenes/projects/barber/mac-iphone.png' width={1000} height={1000} alt="Proyecto Barber Club  en una MacBook y Iphone" quality={100}/>
              </div>
            </div>
          </div>

          <div className="texto">
            <h2>Stack del proyecto</h2>

            <p>Este proyecto usa tecnología avanzada para mejorar la experiencia del usuario. La aplicación web utiliza el patrón Modelo-Vista-Controlador (<span>MVC</span>) para que sea más fácil de desarrollar y mantener. Además, el lenguaje de programación <span>PHP 8</span> se usa para que la gestión de datos sea más segura y rápida. La interfaz de usuario está creada con <span>HTML 5</span>, <span>CSS 3</span> con <span>SASS</span> y <span>JavaScript</span>, para que sea visualmente atractiva e interactiva. La base de datos que se utiliza es <span>MySQL</span> para que sea segura y eficiente en la gestión de datos.
            </p>

            <h3>Mi papel</h3>
            <p>
              Para hacer una aplicación web que funcione bien en diferentes dispositivos, utilicé tecnologías de maquetación modernas como <span>Flexbox</span> y <span>Grid</span>, También usé JavaScript para hacer la aplicación más interactiva, con un paginador, fechas en un formato legible y alertas. </p>

            <p>Para mantener la aplicación actualizada, usé <span>Fetch</span> y <span>Async Await</span> para conectarme a una API y obtener información.</p>

            <p>Además, utilicé <span>Gulp</span> para comprimir y optimizar las imágenes y para compilar y organizar los archivos de estilo y javascript.</p>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/barber/mac-iphone-2.png' width={1000} height={1000} alt="Proyecto Barber Club en una MacBook y Iphone" quality={100}/>

            </div>

            <p>Utilicé <span>PHP8</span> para programar la estructura de la página web, incluyendo las funciones para crear, leer, actualizar y eliminar servicios y citas. También agregué medidas de seguridad, como autenticación de usuarios y validación de formularios, para proteger la página y la base de datos de inyecciones de código malicioso.</p>

            <p>Además, usé PHP8 para crear los end points de la API, implementar funciones de hasheo de contraseñas, enviar correos electrónicos de confirmación y restablecer contraseñas, y calcular el costo de cada cita.</p>

            <p>Para la base de datos, utilicé <span>MySQL</span> y configuré restricciones de integridad referencial para garantizar la precisión de los datos. También diseñé una consulta JOIN para extraer y visualizar de forma clara la información necesaria sobre cada cita.</p>

            <p>Finalmente, realicé pruebas utilizando <span>Cypress</span> para identificar y solucionar posibles problemas en las rutas, elementos HTML, estilos CSS, alertas, mensajes y errores que podrían surgir durante el proceso.</p>

            <p><span>Nota:</span> Si desea ver la funcionalidad de confirmar cuenta o resetear la contraseña póngase en contacto conmigo para otorgarle acceso a la cuenta de MailTrap.</p>

            <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
              <Image className="elemento-animado" src='/imagenes/projects/barber/iphone-3.png' width={1000} height={1000} alt="Proyecto Barber Club en un teléfono" quality={100}/>
              <Image className="elemento-animado" src='/imagenes/projects/barber/iphone-4.png' width={1000} height={1000} alt="Proyecto Barber Club en un teléfono" quality={100}/>

            </div>

            <div className={`${styles.contenedorbotones} elemento-animado`}>
              <Link href="https://github.com/CristhianSevilla/barberia-citas" target="_blank" className={styleBotones.boton}>Ver código</Link>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BarberClub