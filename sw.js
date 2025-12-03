const CACHE_NAME = 'neoregister-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './images/icon-192.png',
  './images/icon-512.png'
  // Nota: Le librerie esterne (Firebase, FontAwesome) vengono gestite dal browser
];

// Installazione
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetching (Strategia: Network First, poi Cache se offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
