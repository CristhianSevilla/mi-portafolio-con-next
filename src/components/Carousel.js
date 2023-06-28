import React, { useState } from 'react';
import styles from '../styles/Carousel.module.css'

const Carousel = ({ proyectos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % proyectos.length);
  };

  
  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % proyectos.length);
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + proyectos.length) % proyectos.length);
  };

  return (
    <div className={`${styles.carousel} contenedor`}>
      <button className={styles.previousButton} onClick={handleSwipeRight}>
        &lt;
      </button>
      <div className={styles.slide}>
        {React.createElement(proyectos[currentIndex])}
      </div>
      <button className={styles.nextButton} onClick={handleSwipeLeft}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
