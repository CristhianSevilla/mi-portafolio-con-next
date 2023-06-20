import Link from "next/link"
import styles from "../styles/footer.module.css"
import { useRouter } from 'next/router'

const Footer = () => {

    const router = useRouter()

    return (
        <footer className={styles.footer}>
            <div className="contenedor-small-2">
                <div className={styles.footerimformacion}>
                    <div>
                        <p>Diseñado y construido por <span>Cristhian Sevilla&copy; {new Date().getFullYear()}</span></p>
                    </div>
                    <div>
                        <Link className={router.pathname === '/' ? styles.active : ''} href='/'>
                            Inicio
                        </Link>
                        <Link className={router.pathname === '/proyectos' ? styles.active : ''} href='/proyectos'>
                            Proyectos
                        </Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer