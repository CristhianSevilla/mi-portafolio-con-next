import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/inicio.module.css"
import styleBotones from "../styles/botones.module.css"

const SeccionProyectos = () => {

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

        <main className={styles.seccion_proyectos}>
            <div className={`${styles.seccion_proyectos_background} texto`}>
                <div className={`contenedor`}>
                    <div className={styles.seccioninvertida}>
                        <div className={`${styles.inicioimagen}`}>
                            <Image src='/imagenes/dev.jpg' width={300} height={300} alt="Desarrollador Web" quality={100} />
                        </div>

                        <div className={`${styles.contenedortexto} elemento-animado`}>
                            <div className="texto">
                                <div className="titulo elemento-animado">
                                    <h2>Mis <span>Proyectos</span></h2>
                                </div>
                                <p>Tengo experiencia creando productos <span>Front-end</span> y <span>Back-end</span>, lo que me da una visión completa del proceso de creación de productos digitales. </p>
                                <p>He desarrollado varios tipos de proyectos con éxito, desde cosas simples como aplicaciones web para manejar gastos, hasta cosas más complicadas como tiendas en línea y CRMs para administrar relaciones con clientes.</p>

                                <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
                                    <Link href="/proyectos" className={styleBotones.boton}>Ver proyectos</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default SeccionProyectos