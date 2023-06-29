import Image from "next/image"
import Link from "next/link"
import styles from "../styles/header2.module.css"

const Header2 = () => {
    return (

        <div className={styles.container}>
            <section id="home"
                className={`${styles.home__page} d-flex align-items-center justify-content-center xl:justify-content-between row g-4 m-0`}>
                <div className="col-12 xl:col-6">
                    <div className={`${styles.message__bubble} ${styles.triangle} mb-4 md:mb-2`}>
                        <div className={`${styles.message__text} p-2 sm:p-3 text-center m-0`}>
                            <p>Hola, Yo soy</p>
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl m-0 text-start">Cristhian Sevilla</h1>
                    <p className="text-start text-gray-500">
                        Profesional en desarrollo web y diseñador UI/UX
                    </p>
                    <div className={`${styles.home__buttons} d-flex align-items-center gap-2 mt-6`}>
                        <a href="./assets/CURRICULUM.pdf" aria-label="Descargar curriculum"
                            className="cursor-pointer rounded-lg text-decoration-none" download>Descargar CV</a>
                        <button aria-label="Deslizar a sección portafolio para mostrar mis trabajos"
                            className="cursor-pointer rounded-lg">Mi trabajo</button>
                    </div>
                </div>
                <div className="right__content col-9 col-sm-6 xl:col-5">
                    <Image src='/imagenes/cristhiansevilla.jpg' width={300} height={300} alt="Cristhian Sevilla" quality={100} priority/>
                </div>
            </section>
        </div>



        // <header className="d-flex w-100 fixed-top top-0 z-index--1">
        //     <nav className={`d-flex justify-content-between w-100 ${styles.navbar}`}>
        //         {/* <span className="logo cursor-pointer" onclick="scrollToSection('home')"> */}
        //         <span className={`${styles.logo} cursor-pointer`}>
        //             <Image src='/icons/Cristhian-Sevilla.jpg' width={50} height={50} alt="Cristhian Sevilla" priority />
        //         </span>
        //         <input type="checkbox" aria-label="Checkbox para mostrar y quitar hamburger menu"
        //             className="form-check xl:hidden" />
        //         <div className={styles.hamburger__lines}>
        //             <span className={`${styles.line} ${styles.line1}`}></span>
        //             <span className={`${styles.line} ${styles.line2}`}></span>
        //             <span className={`${styles.line} ${styles.line3}`}></span>
        //         </div>
        //         <div className={`${styles.header__info} d-flex align-items-center gy-3 gx-3`}>
        //             <ul className="d-flex flex-column xl:flex-row list-unstyled">
        //                 <li className="flex-item">Sobre mí</li>
        //                 <li className="flex-item">Servicios</li>
        //                 <li className="flex-item">Portafolio</li>
        //                 <li className="flex-item">Contacto</li>
        //                 {/* <li onclick="scrollToSection('contact')">Contacto</li> */}
        //             </ul>
        //             <div className={`${styles.hireMe__button} pt-4`}>
        //                 <Link href="mailTo:john@email.com" aria-label="Enviar mensaje al correo"
        //                     className="cursor-pointer text-decoration-none rounded-lg text-xl text-sm">Contratame</Link>
        //             </div>
        //         </div>
        //     </nav>
        // </header>


    )
}

export default Header2