import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";
import Inicio from "@/components/inicio";
import AcercaDe from "@/components/acercaDe";
import BarraRedes from "@/components/barraRedes";
import Contacto from "@/components/contacto";
import Habilidades from "@/components/habilidades";
import Experiencia from "@/components/miTrabajo";

export default function Home() {
  const { t } = useTranslation("common");
  const [elementosAnimados, setElementosAnimados] = useState([]);

  useEffect(() => {
    const elementos = document.querySelectorAll(".elemento-animado");

    const opcionesObservador = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const callbackObservador = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animado");
          observador.unobserve(entry.target);
        }
      });
    };

    const observador = new IntersectionObserver(
      callbackObservador,
      opcionesObservador
    );

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
      title={"Inicio"}
      description={`${t("about.description1")} ${t("about.description2")}`}
    >
      <Inicio />
      <AcercaDe />
      <Habilidades />
      <Experiencia />
      <Contacto />
      <BarraRedes />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
