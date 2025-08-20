import styles from "../styles/sliderInicio.module.css";
import { useTranslation } from 'next-i18next';
import { useState, useEffect, useRef } from 'react';
import SlideItem from './SlideItem';

const SliderProyectos = ({ autoPlay = false, autoPlayInterval = 5000 } = {}) => {
  const { t } = useTranslation('common')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [showButtons, setShowButtons] = useState(true)
  const intervalRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const sliderRef = useRef(null)
  const hideButtonsTimeout = useRef(null)
  
  const projects = [
    {
      key: 'bocados',
      backgroundClass: styles.slider_background_bocados,
      technologies: ['React', 'NextJS', 'Prisma', 'JavaScript', 'API Rest', 'Axios', 'Tailwind', 'PostgreSQL'],
      detailUrl: '/proyectos/bocados-elite',
      githubUrl: 'https://github.com/CristhianSevilla/Bocados-Elite',
      liveUrl: 'https://bocados-elite.vercel.app/',
      image: '/imagenes/projects/bocados/principal.jpeg'
    },
    {
      key: 'guitar',
      backgroundClass: styles.slider_background_guitar,
      technologies: ['React', 'NextJS', 'JavaScript', 'API', 'Fetch', 'PostgreSQL'],
      detailUrl: '/proyectos/guitar-los-angeles',
      githubUrl: 'https://github.com/CristhianSevilla/GuitarLA',
      liveUrl: 'https://guitar-la-mu.vercel.app/',
      image: '/imagenes/projects/guitar/principal.jpeg'
    },
    {
      key: 'barber',
      backgroundClass: styles.slider_background_barber,
      technologies: ['PHP8', 'MVC', 'MySQL', 'JavaScript', 'API-Rest', 'SASS'],
      detailUrl: '/proyectos/barber-club',
      githubUrl: 'https://github.com/CristhianSevilla/barberia-citas',
      image: '/imagenes/projects/barber/principal.jpg'
    },
    {
      key: 'trago',
      backgroundClass: styles.slider_background_trago,
      technologies: ['Vite', 'React', 'Bootstrap', 'Context', 'JavaScript', 'Axios', 'API'],
      detailUrl: '/proyectos/trago-trax',
      githubUrl: 'https://github.com/CristhianSevilla/Trago-Trax',
      liveUrl: 'https://trago-trax.netlify.app/',
      image: '/imagenes/projects/trax/principal.jpeg'
    },
    {
      key: 'crm',
      backgroundClass: styles.slider_background_crm,
      technologies: ['Vite', 'React', 'TailwinCSS', 'React-Router-Dom', 'JavaScript', 'Api-Rest'],
      detailUrl: '/proyectos/client-connect',
      githubUrl: 'https://github.com/CristhianSevilla/CRM-Clientes',
      image: '/imagenes/projects/crm/principal.jpg'
    }
  ]
  
  const totalSlides = projects.length
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  const goToSlide = (index) => {
    setCurrentSlide(index)
    if (isPlaying) {
      setIsPlaying(false)
      clearInterval(intervalRef.current)
    }
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  const showButtonsTemporarily = () => {
    setShowButtons(true)
    clearTimeout(hideButtonsTimeout.current)
    hideButtonsTimeout.current = setTimeout(() => {
      setShowButtons(false)
    }, 3000)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    showButtonsTemporarily()
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const swipeDistance = touchStartX.current - touchEndX.current

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  const handleMouseEnter = () => {
    setShowButtons(true)
    clearTimeout(hideButtonsTimeout.current)
  }

  const handleMouseLeave = () => {
    hideButtonsTimeout.current = setTimeout(() => {
      setShowButtons(false)
    }, 1000)
  }

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, autoPlayInterval)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isPlaying, totalSlides, autoPlayInterval])

  // Hide buttons after initial display
  useEffect(() => {
    const initialHideTimeout = setTimeout(() => {
      setShowButtons(false)
    }, 4000)

    return () => clearTimeout(initialHideTimeout)
  }, [])


  
  return (
    <div 
      className={styles.slider}
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.indicators}>
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
            aria-current={currentSlide === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
        {autoPlay && (
          <button
            className={styles.playButton}
            onClick={toggleAutoPlay}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
        )}
      </div>
      <div className={styles.sliderInner} style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}>
        {projects.map((project, index) => (
          <SlideItem 
            key={project.key} 
            project={project} 
            t={t} 
            isActive={index === currentSlide}
          />
        ))}
      </div>
      <button 
        className={`${styles.prevButton} ${showButtons ? styles.visible : styles.hidden}`} 
        type="button" 
        onClick={prevSlide} 
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button 
        className={`${styles.nextButton} ${showButtons ? styles.visible : styles.hidden}`} 
        type="button" 
        onClick={nextSlide} 
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
};

export default SliderProyectos;