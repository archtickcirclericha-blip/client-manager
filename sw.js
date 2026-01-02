self.addEventListener("install", () =>{
	self.skipWaiting();
	});

self.addEventListener("activate", () =>{
	event.waitUntil(self.clients.claim());

	});
