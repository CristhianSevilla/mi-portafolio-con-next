import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/header.module.css"

const Header = () => {

    const router = useRouter()
    const menuRef = useRef(null); // Crear una referencia al elemento 'menu'
  
    useEffect(() => {
        let prevScrollpos = window.pageYOffset; // Posición de desplazamiento previa
        let menu = menuRef.current; 
    
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset; // Posición de desplazamiento actual
          const scrolledUp = prevScrollpos > currentScrollPos; // Verifica si el desplazamiento es hacia arriba
    
          if (scrolledUp) {
            // Si el desplazamiento es hacia arriba
            menu.style.top = "0"; // Mostrar el menú
            if (currentScrollPos === 0) {
              // Si el desplazamiento está en la parte superior de la página
              menu.style.backgroundColor = "transparent"; 
              menu.style.boxShadow = "unset"; 
            } else {
              // Si el desplazamiento no está en la parte superior de la página
              menu.style.backgroundColor = "#050505f1"; 
              menu.style.boxShadow = "0px 2px 4px hsla(35, 46%, 89%, 0.171)"; 
            }
          } else {
            // Si el desplazamiento es hacia abajo
            menu.style.top = "-150px"; // Ocultar el menú
          }
    
          prevScrollpos = currentScrollPos; // Actualizar la posición de desplazamiento previa
        };
    
        window.addEventListener("scroll", handleScroll); // Agregar el evento de desplazamiento
    
        return () => {
          window.removeEventListener("scroll", handleScroll); // Eliminar el evento de desplazamiento al desmontar el componente
        };
      }, []); 
      
    
    return (
        <header>
            <div ref={menuRef} className={styles.menu}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src='/icons/Cristhian-Sevilla.jpg' width={50} height={50} alt="Cristhian Sevilla" priority/>
                    </Link>
                </div>
                <nav className={styles.navegacion} id="enlaces">
                    <Link className={router.pathname === '/' ? styles.active : ''} href='/'>
                        Inicio
                    </Link>
                    <Link className={router.pathname === '/proyectos' ? styles.active : ''} href='/proyectos'>
                        Proyectos
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header