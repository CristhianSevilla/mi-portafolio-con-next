import Link from "next/link"
import styles from "../styles/footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="contenedor-small-2">
                <div className={styles.footerimformacion}>
                    <div>
                        <p>Diseñado y construido por <span>Cristhian Sevilla</span></p>
                    </div>
                    <div>
                    <Link href='/'>
                        Inicio
                    </Link>
                    <Link href='/proyectos'>
                        Proyectos
                    </Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer