import Image from "next/image";
import Link from "next/link";
import styles from "../styles/acercaDe.module.css";
import styleBotones from "../styles/botones.module.css";

const AcercaDe = () => {

  return (
    <section className={`${styles.acerca_backgound} seccion`}>
      <div className="contenedor-small-2">
        <div className={styles.acerca}>
          <div className=" texto ">
            <div className="titulo">
              <h2><span>Sobre mí</span></h2>
            </div>
            <p>Soy ingeniero en sistemas computacionales especializado en desarrollo web Front-End</p>

            <p>Soy un autodidacta entusiasta que siempre busca aprender nuevas tecnologías y explorar nuevas habilidades en proyectos emocionantes</p>

            <div className={`${styleBotones.contenedorbotones}`}>
              <Link target="_blank" download="CV Cristhian Sevilla" href="cv.pdf" className={styleBotones.boton}>Descargar CV</Link>
            </div>
          </div>
          <div className={`${styles.acerca_img} `}>
            <Image src='/imagenes/cristhiansevilla.jpg' width={350} height={350} alt="Cristhian Sevilla" quality={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
