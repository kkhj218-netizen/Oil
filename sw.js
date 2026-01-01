const CACHE = "jh-oil-hub-v1";
const ASSETS = [
  "/Oil/",
  "/Oil/index.html",
  "/Oil/manifest.webmanifest"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
