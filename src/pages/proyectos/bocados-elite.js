import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";

const BocadosElite = () => {

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
      title="Bocados Élite"
      description=""
    >

      <section className={styles.proyectoportafolio}>
        <div className="contenedor-small">
          <div>
            <div className={styles.tituloportafolio}>
              <h1>Bocados Élite</h1>
              <p>Aplicación <span>Web</span></p>
            </div>
            <div className={styles.heroimage}>
              <div className={styles.sombraimagen}>
              </div>
              <Image src='/imagenes/projects/bocados/fondo.jpg' width={1000} height={1000} alt="Proyecto Bocados Élite" quality={100} />
            </div>
          </div>

          <div className="texto">
            <h2>Acerca del proyecto</h2>

            <p className="font-size-big">Quiosco de Comida en Línea con un diseño intuitivo y elegante para hacer que la exploración del menú sea fácil y agradable. Los usuarios pueden personalizar su orden explorando una variedad de platos y filtrando según sus preferencias.</p>

            <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
              <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
              <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone-2.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
            </div>

            <p>Además, se ha simplificado el proceso de pedido para que los usuarios elijan sus platos favoritos y hagan pedidos personalizados en pocos pasos. </p>
          </div>

          <div className={`${styles.imagenesgrid} ${styles.proyectocontenedorimagen}`}>
            <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone-3.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
            <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone-4.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
          </div>

          <div className="texto">
            <p className="font-size-big">El diseño del sitio es adaptable tanto a computadoras de escritorio como a dispositivos móviles, asegurando una experiencia de usuario perfecta en ambos casos.</p>
            <p>Además, incluye una sección donde se muestran todas las órdenes de los clientes y se ofrece la opción de procesar los pagos correspondientes.</p>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/bocados/mac-iphone.png' width={1000} height={1000} alt="Proyecto Bocados Élite Responsive" quality={100} />
            </div>

            <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
              <Link className={styleBotones.boton} href="https://bocados-elite.vercel.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank">Sitio Web Cliente</Link>
              <Link className={styleBotones.boton} href="https://bocados-elite.vercel.app/admin" aria-label="External Link" rel="noopener noreferrer" target="_blank">Sitio Web Admin</Link>
            </div>
          </div>

          <div className={styles.Stackproyecto}>
            <div className="texto">
              <h2>Stack del proyecto</h2>

              <p className="font-size-big">En el Frontend, usé React y Next.js para gestionar la interfaz del cliente. Utilicé Axios para manejar las solicitudes HTTP y cargar datos desde el servidor. Para el diseño visual, empleé Tailwind CSS para crear una interfaz elegante y adaptable.</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image className="elemento-animado" src='/imagenes/projects/bocados/macbook.png' width={1000} height={1000} alt="Proyecto Bocados Élite en una MacBook" quality={100} />
              </div>

              <p>En cuanto a la Base de Datos, opté por Prisma para administrarla. Utilicé PostgreSQL como sistema de almacenamiento para los datos esenciales, como información de pedidos y el menú.</p>

              <p>Para ofrecer notificaciones en tiempo real sobre el estado de los pedidos, implementé React Toastify.</p>

              <div className={`${styles.imagenesgrid}  ${styles.proyectocontenedorimagen}`}>
                <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone-5.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
                <Image className="elemento-animado" src='/imagenes/projects/bocados/iphone-6.png' width={1000} height={1000} alt="Proyecto Bocados Élite en un Teléfono" quality={100} />
              </div>

              <div className={`${styles.contenedorbotones} elemento-animado`}>
                <Link className={styleBotones.boton} href="https://github.com/CristhianSevilla/Bocados-Elite" aria-label="External Link" rel="noopener noreferrer" target="_blank">Ver Código</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BocadosElite