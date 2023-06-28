import { useEffect, useState } from "react";
import Layout from "@/components/layout"
import styles from "../styles/header.module.css"
import BarraRedes from "@/components/barraRedes"
import Presentacion from "@/components/presentacion"
import SeccionProyectos from "@/components/seccionProyectos"
import Contacto from "@/components/contacto"
import Slider from "@/components/slider";
import stylesI from "../styles/inicio.module.css"


export default function Home() {

  const [elementosAnimados, setElementosAnimados] = useState([]);

  useEffect(() => {
    const elementos = document.querySelectorAll(".elemento-animado");

    const opcionesObservador = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Cambiado a 0.3 para que aparezca al 30%
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
      title={'Inicio'}
      description={'Desarrollador Web. Disfruto crear cosas para la web, me apasiona transformar ideas en experiencias digitales sólidas y escalables.'}
    >

      <BarraRedes />

      <section className={styles.headerinferior}>
        <div className={styles.headertexto}>
          <h1>Hola soy <span>Cristhian</span></h1>
        </div>
      </section>

      <Presentacion />
      
      <SeccionProyectos />

      <Contacto />

    </Layout>
  )
}
