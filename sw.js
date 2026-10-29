// Service worker mínimo: permite instalar como app. Não guarda dados em cache (tudo vem ao vivo do Supabase).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response("<meta name=viewport content='width=device-width'><body style='font-family:sans-serif;padding:30px;text-align:center;color:#16283D'><h2>Sem conexão</h2><p>Conecte-se à internet para usar o portal.</p></body>", { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
