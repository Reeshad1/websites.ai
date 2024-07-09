self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('jarvis-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/app.js',
                '/manifest.json',
                '/avatar.png',
                '/giphy.gif',
                '/icon-192x192.png',
                '/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
