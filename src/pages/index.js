import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout";
import Inicio from "@/components/inicio";
import AcercaDe from "@/components/acercaDe";
import BarraRedes from "@/components/barraRedes";
import Contacto from "@/components/contacto";
import Habilidades from "@/components/habilidades";
import Experiencia from "@/components/miTrabajo";
import Separador from "@/components/separador";

import useScrollAnimation from "@/hooks/useScrollAnimation";

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
