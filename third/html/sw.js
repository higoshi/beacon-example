self.addEventListener('install', async event => {
	console.log(event);
});

self.addEventListener('fetch', async event => {
	console.log(event);
  event.respondWith(
  	caches.match(event.request)
 			.then(response => {
 				if (response) {
 					return response;
 				}
 				return fetch(event.request);
 			})
  );
});
