import Image from "next/image"
import Link from "next/link"
import styles from "../styles/navegacion.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src='/icons/Cristhian-Sevilla.jpg' width={50} height={50} alt="Cristhian Sevilla" />
                    </Link>
                </div>
                <nav className={styles.navegacion} id="enlaces">
                    <Link href='/'>
                        Inicio
                    </Link>
                    <Link href='/proyectos'>
                        Proyectos
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header