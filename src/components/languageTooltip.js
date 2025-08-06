import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../styles/languageTooltip.module.css';

const LanguageTooltip = () => {
  const { t } = useTranslation('common');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 2 seconds for testing
    const timer = setTimeout(() => {
      setShowTooltip(true);
      
      // Auto hide after 5 seconds
      setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showTooltip) return null;

  return (
    <div className={styles.tooltip}>
      <div className={styles.arrow}></div>
      <div className={styles.content}>
        <span>{t('tooltip.changeLanguage')}</span>
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