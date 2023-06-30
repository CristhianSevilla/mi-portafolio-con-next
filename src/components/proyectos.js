import OtrosProyectos from "@/components/otrosProyectos"
import PROYECTOS from "@/Data"
import styles from "../styles/proyectos.module.css"

const Proyectos = () => {

    return (
        <section className={styles.inicio}>
            <div className="contenedor">
                <div className={`${styles.proyectos_titulo} elemento-animado`}>
                    <h2>Otros <span>Proyectos</span></h2>
                </div>
                <div className={styles.proyectos}>
                    {
                        PROYECTOS.map(proyecto => (
                            proyecto.destacado === false ? (
                                < OtrosProyectos
                                    key={proyecto.id}
                                    proyecto={proyecto}
                                />
                            )

                                : ""
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Proyectos