// Service Worker para cache de recursos optimizados
const CACHE_NAME = 'nexolab-v1.0';
const urlsToCache = [
  '/',
  '/optimized/kkroto66-mobile.webp',
  '/optimized/kkroto66-tablet.webp',
  '/optimized/kkroto66-desktop.webp',
  '/optimized/kkroto66-mobile.jpg',
  '/optimized/kkroto66-tablet.jpg',
  '/optimized/kkroto66-desktop.jpg'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activar Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch events - cache first strategy para imágenes
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Retornar desde cache si existe
          if (response) {
            return response;
          }
          
          // Fetch desde red y cachear
          return fetch(event.request).then((response) => {
            // Solo cachear respuestas exitosas
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
        })
    );
  } else {
    // Network first strategy para otros recursos
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
});
