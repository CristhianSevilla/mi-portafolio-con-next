import { useEffect, useState } from "react";
import Layout from "@/components/layout"
import styles from "../styles/header.module.css"
import BarraRedes from "@/components/barraRedes"
import Presentacion from "@/components/presentacion"
import SeccionProyectos from "@/components/seccionProyectos"
import Contacto from "@/components/contacto"
import Habilidades from "@/components/habilidades";
import stylesH from "../styles/header2.module.css"
import Link from "next/link";



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



      <section className={stylesH.headerinferior}>
        <div className={stylesH.headertexto}>
          {/* <div className={`${stylesH.message__bubble} ${stylesH.triangle}`}>
            <p>Hola, Yo soy</p>
          </div> */}
          <h1>Hola soy <span>Cristhian</span></h1>
          <p className={stylesH.profesion}>
            Desarrollador front-end
          </p>
          {/* <div className={`${stylesH.contenedor_botones} elemento-animado`}>
            <Link href="/proyectos" className={stylesH.boton}>Descargar CV</Link>
            <Link href="/proyectos" className={stylesH.boton}>Mi trabajo</Link>
          </div> */}
        </div>
      </section>

      {/* <section className={styles.headerinferior}>
        <div className={styles.headertexto}>
          <div className={`contenedor-small-2`}>
            <div className={`${stylesH.message__bubble} ${stylesH.triangle}`}>
              <p>Hola, Yo soy</p>
            </div>
            <h1>Hola <span>soy Cristhian</span></h1>

            <p className={stylesH.profesion}>{`<`}
              Desarrollador <span>front-end</span>{`/>`}
            </p>
            <div className={`${stylesH.contenedor_botones} elemento-animado`}>
              <Link href="/proyectos" className={stylesH.boton}>Descargar CV</Link>
              <Link href="/proyectos" className={stylesH.boton}>Mi trabajo</Link>
            </div>
          </div>
        </div>
      </section> */}

      <Presentacion />

      <SeccionProyectos />

      <Habilidades />

      <Contacto />

    </Layout>
  )
}
