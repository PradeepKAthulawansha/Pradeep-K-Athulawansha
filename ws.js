self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed - BizMind Admin App Ready');
});

self.addEventListener('fetch', (e) => {
    // සරලවම අන්තර්ජාලයෙන් ඩේටා ගන්න ඉඩ දෙනවා
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});