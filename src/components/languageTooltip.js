import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styles from "../styles/languageTooltip.module.css";

const LanguageTooltip = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);

      setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showTooltip) return null;

  const tooltipText = locale === 'es' ? 'Change language here' : 'Cambia el idioma aquí';

  return (
    <div className={styles.tooltip}>
      <div className={styles.arrow}></div>
      <div className={styles.content}>
        <span>{tooltipText}</span>
        <button
          className={styles.closeBtn}
          onClick={() => setShowTooltip(false)}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default LanguageTooltip;
