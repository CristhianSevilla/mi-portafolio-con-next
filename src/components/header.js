import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./languageSelector";
import LanguageTooltip from "./languageTooltip";
import styles from "../styles/header.module.css";

const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const menuRef = useRef(null);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    let menu = menuRef.current;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrolledUp = prevScrollpos > currentScrollPos;

      if (scrolledUp) {
        menu.style.top = "0";
        if (currentScrollPos === 0) {
          menu.style.backgroundColor = "transparent";
          menu.style.boxShadow = "unset";
        } else {
          menu.style.backgroundColor = "#050505f1";
          menu.style.boxShadow = "0px 2px 4px hsla(35, 46%, 89%, 0.171)";
        }
      } else {
        menu.style.top = "-150px";
      }

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div ref={menuRef} className={styles.menu}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/icons/Cristhian-Sevilla.jpg"
              width={50}
              height={50}
              alt="Cristhian Sevilla"
              priority
            />
          </Link>
        </div>
        <nav className={styles.navegacion} id="enlaces">
          <Link
            className={router.pathname === "/" ? styles.active : ""}
            href="/"
          >
            {t("nav.home")}
          </Link>
          <Link
            className={router.pathname === "/proyectos" ? styles.active : ""}
            href="/proyectos"
          >
            {t("nav.projects")}
          </Link>
          <div className="relative">
            <LanguageSelector />
            <LanguageTooltip />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
