import Image from "next/image";
import Link from "next/link";
import styles from "../styles/inicio.module.css";
import styleBotones from "../styles/botones.module.css";

const Presentacion = () => {

  return (
    <section className={styles.inicio}>
      <div className="contenedor">
        <div className={styles.seccion}>
          <div className={`${styles.contenedortexto}`}>
            <div className="texto elemento-animado">
              <div className="titulo elemento-animado">
                <h2>Soy <span>desarrollador web</span></h2>
              </div>
              <p>Disfruto crear cosas para la web, me apasiona transformar ideas en experiencias digitales sólidas y escalables.</p>

              <p>Soy un autodidacta entusiasta que siempre busca aprender nuevas tecnologías y explorar nuevas habilidades en proyectos emocionantes.</p>

              <p>Recientemente he trabajado con <span>HTML, CSS, SASS, Tailwind, JavaScript ES6+, React, Next.js, API REST, PHP8, JAVA, MYSQL y GitHub</span></p>

              <div className={`${styleBotones.contenedorbotones} elemento-animado`}>
                <Link download="CV Cristhian Sevilla" href="cv.pdf" className={styleBotones.boton}>Descargar CV</Link>
              </div>
            </div>
          </div>

          <div className={`${styles.inicioimagenvertical} elemento-animado`}>
            <Image src='/imagenes/cristhiansevilla.jpg' width={300} height={300} alt="Cristhian Sevilla" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
