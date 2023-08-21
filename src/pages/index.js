import { useEffect, useState } from "react";
import Layout from "@/components/layout"
import Inicio from "@/components/inicio";
import AcercaDe from "@/components/acercaDe";
import BarraRedes from "@/components/barraRedes"
import Contacto from "@/components/contacto"
import Habilidades from "@/components/habilidades";
import MiTrabajo from "@/components/miTrabajo";




export default function Home() {

  const [elementosAnimados, setElementosAnimados] = useState([]);

  useEffect(() => {
    const elementos = document.querySelectorAll(".elemento-animado");

    const opcionesObservador = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25, // Cambiado a 0.25 para que aparezca al 25%
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
      description={'Ingeniero en sistemas computacionales especializado en desarrollo web. Durante los últimos años, mi principal enfoque ha sido el desarrollo de productos Front-End. Me apasiona transformar ideas en experiencias digitales sólidas y escalables.'}
    >
      <Inicio />
      <AcercaDe />
      <Habilidades />
      <MiTrabajo/>
      <Contacto />
      <BarraRedes />
    </Layout>
  )
}
