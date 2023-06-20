import Layout from "@/components/layout"
import styles from "../styles/header.module.css"
import BarraRedes from "@/components/barraRedes"

export default function Home() {
  return (
    <Layout
      title={'Inicio'}
      description={'Desarrollador Web. Disfruto crear cosas para la web, me apasiona transformar ideas en experiencias digitales sólidas y escalables.'}
    >
      <BarraRedes/>
      <section className={styles.headerinferior}>
        <div className={styles.headertexto }>
          <h1>Hola soy <span>Cristhian</span></h1>
        </div>
      </section>

    </Layout>
  )
}
