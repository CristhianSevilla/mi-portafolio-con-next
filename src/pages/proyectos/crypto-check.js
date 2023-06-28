import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";

const CryptoCheck = () => {

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
      title="Crypto Check"
      description=""
    >
      <section className={styles.proyectoportafolio}>
        <div className="contenedor-small">
          <div>
            <div className={styles.tituloportafolio}>
              <h1>Cotiza Criptos</h1>
              <p>Aplicación <span>Web</span></p>
            </div>
            <div className={styles.heroimage}>
              <div className={styles.sombraimagen}>
              </div>
              <Image src='/imagenes/projects/criptos/fondo.jpg' width={1000} height={1000} alt="Proyecto Crypto Check" quality={100}/>
            </div>
          </div>
          <div className="texto">
            <h2>Acerca del proyecto</h2>
            <p className="font-size-big">Es una aplicación web que cotiza en tiempo real el precio de las 20 Criptomonedas con más valor o capitalización en el mercado.</p>
            <p>Para usarla, elige una moneda o divisa y una criptomoneda y haz clic en cotizar. La aplicación mostrará el precio de la criptomoneda en la moneda elegida, junto con su imagen, el precio más alto y más bajo del día, su variación en las últimas 24 horas y la última actualización de los datos de la criptomoneda. También se pueden cotizar otras criptomonedas simplemente cambiando los datos.</p>
          </div>
          <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
            <Image className="elemento-animado" src='/imagenes/projects/criptos/iphone-1.png' width={1000} height={1000} alt="Proyecto Crypto Check en un teléfono" quality={100}/>
            <Image className="elemento-animado" src='/imagenes/projects/criptos/iphone-2.png' width={1000} height={1000} alt="Proyecto Crypto Check en un teléfono" quality={100}/>
          </div>
          <div className={`${styles.contenedorbotones} elemento-animado`}>
            <Link className={styleBotones.boton} href="https://cotiza-criptos-react.netlify.app" aria-label="External Link" rel="noopener noreferrer" target="_blank">Ver Sitio Web</Link>
          </div>
          <div className="texto">
            <h2>Stack del proyecto</h2>
            <p>Para crear una experiencia de usuario rápida y altamente interactiva, he seleccionado cuidadosamente las tecnologías adecuadas para este proyecto. Utilicé React, una de las herramientas más populares para construir interfaces de usuario eficientes. Además, utilicé Vite para construir la aplicación de forma rápida, y Fetch para consultar la API de manera fácil y segura.</p>

            <h2>Mi papel</h2>

            <p>Creé la página web desde cero usando <span>Vite</span> y <span>React</span> para que cargue rápido y sea fácil de usar. También añadí fuentes de Google Fonts y trabajé con Styled Components para escribir el código de CSS. Usé <span>Flexbox</span> y <span>Grid</span> para que la página se vea bien en diferentes tamaños de pantalla y sea más profesional y atractiva para los visitantes.</p>

            <p>Creé un componente para el formulario y programé un <span>custom Hook reutilizable</span>. El "Hook" recibe un array de opciones, ya sea de divisas o criptomonedas y las asigna a un "selected" dentro de una función <span>"map"</span>. Finalmente, utilicé <span>"useState"</span> mostrar estas opciones en el formulario.
            </p>

            <p>Hay dos listas que se deben llenar: una con nombres de divisas y otra con nombres de criptomonedas. La lista de divisas se llena con información de un archivo local, mientras que la lista de criptomonedas se llena con información de una API de Cripto Compare.</p>

            <p>Para asegurarme de que se ha elegido una moneda y una criptomoneda en el formulario, utilicé el array method <span>"includes"</span>. También hice un componente llamado "error", que muestra una alerta personalizada para validar el formulario en tiempo real.</p>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/criptos/mac-iphone.png' width={1000} height={1000} alt="Proyecto Crypto Check en una MacBook" quality={100}/>
            </div>

            <p>Si no hay un error, se consulta la API y se pasa el <span>state</span> llamado "resultado" al componente "Resultado". Para acceder fácilmente a los datos de la criptomoneda, utilicé la técnica de <span>"destructuring"</span>.</p>

            <p>Finalmente, el componente Resultado retorna un <span>fragmet</span> con los datos de la criptomoneda.</p>

            <p>Las imágenes de las criptomonedas se almacenan en el servidor de Cripto Compare. Para mostrarla, simplemente agregué los datos de la imagen al final de la url de Cripto Compare.</p>


            <h3>API</h3>

            <p>Cuando se abre la Aplicación, la API se consulta una vez para llenar el array de criptomonedas. Pero para ver la información actualizada de las criptomonedas, la API se consulta cada vez que se oprime el botón "cotizar".</p>

            <h3>¿Cómo consulté la API?</h3>

            <p>Para llenar el array de criptomonedas, utilicé una URL que trae las primeras 20 criptomonedas de la API. Usando la función <span>"fetch"</span>, obtuve los datos de la URL. Luego convertí la respuesta en un objeto <span>JSON</span> y usé la función "map" para crear un nuevo array con los datos. Finalmente, actualicé el state de las criptomonedas con este nuevo array. Hice todo esto en una <span>función asíncrona</span> dentro de un <span>"useEffect"</span>. </p>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/criptos/1.jpg' width={1000} height={1000} alt="Código" quality={100}/>
            </div>

            <p>Para obtener información actualizada sobre una criptomoneda, utilicé el Hook <span>useEffect</span> para monitorear cambios en el estado de las monedas. Si hay datos disponibles en el state, entonces en un <span>arrow function async</span> aplico destructuring al objeto del state, extraigo la divisa y la criptomoneda seleccionada por el usuario y las <span>inyecto</span> como <span>variables</span> en la url de la API para construir una URL dinámica. Después, hago una solicitud fetch a la URL y asigno la respuesta en formato JSON al state del resultado.</p>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/criptos/2.jpg' width={1000} height={1000} alt="Código" quality={100}/>
            </div>

            <div className={`${styles.contenedorbotones} elemento-animado`}>
              <Link className={styleBotones.boton} href="https://github.com/CristhianSevilla/Criptomonedas" aria-label="External Link" rel="noopener noreferrer" target="_blank">Ver Código</Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default CryptoCheck