import React, { lazy, Suspense } from 'react';
import { usePerformanceOptimization, useIntersectionObserver } from '@/hooks/use-performance';
import OptimizedBackground from './OptimizedBackground';

// Lazy load de componentes pesados
const LaserParticleBackground = lazy(() => import('./LaserParticleBackground'));
const ParticleBackground = lazy(() => import('./ParticleBackground'));

interface AnimatedBackgroundProps {
  isDark?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDark = false }) => {
  const { shouldReduceAnimations, isLowEnd } = usePerformanceOptimization();
  const [backgroundRef, isVisible] = useIntersectionObserver();

  // Fallback para dispositivos de bajo rendimiento
  if (shouldReduceAnimations || isLowEnd) {
    return <OptimizedBackground isDark={isDark} />;
  }

  return (
    <div ref={backgroundRef} className="fixed inset-0 z-0">
      <OptimizedBackground isDark={isDark} />
      
      {/* Solo cargar animaciones si están visibles y el dispositivo las soporta */}
      {isVisible && (
        <Suspense fallback={<div className="absolute inset-0" />}>
          {window.innerWidth > 1024 ? (
            <LaserParticleBackground isDark={isDark} />
          ) : (
            <ParticleBackground isDark={isDark} />
          )}
        </Suspense>
      )}
    </div>
  );
};

export default AnimatedBackground;