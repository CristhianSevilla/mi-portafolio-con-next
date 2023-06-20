import Layout from "@/components/layout"
import styles from "../styles/proyectos.module.css"
import BarraRedes from "@/components/barraRedes"

const Proyectos = () => {
    return (
        <>
            <Layout
                title={'Inicio'}
                description={'Desarrollador Web. Disfruto crear cosas para la web, me apasiona transformar ideas en experiencias digitales sólidas y escalables.'}
            >
                <BarraRedes/>
                <div className={styles.encabezado}>
                    <h1>Proyectos Destacados</h1>
                </div>
            </Layout>
        </>
    )
}

export default Proyectos