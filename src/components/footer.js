import Link from "next/link"
import styles from "../styles/footer.module.css"
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const Footer = () => {
    const { t } = useTranslation('common')
    const router = useRouter()

    return (
        <footer className={styles.footer}>
            <div className="contenedor-small-2">
                <div className={styles.footerimformacion}>
                    <div>
                        <p>{t('footer.designedBy')} <span>Cristhian Sevilla&copy; {new Date().getFullYear()}</span></p>
                    </div>
                    <div>
                        <Link className={router.pathname === '/' ? styles.active : ''} href='/'>
                            {t('nav.home')}
                        </Link>
                        <Link className={router.pathname === '/proyectos' ? styles.active : ''} href='/proyectos'>
                            {t('nav.projects')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer