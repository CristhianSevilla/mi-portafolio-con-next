import { useEffect, useState } from "react";
import Link from "next/link"
import styles from "../styles/acercaDe.module.css"
import styleBotones from "../styles/botones.module.css"
import SliderInicio from "./sliderInicio";
import Slider from "./slider";


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
        <div className="seccion">
          <div className="titulo">
            <h2><span>Mi trabajo</span></h2>
            <Slider/>
          </div>
        </div>
      </div>
    </section>

  )
}

export default MiTrabajo