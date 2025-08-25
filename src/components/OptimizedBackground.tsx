import React, { useState, useEffect, useRef } from 'react';

interface OptimizedBackgroundProps {
  isDark?: boolean;
}

const OptimizedBackground: React.FC<OptimizedBackgroundProps> = ({ isDark = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shouldShowBackground, setShouldShowBackground] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Solo cargar imagen de fondo en dispositivos con buena conexión
    const connection = (navigator as any).connection;
    const isSlowConnection = connection && (connection.effectiveType === '2g' || connection.effectiveType === '3g');
    const isLowEnd = navigator.hardwareConcurrency < 4;
    
    if (!isSlowConnection && !isLowEnd) {
      setShouldShowBackground(true);
    }
  }, []);

  useEffect(() => {
    if (!shouldShowBackground) return;

    // Detectar el tamaño de pantalla para cargar la imagen apropiada
    const getOptimalImagePath = () => {
      const width = window.innerWidth;
      const supportsWebP = (() => {
        const canvas = document.createElement('canvas');
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      })();

      const extension = supportsWebP ? 'webp' : 'jpg';
      
      if (width <= 768) {
        return `/optimized/kkroto66-mobile.${extension}`;
      } else if (width <= 1024) {
        return `/optimized/kkroto66-tablet.${extension}`;
      } else {
        return `/optimized/kkroto66-desktop.${extension}`;
      }
    };

    // Lazy load de la imagen de fondo optimizada
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.src = getOptimalImagePath();
    
    // Precargar las otras versiones para cambios de orientación
    const preloadOtherSizes = () => {
      const supportsWebP = img.src.includes('.webp');
      const extension = supportsWebP ? 'webp' : 'jpg';
      
      ['/optimized/kkroto66-mobile', '/optimized/kkroto66-tablet', '/optimized/kkroto66-desktop']
        .forEach(path => {
          const preloadImg = new Image();
          preloadImg.src = `${path}.${extension}`;
        });
    };
    
    setTimeout(preloadOtherSizes, 2000); // Precargar después de 2 segundos
  }, [shouldShowBackground]);

  const getBackgroundImageUrl = () => {
    const width = window.innerWidth;
    const supportsWebP = (() => {
      const canvas = document.createElement('canvas');
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    })();

    const extension = supportsWebP ? 'webp' : 'jpg';
    
    if (width <= 768) {
      return `/optimized/kkroto66-mobile.${extension}`;
    } else if (width <= 1024) {
      return `/optimized/kkroto66-tablet.${extension}`;
    } else {
      return `/optimized/kkroto66-desktop.${extension}`;
    }
  };

  const backgroundStyle = imageLoaded && shouldShowBackground 
    ? {
        backgroundImage: `url('${getBackgroundImageUrl()}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }
    : {};

  return (
    <div 
      ref={backgroundRef}
      className={`fixed inset-0 z-0 transition-opacity duration-1000 ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={backgroundStyle}
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
