// Kill switch for the service worker installed by the old Jekyll/Chirpy site
// (PWA mode registered /sw.js and cached every page). Browsers that still have
// it check this URL for updates; this version clears its caches, unregisters
// itself and reloads open tabs so they get the current site from the network.
// Safe to delete once old visitors have had time to come back (a few months).
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((client) => client.navigate(client.url));
  })());
});
