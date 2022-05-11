import { useEffect, useState } from 'react';
import type { Slide } from '../slides';

type Options = {
  delay: number;
};

type UseSlidesArgs = {
  slides: Slide[];
  options?: Options;
};

type UseSlides = {
  activeSlide: number;
};

export const useSlides = ({ slides, options }: UseSlidesArgs): UseSlides => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide + 1) % slides.length);
    }, options?.delay || 10000);

    return () => {
      clearInterval(interval);
    };
  });

  return {
    activeSlide,
  };
};
