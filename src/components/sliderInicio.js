import styles from "../styles/sliderInicio.module.css";
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import SlideItem from './SlideItem';

const SliderProyectos = () => {
  const { t } = useTranslation('common')
  const [currentSlide, setCurrentSlide] = useState(0)
  
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
  const goToSlide = (index) => setCurrentSlide(index)


  
  return (
    <div className={styles.slider}>
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
      </div>
      <div className={styles.sliderInner} style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}>
        {projects.map((project) => (
          <SlideItem key={project.key} project={project} t={t} />
        ))}
      </div>
      <button className={styles.prevButton} type="button" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className={styles.nextButton} type="button" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>
    </div>
  );
};

export default SliderProyectos;