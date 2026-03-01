import { ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useMousePosition } from '../hooks/useUI';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-purple-accent z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

export const CursorGlow = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] bg-purple-accent/10 rounded-full blur-[100px] pointer-events-none z-[-1]"
      animate={{
        x: x - 200,
        y: y - 200,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 150, mass: 0.5 }}
    />
  );
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
