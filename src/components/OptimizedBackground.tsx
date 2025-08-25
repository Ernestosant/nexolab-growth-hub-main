import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface OptimizedBackgroundProps {
  isDark?: boolean;
}

const OptimizedBackground: React.FC<OptimizedBackgroundProps> = ({ isDark = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shouldShowBackground, setShouldShowBackground] = useState(false);
  const [currentImagePath, setCurrentImagePath] = useState('');
  const backgroundRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Solo cargar imagen de fondo en dispositivos con buena conexión
    const connection = (navigator as any).connection;
    const isSlowConnection = connection && (connection.effectiveType === '2g' || connection.effectiveType === '3g');
    const isLowEnd = navigator.hardwareConcurrency < 4;
    
    if (!isSlowConnection && !isLowEnd) {
      setShouldShowBackground(true);
    }
  }, []);

  // Función optimizada para detectar soporte WebP
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').startsWith('data:image/webp');
  };

  // Función para obtener la ruta óptima de imagen
  const getOptimalImagePath = () => {
    const width = window.innerWidth;
    const extension = supportsWebP() ? 'webp' : 'jpg';
    
    if (width <= 768) {
      return `/optimized/kkroto66-mobile.${extension}`;
    } else if (width <= 1024) {
      return `/optimized/kkroto66-tablet.${extension}`;
    } else {
      return `/optimized/kkroto66-desktop.${extension}`;
    }
  };

  useEffect(() => {
    if (!shouldShowBackground) return;

    const imagePath = getOptimalImagePath();
    
    // Solo recargar si la imagen cambió
    if (imagePath === currentImagePath && imageLoaded) return;

    // Lazy load de la imagen de fondo optimizada
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setCurrentImagePath(imagePath);
    };
    
    img.src = imagePath;
    
    // Precargar las otras versiones para cambios de orientación
    const preloadOtherSizes = () => {
      const extension = supportsWebP() ? 'webp' : 'jpg';
      
      ['/optimized/kkroto66-mobile', '/optimized/kkroto66-tablet', '/optimized/kkroto66-desktop']
        .forEach(path => {
          const preloadImg = new Image();
          preloadImg.src = `${path}.${extension}`;
        });
    };
    
    setTimeout(preloadOtherSizes, 2000); // Precargar después de 2 segundos
  }, [shouldShowBackground, currentImagePath, imageLoaded]);

  // Hook para recargar imagen en cambios de orientación/redimensionamiento
  useEffect(() => {
    const handleResize = () => {
      if (shouldShowBackground) {
        const newImagePath = getOptimalImagePath();
        if (newImagePath !== currentImagePath) {
          setImageLoaded(false);
          setCurrentImagePath('');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [shouldShowBackground, currentImagePath]);

  // Estilos de fondo optimizados para móviles
  const backgroundStyle = imageLoaded && shouldShowBackground 
    ? {
        backgroundImage: `url('${getOptimalImagePath()}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // En móviles usar 'scroll' en lugar de 'fixed' para mejor compatibilidad
        backgroundAttachment: isMobile ? 'scroll' : 'fixed'
      }
    : {};

  return (
    <div 
      ref={backgroundRef}
      className={`
        fixed inset-0 z-0 transition-opacity duration-1000
        ${imageLoaded ? 'opacity-100' : 'opacity-0'}
        ${isMobile ? 'absolute min-h-screen w-full' : 'fixed'}
      `}
      style={{
        ...backgroundStyle,
        // Asegurar cobertura completa en móviles
        ...(isMobile && {
          height: '100vh',
          minHeight: '100vh',
          width: '100vw',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        })
      }}
    >
      {/* Fallback gradient cuando no se carga la imagen */}
      {!imageLoaded && (
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
            : 'bg-gradient-to-br from-blue-50 via-white to-slate-100'
        }`} />
      )}
      
      {/* Overlay para mejorar legibilidad */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-black/20' 
          : 'bg-white/10'
      } backdrop-blur-[1px]`} />
    </div>
  );
};

export default OptimizedBackground;
