import Image from "next/image";
import Link from "next/link";
import styles from "../styles/secciones.module.css";
import styleBotones from "../styles/botones.module.css";

const AcercaDe = () => {

  return (
    <section className={`${styles.seccion_backgound} seccion`}>
      <div className="contenedor-small-2">
        <div className={styles.seccion}>
          <div className=" texto elemento-animado">
            <div className="titulo">
              <h2><span>Sobre mí</span></h2>
            </div>
            <p>Ingeniero en sistemas computacionales especializado en desarrollo web. Durante los últimos años, mi principal enfoque ha sido el desarrollo de <span>productos Front-End</span>.</p>

            <p>Me apasiona transformar ideas en experiencias digitales sólidas y escalables.</p>

            <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
              <Link target="_blank" download="CV Cristhian Sevilla" href="cv.pdf" className={styleBotones.boton}>Descargar CV</Link>
            </div>
          </div>
          <div className={`${styles.seccion_img_v} elemento-animado`}>
            <Image src='/imagenes/cristhiansevilla.jpg' width={350} height={350} alt="Cristhian Sevilla" quality={100} priority/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
