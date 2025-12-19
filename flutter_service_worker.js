'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "a2e28f4fb09869b648709af92189f490",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "025250aaba783501a68000c6ef027951",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad03487e05d5344e6c45880a270b1a36",
".git/logs/refs/heads/main": "d90d3fb7af9cd78b4fe50e1eba353a10",
".git/logs/refs/remotes/origin/main": "b36f7f5bc68260cffc507100c471366d",
".git/objects/07/bbaf9d720993510b71e162e1007dbfdbc49d9b": "c20238c88b014a34da920b69097541da",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0d/0ba19c9105d01bc0f0a74e83d538f201a90880": "913e6428b61556cc7e868b1a15ee93d3",
".git/objects/11/1b6ca0c8d63a0f258f9240ee6abd16c81742c4": "849b522c93c428ca628351b23bbb650c",
".git/objects/15/762c520deb1ad157511956c31c738e0e6e88a1": "672f997be414918779d53f1c4212b359",
".git/objects/23/a3bf926e3789813eaeb5808250b8f3d6d5d436": "45f9d42c0f36e4c16960b3df56f3990e",
".git/objects/25/8899b347a857ea8f54628ca456eb824803fc25": "ede6a56d51238f56c2a049efa8d698f8",
".git/objects/25/cc57709f5d1aef93a43c7e6e94139702e0a949": "57a016a9daecd633e549e14a00de6ee0",
".git/objects/2e/38a74f9a20a7c49484fd561a2a4da324fd91d3": "8f0c6eadcb521b1a866682a8b5d43f82",
".git/objects/31/31004395f6734a04ada80c17a96b254b1817bb": "7ec0d042cb5c95b806159a6d253411d0",
".git/objects/32/11aeb7c5bc76b482a6516075aacfea9ac4466c": "45c9dfbc3e81688d94f06d321d3eebf3",
".git/objects/34/ed86d233f2969d9bb2d6acc25b11081c9fb32d": "8a9a5036b7f50510b3e746e194b0d80b",
".git/objects/37/02687fbc5392699479e538461a55ec661fd4d3": "59770e5b53039bd7aff4005367a0d69c",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/5e450a978a66f3d12608289b4fa0589d7074c4": "eaf95abba15cecd3479c7228834e0f10",
".git/objects/3d/d800bf5c34b04a3ead6e75e673c123473863e8": "41b4c8d95277c6a46dedb421b89593e2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/ea1ff95f0995708a65d2b77a5d5fdecd7af786": "fdbaa41c3a8b74b388e32b51289824ef",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/54/1ad320e254e79fda3c3f4b1460f59f455c3e36": "7fe5a235ac46e871f5af1ed5a8f44f93",
".git/objects/54/a10b3bc6552586aae18252b25c5c39f031bd94": "3601a58d7e12d8e7ae49f8e74b155732",
".git/objects/57/90a964ba404036dd8c6e10675578ae397cf4db": "43502096168f7ebe95921e2ce230abb2",
".git/objects/5a/10e790f99a156c614acd3a61f33cbe5c801cc0": "71a54f65bc8a9bb0e1de95e33ecc0863",
".git/objects/61/d9bcb3d811fbaaa72a6e5a97581c17293bd6a5": "9fefa0a2d03513092a7d37b1ec73100a",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/c9576135a5e91bd71c788f401a6bd6dab5f77c": "80fa6d3c83cdc82e297b0637dc6ececd",
".git/objects/7a/824a3df4ca67d9fac992cf10f2aff0d514ddd9": "0878a5c1c47e18a8e9eb5f3a35786d56",
".git/objects/7b/5061c339b7f121491a86324428fff1041809ec": "e51efea0495918bb67073d8c04e068ba",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/81/cfb4ba096a27cec8556d472d593b9adf4a0823": "592e78d33118b5a632e05bfd995ede6e",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/b15d7f721202e6564a5160a2ad040ac5d39005": "01fbb2cbdba4f447cc24a987c8f62940",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/e65cdb30c22ce109a9427e597afe3a5051780f": "cd8dc74739095dfb230381b3d028b2ad",
".git/objects/8e/fd9561ebcf13bb7d85b07d3a0cd981b88eb40a": "5b04003aef1cfdff0f2b61f58a10e62b",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9e/2d19d2db6a0c13ddb79b9a730ef1fbbb604e11": "f817e6c72f50cbc0c74b4f9d47acf851",
".git/objects/a2/61ea85555fef9eee45af3c79b193064b064df3": "3a8ee0f52954019cb1ca6be9b1d2022d",
".git/objects/a4/b9ccf94d97580c8b02531f5bf8a332cb91879d": "fe90923ccc46921e3d12298b278be5c1",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ab/0ccfcae1daa67bb6a6b60bfb9d18f78bf2aaad": "af0963161212326a43fc2f60e4f49459",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b0/3d4a4b27b700ead262c157153ed7a19970848d": "7345440ee24c09c1f57d9f368e723a88",
".git/objects/b4/59a7775b62295bb6e9f29c694d33ecc6197a3f": "9032c6f3ffef2140a3f2e45fa71b01db",
".git/objects/b6/3c444cac1423c30654fa4a573800fab0aaa0ca": "422a0be4c2b4e57ec807d8d3ba1b9e7d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/be/0c3300c092f519e60d7174f91bcbf00da79a5c": "b868a7a5cc6dcf37868f5d9ce2407d44",
".git/objects/c7/d29ce57a1d5e5fffd3f95a82bbc90fa7b9e9d0": "1ad70b0e107389aa3d98e6e619fe1576",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/efeeb90b403c6baf0ac9c382a078db723e5982": "ce52119f3b086bc74d9e15bbbf6a3801",
".git/objects/cc/4d955a159c752f13b495606e547cc3b14a5a83": "43ecfe85b5f71baf41c77cda723ee858",
".git/objects/ce/b88c1c41d828679e587020b3c2f27c7a6e5163": "de909e4d2700b89e97adae1a02f8e698",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a52532fc84b9f2980ea7b1fb0a3054b30fdb2c": "6673ca0e6889007a247964942e8b7bf4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/343cb05693b2934fe2dec53947ba5d35b5fe7c": "a5990b5807a8b92ef21c5b8ce9ceb0e0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/e2115c19bc69eece1ffe9838a15f653fbb812c": "0a5cf3cecc42bd6eab2bd8712665680e",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/aec891aa4506343f8bc65c51b0a02e90f2557a": "4f3f5cfba4f3705bdd70f73b3ecae799",
".git/objects/fc/9ddc311b0debac590f4191f9f5ed3a102c8b08": "f9b01459406013ae3140ebf6d0fa461e",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "fbf6ef7ade5ca747cc52092be73622b1",
".git/refs/remotes/origin/main": "fbf6ef7ade5ca747cc52092be73622b1",
"assets/AssetManifest.bin": "83dfd7612c710a5701d5d3c11f9bdd4a",
"assets/AssetManifest.bin.json": "b5732ae853fa7bbdbcb1cf0bd007491e",
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
"favicon.ico": "3dff1556baa4b4c800e2c28ae4b92ab8",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "7fcfb0c2f8dda5f72038ed11227a48d2",
"icons/Icon-192.jpg": "05e306ddc55dd3d9f087b88c7d322c73",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e37fb76d2a4ef1e34ae29d7fca102d6",
"/": "2e37fb76d2a4ef1e34ae29d7fca102d6",
"main.dart.js": "8f817e20701f08e3584a7a39eed9981b",
"manifest.json": "31b2df6035132adb2174203feaca99d4",
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
