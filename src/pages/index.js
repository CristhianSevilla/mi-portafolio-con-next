import { useEffect, useState } from "react";
import Layout from "@/components/layout"
import Inicio from "@/components/inicio";
import AcercaDe from "@/components/acercaDe";
import BarraRedes from "@/components/barraRedes"
import SeccionProyectos from "@/components/seccionProyectos"
import Contacto from "@/components/contacto"
import Habilidades from "@/components/habilidades";




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
      <Inicio/>
      <AcercaDe />
      <SeccionProyectos />
      <Habilidades />
      <Contacto />
      <BarraRedes />

    </Layout>
  )
}
