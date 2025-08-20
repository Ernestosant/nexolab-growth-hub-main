import { useEffect } from 'react';

export const ServiceWorkerManager: React.FC = () => {
  useEffect(() => {
    // Solo registrar en producción
    if (process.env.NODE_ENV !== 'production') return;
    
    // Verificar soporte para Service Workers
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('✅ Service Worker registrado:', registration.scope);
            
            // Verificar actualizaciones
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // Nueva versión disponible
                    console.log('🔄 Nueva versión disponible. Recargando...');
                    window.location.reload();
                  }
                });
              }
            });
          })
          .catch((error) => {
            console.log('❌ Error registrando Service Worker:', error);
          });
      });
    }
  }, []);

  return null;
};

export default ServiceWorkerManager;
