import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";

const GuitarLosAngeles = () => {

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
      title="Guitar Los Angeles"
      description=""
    >

      <section className={styles.proyectoportafolio}>
        <div className="contenedor-small">
          <div>
            <div className={styles.tituloportafolio}>
              <h1>Guitar Los Ángeles</h1>
              <p>Tienda <span>Online</span></p>
            </div>
            <div className={styles.heroimage}>
              <div className={styles.sombraimagen}>
              </div>
              <Image src='/imagenes/projects/guitar/fondo.jpg' width={1000} height={1000} alt="Proyecto GuitarLA" quality={100}/>
            </div>
          </div>

          <div className="texto">
            <h2>Acerca del proyecto</h2>

            <p className="font-size-big">En la página principal se muestran algunas guitarras, información de cursos y algunos posts del blog de consejos para ayudar a los guitarristas a mejorar, aprender nuevos estilos de música y obtener inspiración.</p>

            <p>En la tienda se muestran todas las guitarras con su imágen y descripción. Para ver más detalles y agregar una guitarra al carrito de compras, hay que hacer clic en el botón "ver producto”.</p>

            <p>El blog tiene todos los posts, cada uno con una imagen, la fecha de publicación y su contenido.</p>

          </div>

          <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
            <Image  className="elemento-animado" src='/imagenes/projects/guitar/iphone.png' width={1000} height={1000} alt="Proyecto GuitarLA-blog en un Teléfono" quality={100}/>
            <Image  className="elemento-animado" src='/imagenes/projects/guitar/iphone-2.png' width={1000} height={1000} alt="Proyecto GuitarLA-blog en un Teléfono" quality={100}/>
          </div>

          <div className="texto">
            <h3>¿Cómo funciona el carrito de compras?</h3>
            <p className="font-size-big">Es un carrito de compras intuitivo. Permite a los clientes agregar guitarras y ver los detalles de cada una, como su imagen, precio, cantidad y el total a pagar. También permite editar la cantidad o eliminar un modelo de forma rápida y sencilla, y el total a pagar se actualiza automáticamente.</p>
            <p>Del lado derecho de la pantalla se encuentra un panel con el resumen del pedido y total general a pagar. Cualquier cambio que el cliente haga en el carrito se reflejará automáticamente en la cantidad general de la compra.</p>

            <div className={styles.proyectocontenedorimagen}>
              <Image  className="elemento-animado" src='/imagenes/projects/guitar/macbook.png' width={1000} height={1000} alt="Proyecto GuitarLA-blog en una MacBook" quality={100}/>
            </div>

            <div className={`${styles.contenedorbotones} elemento-animado`}>
              <Link className={styleBotones.boton} href="https://guitar-la-mu.vercel.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank">Ver Sitio Web</Link>
            </div>
          </div>

          <div className={styles.Stackproyecto}>
            <div className="texto">
              <h2>Stack del proyecto</h2>

              <p className="font-size-big">Para el Front-End, usé React y NextJS para crear interfaces rápidas, responsivas e interactivas. Para el Back-End, utilicé Strapi para crear APIs y PostgreSQL para gestionar los datos de forma eficiente y escalable.</p>

              <h3>Mi papel</h3>
              <p>El objetivo del sitio web es brindar una excelente experiencia, para lograrlo utilicé las técnicas y herramientas más recientes en el desarrollo web.</p>

              <p>Cada página del sitio web tiene su propia información meta, que se proporciona a través de los props del componente "Layout Principal" y que son insertados como variables en el HTML del next/head.</p>

              <p>Para garantizar que las imágenes se carguen rápidamente, utilicé <span>next/image</span>, lo que mejora significativamente el performance del sitio web</p>

              <p>Utilicé el modelo de rutas de NextJS y <span>next/link</span> para la navegación entre páginas. Aproveché el pathname del Hook <span>useRouter</span> de Next, para resaltar el link del menú de la página en la que el usuario se encuentra navegando.</p>

              <p>Para darle estilo y personalidad al sitio web utilicé <span>CSS Modules</span>, y creé el archivo _document.js para importar hojas de estilos externas.</p>

              <p>En el carrito de compras utilicé el <span>context</span> de NextJS. Para hacer que el carrito fuera dinámico, utilicé el Hook <span>useState</span> y los array methods de <span>JavaScript</span> (some, map, filter y reduce). Utilicé el Hook <span>useEffect</span> para calcular el total a pagar y utilicé local storage para almacenar la información del carrito. </p>

              <p>Finalmente solucione los problemas de rehidratación de NextJS.</p>

              <div className={`${styles.imagenesgrid}  ${styles.proyectocontenedorimagen}`}>
                <Image  className="elemento-animado" src='/imagenes/projects/guitar/iphone-carrito-uno.png' width={1000} height={1000} alt="Proyecto GuitarLA en un Teléfono" quality={100}/>
                <Image  className="elemento-animado" src='/imagenes/projects/guitar/iphone-carrito-dos.png' width={1000} height={1000} alt="Proyecto GuitarLA en un Teléfono" quality={100}/>
              </div>

              <h3>API</h3>

              <p className="font-size-big">Pensé que la mejor opción era utilizar <span>getStaticProps</span> para consultar la API, ya que la información publicada en el sitio web no necesita cambios constantes.</p>

              <p>Oculte la url de la API utilizando una variable de entorno. Después hice una solicitud de datos (<span>Fetch</span>) a la url. Utilicé la técnica de <span>"destructuring" </span>para acceder directamente a las guitarras en los datos obtenidos. Y retorne las guitarras dentro de los props de la función. </p>

              <p>Para mostrar las guitarras en la tienda, utilicé el componente "Guitarra", este componente se encarga de renderizar una guitarra por cada conjunto de datos que recibe a través de los "props".</p>

              <p>Generé las URLs de las guitarras utilizando el <span>routing dinámico</span> de NextJS con <span>getStaticPaths</span> y <span>getStaticProps</span>.</p>

              <p>Hice lo mismo para crear el blog y sus posts.</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image  className="" src='/imagenes/projects/guitar/macbook-iphone.png' width={1000} height={1000} alt="Proyecto GuitarLA en una MacBook" quality={100}/>
              </div>



              <div className={`${styles.contenedorbotones} elemento-animado`}>
                <Link className={styleBotones.boton} href="https://github.com/CristhianSevilla/GuitarLA" aria-label="External Link" rel="noopener noreferrer" target="_blank">Ver Código</Link>
              </div>

              <h3>Strapi, PostgreSQL y Cloudinary </h3>
              <p>Este proyecto tiene un Back-End, sin embargo, lo he clasificado como un proyecto Front-End, ya que el Back fue creado con un CMS llamado Strapi, que se conecta a una base de datos PostgreSQL y a Cloudinary para almacenar las imágenes en un servidor externo. Debido a esto, el proyecto tiene habilitado el acceso a los <span>End Points</span> de la API.</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image  className="elemento-animado" src='/imagenes/projects/guitar/strapi.jpg' width={1000} height={1000} alt="Interfaz de Strapi" quality={100}/>

              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default GuitarLosAngeles