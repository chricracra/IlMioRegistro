self.addEventListener('install', (e) => {
  console.log('App installata!');
});

self.addEventListener('fetch', (e) => {
  // Questo codice è necessario per far funzionare la PWA
  e.respondWith(fetch(e.request));
});
