import { useState, useEffect, useRef } from 'react';

interface PerformanceMetrics {
  isLowEnd: boolean;
  isSlowConnection: boolean;
  shouldReduceAnimations: boolean;
  preferredFPS: number;
  shouldLazyLoad: boolean;
}

export const usePerformanceOptimization = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isLowEnd: false,
    isSlowConnection: false,
    shouldReduceAnimations: false,
    preferredFPS: 60,
    shouldLazyLoad: true
  });

  useEffect(() => {
    const calculateMetrics = () => {
      // Detectar dispositivos de bajo rendimiento
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      const isLowEnd = hardwareConcurrency < 4 || deviceMemory < 4;

      // Detectar conexión lenta
      const connection = (navigator as any).connection;
      const isSlowConnection = connection && 
        (connection.effectiveType === '2g' || 
         connection.effectiveType === '3g' ||
         connection.downlink < 1.5);

      // Detectar preferencia de movimiento reducido
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Detectar dispositivo móvil
      const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      // Calcular si se deben reducir animaciones
      const shouldReduceAnimations = isLowEnd || isSlowConnection || prefersReducedMotion || isMobile;

      // Calcular FPS preferido
      let preferredFPS = 60;
      if (shouldReduceAnimations) {
        preferredFPS = 30;
      } else if (isLowEnd) {
        preferredFPS = 45;
      }

      // Determinar si usar lazy loading
      const shouldLazyLoad = isSlowConnection || isLowEnd;

      setMetrics({
        isLowEnd,
        isSlowConnection,
        shouldReduceAnimations,
        preferredFPS,
        shouldLazyLoad
      });
    };

    calculateMetrics();

    // Recalcular en cambio de tamaño de ventana
    const handleResize = () => {
      setTimeout(calculateMetrics, 100);
    };

    window.addEventListener('resize', handleResize);
    
    // Monitorear cambios en la conexión
    if ((navigator as any).connection) {
      (navigator as any).connection.addEventListener('change', calculateMetrics);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if ((navigator as any).connection) {
        (navigator as any).connection.removeEventListener('change', calculateMetrics);
      }
    };
  }, []);

  return metrics;
};

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

// Hook para optimizar animaciones de canvas
export const useOptimizedCanvas = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  animationCallback: (context: CanvasRenderingContext2D, deltaTime: number) => void,
  targetFPS: number = 60
) => {
  const animationFrameRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const frameIntervalRef = useRef<number>(1000 / targetFPS);

  useEffect(() => {
    frameIntervalRef.current = 1000 / targetFPS;
  }, [targetFPS]);

  const startAnimation = () => {
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTimeRef.current;

      if (deltaTime >= frameIntervalRef.current) {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        
        if (context) {
          animationCallback(context, deltaTime);
        }
        
        lastTimeRef.current = currentTime - (deltaTime % frameIntervalRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  useEffect(() => {
    return stopAnimation;
  }, []);

  return { startAnimation, stopAnimation };
};
