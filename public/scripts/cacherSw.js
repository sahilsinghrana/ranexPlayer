// https://github.com/mdn/dom-examples/blob/main/service-worker/simple-service-worker/sw.js

const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({request, preloadResponsePromise}) => {
  const url = new URL(request.url);
  if (url.origin.includes("coverartarchive")) {
    request.mode = "no-cors";
  }

  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use the preloaded response, if it's there
  // NOTE: Chrome throws errors regarding preloadResponse, see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1420515
  // https://github.com/mdn/dom-examples/issues/145
  // To avoid those errors, remove or comment out this block of preloadResponse
  // code along with enableNavigationPreload() and the "activate" listener.
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("using preload response", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const req = request.clone();

    const responseFromNetwork = await fetch(req);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    if (responseFromNetwork.ok)
      putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    return new Response("Network error happened", {
      status: 408,
      headers: {"Content-Type": "text/plain"},
    });
  }
};

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener("activate", (event) => {
  event.waitUntil(enableNavigationPreload());
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          return caches.delete(key);
        })
      )
    )
  );
});

self.addEventListener("install", (event) => {
  event.waitUntil(addResourcesToCache([]));
});

self.addEventListener("fetch", (event) => {
  if (
    ["coverartarchive", "/image"].some((alt) => event.request.url.includes(alt))
  ) {
    event.respondWith(
      cacheFirst({
        request: event.request,
        preloadResponsePromise: event.preloadResponse,
      })
    );
  }
});
