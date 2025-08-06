import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from "@/components/layout"
import OtrosProyectos from "@/components/otrosProyectos"
import SliderProyectos from "@/components/sliderInicio"
import PROYECTOS from "@/Data"
import styles from "../styles/proyectos.module.css"

const Proyectos = () => {
    const { t } = useTranslation('common')

    return (
        <>
            <Layout
                title={'Proyectos'}
                description={'Aquí encontraras tecnologías con las que he trabajado y proyectos que han marcado un antes y un después en mi crecimiento profesional'}
            >

                <SliderProyectos/>

                <section className="contenedor-small-2">
                    <div className={`${styles.proyectos_titulo} elemento-animado`}>
                        <h2>{t('projects.otherProjects')}</h2>
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Proyectos