import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const elementos = document.querySelectorAll('.elemento-animado');

    const observador = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animado');
            observador.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
      }
    );

    elementos.forEach((elemento) => {
      observador.observe(elemento);
    });

    return () => {
      observador.disconnect();
    };
  }, []);
};

export default useScrollAnimation;