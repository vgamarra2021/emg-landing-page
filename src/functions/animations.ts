import { gsap } from "gsap";

export const scaleEnterAnimation = (
  elementsArray: (Element | null)[],
  duration = 0.3,
  scale = 1.05
) => {
  return gsap.to(elementsArray, {
    duration,
    scale,
    ease: "power4",
  });
};

export const scaleLeaveAnimation = (
  elementsArray: (Element | null)[],
  duration = 0.3,
  scale = 1
) => {
  return gsap.to(elementsArray, {
    duration,
    scale,
    ease: "power1.out",
  });
};

export const sectionTitleUpAnimation = (
  elementsArray: (Element | null)[],
  stagger = 0.03
) => {
  return gsap.from(elementsArray, {
    duration: 0.5,
    y: -20,
    autoAlpha: 0,
    ease: "power1.out",
    stagger,
  });
};

export const sectionTitleLeftAnimation = (
  elementsArray: (Element | null)[],
  stagger = 0.03
) => {
  return gsap.from(elementsArray, {
    duration: 0.5,
    x: 20,
    autoAlpha: 0,
    ease: "power1.out",
    stagger,
  });
};

export const sectionIntersectionObserver = (
  animation: () => void,
  threshold = 0.1
) => {
  const observerCallback = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        animation();
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold,
  });

  return observer;
};
