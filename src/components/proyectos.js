import OtrosProyectos from "@/components/otrosProyectos"
import PROYECTOS from "@/Data"
import { useTranslation } from 'next-i18next'
import styles from "../styles/proyectos.module.css"

const Proyectos = () => {
    const { t } = useTranslation('common')

    return (
        <section className={styles.inicio}>
            <div className="contenedor">
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
            </div>
        </section>
    )
}

export default Proyectos