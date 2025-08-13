import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from 'react';
import Layout from "@/components/layout";
import Inicio from "@/components/inicio";
import AcercaDe from "@/components/acercaDe";
import BarraRedes from "@/components/barraRedes";
import Contacto from "@/components/contacto";
import Habilidades from "@/components/habilidades";
import Experiencia from "@/components/miTrabajo";

// Inline Separador component
const Separador = () => {
  return (
    <div className="seccion separator" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0rem 0',
      padding: '0 2rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #666, transparent)',
        opacity: 0.6
      }}></div>
    </div>
  );
};

// Inline useScrollAnimation hook
const useScrollAnimation = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const elementos = document.querySelectorAll('.elemento-animado');

    const observador = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animado');
            observador.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
      }
    );

    elementos.forEach((elemento) => {
      observador.observe(elemento);
    });

    return () => {
      observador.disconnect();
    };
  }, []);
};

export default function Home() {
  const { t } = useTranslation("common");
  useScrollAnimation();

  return (
    <Layout
      title={"Inicio"}
      description={`${t("about.description1")} ${t("about.description2")}`}
    >
      <Inicio />
      <AcercaDe />
      <Separador />
      <Experiencia />
      <Separador />
      <Habilidades />
      <Separador />
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
