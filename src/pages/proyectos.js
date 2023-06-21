import Layout from "@/components/layout"
import styles from "../styles/proyectos.module.css"
import BarraRedes from "@/components/barraRedes"
import ProyectosDestacados from "@/components/proyectosDestacados"

const Proyectos = () => {
    return (
        <>
            <Layout
                title={'Proyectos'}
                description={'Aquí encontraras tecnologías con las que he trabajado y proyectos que han marcado un antes y un después en mi crecimiento profesional'}
            >
                <BarraRedes/>
                <div className={styles.encabezado}>
                    <h1>Proyectos Destacados</h1>
                </div>

                <ProyectosDestacados/>
            </Layout>
        </>
    )
}

export default Proyectos