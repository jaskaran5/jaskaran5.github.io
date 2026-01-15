'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8602b7dafc55a910ee1d2efd45bc8b60",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "584ca03988f3e94f45e1ef61399ebe5c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "579e8efa0df76145e1c31543bb205366",
".git/logs/refs/heads/master": "579e8efa0df76145e1c31543bb205366",
".git/objects/16/9e6233616791527e59dbea8bf99c9c93338652": "55aa38a98c7f722072f7888db485bb46",
".git/objects/42/887096afcd2c87f8c2b35d56439aba7afc8e10": "6ee62a3ed1c776b844f37be805a6a33d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/93/5978cae67fd67a8b2964417a5bf4395d52929b": "569d28c31d1c0b2fc9e9a3bd3c33128c",
".git/objects/b5/9d13345f6637b7049f8f988535a4e0055bf616": "bb3fb1f7b6479ac6ea03c84f79f292d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/343cb05693b2934fe2dec53947ba5d35b5fe7c": "a5990b5807a8b92ef21c5b8ce9ceb0e0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "485d8cbd4d283d1fcb58d2f1806bae6f",
"assets/AssetManifest.bin": "0b6c6fcf079db5ddcb6c55a30e166b34",
"assets/AssetManifest.bin.json": "f0a98eae9773cc88ce1faf9d1b1b7696",
"assets/assets/images/a1.png": "7a274f55956d7dcd9edc7f5aba44c9a5",
"assets/assets/images/a2.png": "15ea20e134325eda1eee5c2b3d6e6cc6",
"assets/assets/images/a3.png": "256b4a64b640c0e9504f019b0ee8222f",
"assets/assets/images/a4.png": "282d3ee4f54ceeaea89be2f98a43c397",
"assets/assets/images/a5.png": "8084677fae64788b54b402cba7152b6d",
"assets/assets/images/a6.png": "92d7e92d2158790840f462258816fde2",
"assets/assets/images/a7.png": "023d14f68140c9bae4838004ada6d923",
"assets/assets/images/a8.png": "fe5497eb30e996337d51cb697e17d439",
"assets/assets/images/n1.jpeg": "d6913d49d009fd4e7009e201413858c7",
"assets/assets/images/n2.jpeg": "6b3fd989686f056a89777c8bafea5d7f",
"assets/assets/images/n3.jpeg": "ab6262fbc09545d2f19b5887cc553456",
"assets/assets/images/n4.jpeg": "02325296a87fccc788a7f2525a312774",
"assets/assets/images/n5.jpeg": "0dc4b2d1f95d5a6b54aba49557bf8c3e",
"assets/assets/images/n6.jpeg": "a3010d574b4c9ec111bb7fbf8b93b669",
"assets/assets/images/n7.jpeg": "db30889deedb25063c7151725fcb48b7",
"assets/assets/images/n8.jpeg": "639068c55713457bec4fe0caf7c9e4eb",
"assets/assets/images/o1.jpeg": "b11dbc33d670b1fb68274a92b9435d03",
"assets/assets/images/o2.jpeg": "cf1a3ed63459fbbea9a1d9451c792670",
"assets/assets/images/o3.jpeg": "2ec70fb183592faabce6acabc07312a1",
"assets/assets/images/o4.jpeg": "ad81277e546d4bb4535ddeba7652c24f",
"assets/assets/images/o5.jpeg": "c1b06179894f0eb3f8c126bddde8a5d1",
"assets/assets/images/o6.jpeg": "75854d1cb1662d57b3ab2cccf53877e1",
"assets/assets/images/profile.jpg": "05e306ddc55dd3d9f087b88c7d322c73",
"assets/assets/images/t1.jpg": "2301d9442c34650acdfdf55cbdd6c7f5",
"assets/assets/images/t2.jpg": "72e0464501f7c0ada75d97d18be08b56",
"assets/assets/images/t3.jpg": "a6736f777f954c30cb38fd8a582ecc04",
"assets/assets/images/t4.jpg": "5c27b029d200c091a30c8191556af293",
"assets/assets/images/t5.jpg": "123affc53274241a503a9b6e9d6263be",
"assets/assets/images/t6.jpg": "7f56f649a49c670cf689a30bd319cfd9",
"assets/assets/images/t7.jpg": "71cd872518fa4c982fa631828d09002c",
"assets/assets/images/t8.jpg": "8b126fee715baba27f1f591babef4db9",
"assets/assets/pdf/Jaskaran_Sharma_CV.pdf": "e0017c8a8a2f0a7a044a96e448d81fef",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "91a9996e19613ff4befbc8b4199b45fa",
"assets/NOTICES": "bc6bac050e1ae9841c08c442e065ea7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "85f371233e696453e2bbd5c69119d644",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "294439957e33d85b1a983c1344ded57b",
"/": "294439957e33d85b1a983c1344ded57b",
"main.dart.js": "4cbbf21116a4a5c72cb5dccb5db5ec86",
"manifest.json": "792e2bc22cd7e534178d480865bcca5e",
"profile.jpg": "05e306ddc55dd3d9f087b88c7d322c73",
"version.json": "86f867b7191c516f67a84d6f0a61670a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
