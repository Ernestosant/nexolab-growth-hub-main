import { useEffect } from 'react';

interface PreloadManagerProps {
  isDark?: boolean;
}

export const PreloadManager: React.FC<PreloadManagerProps> = ({ isDark = false }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Determinar qué imagen precargar basado en el tamaño de pantalla
      const getImageToPreload = () => {
        const width = window.innerWidth;
        if (width <= 768) return 'mobile';
        if (width <= 1024) return 'tablet';
        return 'desktop';
      };

      const size = getImageToPreload();

      // Preload optimized background image (WebP)
      const link1 = document.createElement('link');
      link1.rel = 'preload';
      link1.href = `/optimized/kkroto66-${size}.webp`;
      link1.as = 'image';
      link1.type = 'image/webp';
      document.head.appendChild(link1);

      // Preload fallback image (JPEG)
      const link2 = document.createElement('link');
      link2.rel = 'preload';
      link2.href = `/optimized/kkroto66-${size}.jpg`;
      link2.as = 'image';
      link2.type = 'image/jpeg';
      document.head.appendChild(link2);

      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Cleanup function
      return () => {
        try {
          if (document.head.contains(link1)) document.head.removeChild(link1);
          if (document.head.contains(link2)) document.head.removeChild(link2);
          if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
        } catch (e) {
          // Ignore cleanup errors
        }
      };
    };

    return preloadResources();
  }, []);

  return null;
};

// Hook para monitorear métricas de performance
export const usePerformanceMetrics = () => {
  useEffect(() => {
    // Solo en producción
    if (process.env.NODE_ENV !== 'production') return;

    // Monitorear tiempo de carga básico
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log(`Page Load Time: ${loadTime.toFixed(2)}ms`);
    });

    // Monitorear First Contentful Paint
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.log(`First Contentful Paint: ${entry.startTime.toFixed(2)}ms`);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // Fallback para navegadores que no soportan PerformanceObserver
      console.log('Performance monitoring not supported');
    }

    return () => {
      try {
        observer.disconnect();
      } catch (e) {
        // Ignore errors on cleanup
      }
    };
  }, []);
};
