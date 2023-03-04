import {Variants} from 'framer-motion';

export const fadeIn = (direction: string, delay: number): Variants => {
  const hiddenX = direction === 'left' ? 80 : direction === 'right' ? -80 : 0;
  const hiddenY = direction === 'up' ? 80 : direction === 'down' ? -80 : 0;

  return {
    hidden: {
      x: hiddenX,
      y: hiddenY,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay,
      },
    },
  };
};
