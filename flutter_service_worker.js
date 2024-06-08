'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c61f99175b5da0a34099a06834ba4ed3",
".git/config": "98a4682c86650f175d88d0a9b2b49fcc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f2bde0249f804cb436f31110d60f89b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f74ea45c3fc264e5a36d087078cddc3d",
".git/logs/refs/heads/main": "f4127d63af63af188bd15aeaaf08ed8b",
".git/logs/refs/remotes/origin/main": "68d1ee098a75797515650961a6fdc4c6",
".git/objects/02/70007687af9e60dea82b18b141431e4a13060c": "a16577839e44a4b1aa84a06b841ec44a",
".git/objects/0c/b856a240a131139c7d53f3896200b99c5245cb": "cdb7e6c6666a07ae31a16d6ed3ed05a1",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/16/104144220ba87180a642ea130683692791dc2f": "68e7691615b581a3d3ea9ba37d65052e",
".git/objects/16/40ab1788254bddaec51798b8790549bd57156a": "4c4035cb2ce5dc4accaf19de82bdb74e",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/fdd3433af31c48e49cde49ab3aa0daad0cf0aa": "f29d2c2926bf22230589195b57a4b515",
".git/objects/1d/2ea0f3f3012bc02276d5dbf9802788e5d4a8c1": "e2986160acf5b41fc9be5bf2f76caee8",
".git/objects/1e/05d5e59bee44d05e64eced74fdaf2dedbd8fed": "61334ec2a788c64399109da465e971b6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/2a/ba4c6e893f0a73bd615bddf8d58a810ecaa4a0": "85919f4f140a57367c3b463b09d04608",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/2a7bc8f5640a93b5e632e79112f96c8c022611": "c53294fff0f92918f68af9e8d3dfc963",
".git/objects/3b/3e92d1b9ec4ec129cd49d35458670d34984b7a": "68dd238407bba61d14532aa24435c1da",
".git/objects/44/32eae36227f9f9bdd42f6fb1f687f6c9496fbc": "8f794817ce368fb9c3ec90325d5e173a",
".git/objects/46/15ff1c2ed78e726a8e05f884b05246e618d029": "fa7b2dff66dfc2a2916b8dbacc24a8a0",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/55/3f82258010c0a36877056bf523d05b1b9e0907": "e0d2521d2b6f2d4eec3dbb87a574fe88",
".git/objects/55/8017275619ad1adf21895f5e9363f0d5f4bf06": "afe53b9db458ffa82c8eab255a68c7a4",
".git/objects/55/d24451ab1e33404aad7ccc0652237e584e9545": "b289caea6a1390c7a6a84894591bb494",
".git/objects/57/4d56fdc7580438fd4e4e93da30927d05eb402e": "1b9951853e44ba31a1efa72f97a5da94",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/cf29a97c43be00659dbdbc5991a91e9d4b4622": "c3cb51ba87570e8c64d5ff493357e0ac",
".git/objects/60/aa6badbb2984d567d9099ecc1849b538b99c45": "668816e868d7eb0f6f2bdd0a8b35046c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/dc98e8c730759587ae02920308d74c18dd83cd": "680a0c834c585d5450a41805316a5eeb",
".git/objects/69/0d5d365e5c531d32a04d9f07eea9fcb1e813b7": "6d2a0b23651c4bf0d94a83b0b4293be0",
".git/objects/6a/02957b13f36bd3462f659dbf55c863580e8588": "82e82f47cb699c1af3a2132eecfa437c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7a/0fd169ac6be77e63f55dd1a1b17383bb789669": "beb1ca8d309a532ed40b109989546dcb",
".git/objects/7d/cd24bc62165047951387d4db6106427b8063e1": "31230e52a527f6065e287d058c6c89e9",
".git/objects/80/05f0ab57c51cfd533ed95c66cfcfdbd6cfc4f3": "849be44d5ccc150beb102548ae5f7bbf",
".git/objects/80/2b2f04d546ab08e5407cfde0449bd5bee3f260": "8ba2865777a13e27e1e77d63bc899fdc",
".git/objects/82/ed3a5e27b832ee252b272fd2e2d2751a0a6e25": "5d8d67b00b28e66d0411e32be664b682",
".git/objects/91/02b8a202b454f0b301ed9c53505cc47c2fcca1": "9647b56fe4cd7cfc5071fbbb16a04560",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/f043c1f7068a6045c79179aabfba0723322af3": "2c5e50dad99f7549fcc92c3f2cbed3b7",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/a1/6611a5240c2c6549de8a08746f957b763f0366": "2246afca5718a57023547cb353990901",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a5/d967ca38da21abf02ed183aff75334e8f194f8": "d7567ad60a059165a805d1644c28ccbc",
".git/objects/a8/775dec56d8f596aa405440acf1e68ecf6970d1": "98594296f43f56b6a8e8ec1992210807",
".git/objects/ab/224a8c688925418aa23e5bfbc88ecb22e756af": "1c2d7c50904dc33f5b8b626f5a3d8a81",
".git/objects/af/67117e092d90348e11d266303cbd0f8508c25f": "99618986bdbb545fdedd1cac9507750d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b9/3ef21bed26da5212d08f67c8eafe4a2bec43b9": "8605ac8d03b5600140523681c3e16b3f",
".git/objects/c2/e0b391265df619decaba4dedf7b3c3d2b7cf17": "71a3d4c7d936108c4a2582103a6e9f6e",
".git/objects/c4/579c0897c7c7d1803ec6b42f84e39a3b920fec": "57b07b8d59148c981c9df3b1ec3240ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/f52b7a3b1e2e7135aef1375a6de64fe551d91c": "18892a5c67b230f91e5a977ef0ef6709",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/4c05fc78d979e6e3d0de0ee96c0c3100bddf8a": "492e852720526bb058820b8b72eeaa57",
".git/objects/e3/2787336162115492ec391cb0d23edd77c181ff": "6c8d01412777ab07100e1ada2867b49c",
".git/objects/e7/d9380603338dd70fd545a075450987ab53e04f": "8f62f9cd6ab53c3ed08de206615d7ff7",
".git/objects/ed/ebbaef3db6445efa5bdafe66d3293beea5a8c3": "815650c66b45152178025d48f812fba8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fb/d9b8ec74c138ea78f38160f0ddf6d01c80f9a0": "b14d572c8963306d2532fe0f617d6ffe",
".git/refs/heads/main": "e6f07dc9ed898d44c67f51d9e01372f4",
".git/refs/remotes/origin/main": "e6f07dc9ed898d44c67f51d9e01372f4",
"assets/AssetManifest.bin": "db7f6eaf2881acf387ec7b879ab4d73a",
"assets/AssetManifest.bin.json": "c883f24b6fd6ae23036766246774d992",
"assets/AssetManifest.json": "b73ccd126208292af4294b6600e74816",
"assets/assets/img/campus-sell-favicon-black.png": "31118d71f19bd29d1de05edf8afbbcba",
"assets/assets/img/campus-sell-favicon-color.png": "c9a97aa3d09ee829cea71283d7ece2f4",
"assets/assets/img/campus-sell-favicon-white.png": "d10277f86bc3ade3483fc5e810fa3676",
"assets/assets/img/campus-sell-logo-transparent.png": "5e0e5a8582c52beeaccae8f368c1a3b7",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4153145b66281098ee774c86ffc9a1f6",
"assets/NOTICES": "9b94037fb62fe2903ab4968307a71988",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7305117efc30c0d46e6767d5ceb44fef",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ff3c5b5fc7fcd9ac654106ed20698584",
"icons/Icon-192.png": "b0a677476f7dc50801eb7ee07c836f22",
"icons/Icon-512.png": "40cf15de31d921ac90eb8ceaf96ae369",
"icons/Icon-maskable-192.png": "b0a677476f7dc50801eb7ee07c836f22",
"icons/Icon-maskable-512.png": "40cf15de31d921ac90eb8ceaf96ae369",
"index.html": "1a4c69eb10fa35f069d875f9c88a4ac0",
"/": "1a4c69eb10fa35f069d875f9c88a4ac0",
"main.dart.js": "84c0f9e21a239d875d310f5c9b01f3f9",
"manifest.json": "4a10ed73db0160133ecab05ff49cc69f",
"version.json": "653fe60457d27f62855f15e5ba7aeeca"};
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
