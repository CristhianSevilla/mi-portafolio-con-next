import Image from "next/image";
import Link from "next/link";
import styles from "../styles/acercaDe.module.css";
import styleBotones from "../styles/botones.module.css";

const AcercaDe = () => {

  return (
    <section className={`${styles.seccion_backgound} seccion`}>
      <div className="contenedor-small-2">
        <div className={styles.seccion}>
          <div className=" texto ">
            <div className="titulo">
              <h2><span>Sobre mí</span></h2>
            </div>
            <p>Ingeniero en sistemas computacionales especializado en desarrollo web, autodidacta y entusiasta en busca de nuevos retos y aprendizajes.</p>

            <p>Con experiencia en proyectos que van desde aplicaciones web simples hasta tiendas en línea y CRMs para gestión de clientes. </p>

            <div className={`${styleBotones.contenedorbotones}`}>
              <Link target="_blank" download="CV Cristhian Sevilla" href="cv.pdf" className={styleBotones.boton}>Descargar CV</Link>
            </div>
          </div>
          <div className={`${styles.seccion_img_v} `}>
            <Image src='/imagenes/cristhiansevilla.jpg' width={350} height={350} alt="Cristhian Sevilla" quality={100} priority/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
