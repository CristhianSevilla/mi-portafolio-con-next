import Layout from "@/components/layout"
import OtrosProyectos from "@/components/otrosProyectos"
import Slider from "@/components/slider";
import PROYECTOS from "@/Data"
import styles from "../styles/proyectos.module.css"

const Proyectos = () => {

    const proyectos = PROYECTOS.filter(proyecto => proyecto.destacado)

    console.log(proyectos);

    return (
        <>
            <Layout
                title={'Proyectos'}
                description={'Aquí encontraras tecnologías con las que he trabajado y proyectos que han marcado un antes y un después en mi crecimiento profesional'}
            >
                {/* <div className={styles.encabezado}>
                    <h1>Proyectos Destacados</h1>
                </div> */}

                <Slider />

                <section className="contenedor-small-2">
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
                </section>
            </Layout>
        </>
    )
}

export default Proyectos