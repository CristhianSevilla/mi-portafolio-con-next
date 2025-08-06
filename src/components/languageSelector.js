import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/languageSelector.module.css";

const LanguageSelector = () => {
  const router = useRouter();
  const { locale, asPath } = router;

  return (
    <div className={styles.selector}>
      <Link
        href={asPath}
        locale="es"
        className={`${styles.lang} ${locale === "es" ? styles.active : ""}`}
      >
        ES
      </Link>
      <Link
        href={asPath}
        locale="en"
        className={`${styles.lang} ${locale === "en" ? styles.active : ""}`}
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSelector;
