import Image from "next/image";
import Link from "next/link";
import styles from "../styles/secciones.module.css";
import styleBotones from "../styles/botones.module.css";

const AcercaDe = () => {

  return (
    <section className={styles.inicio}>
      <div className="contenedor">
        <div className={styles.seccion}>
          <div className={`${styles.contenedortexto}`}>
            <div className="texto elemento-animado">
              <div className="titulo elemento-animado">
                <h2><span>Sobre mí</span></h2>
              </div>
              <p>Soy ingeniero en sistemas computacionales especializado en desarrollo web Front-End</p>

              <p>Soy un autodidacta entusiasta que siempre busca aprender nuevas tecnologías y explorar nuevas habilidades en proyectos emocionantes</p>

              <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
                <Link target="_blank" download="CV Cristhian Sevilla" href="cv.pdf" className={styleBotones.boton}>Descargar CV</Link>
              </div>
            </div>
          </div>

          <div className={`${styles.inicioimagenvertical} elemento-animado`}>
            <Image src='/imagenes/cristhiansevilla.jpg' width={300} height={300} alt="Cristhian Sevilla" quality={100}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
