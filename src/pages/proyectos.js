import Layout from "@/components/layout"
import styles from "../styles/proyectos.module.css"
import BarraRedes from "@/components/barraRedes"
import ProyectosDestacados from "@/components/proyectosDestacados"
import OtrosProyectos from "@/components/otrosProyectos"
import PROYECTOS from "@/Data"
import Carousel from '../components/Carousel';
import Slider from "@/components/slider";
import stylesI from "../styles/inicio.module.css"


const Proyectos = () => {

    const proyectos = PROYECTOS.filter(proyecto => proyecto.destacado)

    console.log(proyectos);

    return (
        <>
            <Layout
                title={'Proyectos'}
                description={'Aquí encontraras tecnologías con las que he trabajado y proyectos que han marcado un antes y un después en mi crecimiento profesional'}
            >
                {/* <BarraRedes /> */}
                {/* <div className={styles.encabezado}>
                    <h1>Proyectos Destacados</h1>
                </div> */}

                {/* <main className={`${styles.portafolio}`}>
                    <Carousel proyectos={proyectos.map((proyecto, index) => () => <ProyectosDestacados key={index} proyecto={proyecto} />)} />
                </main> */}

                <Slider />


                {/* <main className={styles.portafolio}>
                    {
                        PROYECTOS.map(proyecto => (
                            proyecto.destacado && (
                                <ProyectosDestacados
                                    key={proyecto.id}
                                    proyecto={proyecto}
                                />
                            )
                        ))
                    }
                </main> */}

                <section className="contenedor-small-2">
                    <div className={`${styles.portafoliotitulos} elemento-animado`}>
                        <h2>Todos los <span>Proyectos</span></h2>
                    </div>
                    <div className={styles.otrosproyectos}>
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