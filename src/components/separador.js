import styles from "../styles/secciones.module.css";

export default function Separador() {
  return (
    <div className={`${styles.seccion_backgound} seccion separator`}>
      <div className="separator-line"></div>
      <style jsx>{`
        .separator {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0rem 0;
          padding: 0 2rem;
        }

        .separator-line {
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #666, transparent);
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .separator {
            margin: 0rem 0;
          }

          .separator-line {
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  );
}
