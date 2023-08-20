import { useEffect, useState } from "react";
import Link from "next/link"
import styles from "../styles/secciones.module.css"
import styleBotones from "../styles/botones.module.css"
import Image from "next/image";


const MiTrabajo = () => {

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

    <section className={`${styles.seccion_backgound} seccion`}>
      <div className="contenedor-small-2">
        <div className={styles.seccion}>
          <div className=" texto elemento-animado">
            <div className="titulo">
              <h2><span>Proyectos</span></h2>
            </div>
            <div className={styles.contenedor_texto}>
              <p>He tenido éxito en la creación de proyectos que van desde aplicaciones web simples hasta tiendas en línea y CRMs para gestión de clientes. </p>

              <p>Mis sitios son accesibles y se adaptan a diferentes dispositivos gracias al diseño responsivo.</p>
            </div>

            <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
              <Link href="/proyectos" className={styleBotones.boton}>Ver Proyectos</Link>
            </div>
          </div>
          <div className={`${styles.seccion_img_h} elemento-animado`}>
            <Image src='/imagenes/dev.jpg' width={350} height={350} alt="Web Developer" quality={100} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiTrabajo