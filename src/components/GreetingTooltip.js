import { useTranslation } from 'next-i18next';
import styles from '../styles/greetingTooltip.module.css';

const GreetingTooltip = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.tooltip}>
      <div className={styles.content}>
        <span>{t('home.greeting')}</span>
      </div>
    </div>
  );
};

export default GreetingTooltip;