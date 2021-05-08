'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0b7beb0d0fbccbc4ff0be1f8af505997",
".git/config": "4e5066bbf457e5625ad8783eb0835c9d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "26eddba386d6c04d66c593a8a77a4fc7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "323927ee504ac107b10880f2e73d5b12",
".git/logs/refs/heads/master": "323927ee504ac107b10880f2e73d5b12",
".git/logs/refs/remotes/deploy-web/master": "5da3c92c24d93e9bda9b6459db6bfd81",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/7980d3dd4eb0b9faa7a5d9f94b7e46bd5a22dc": "6cbadae1f580226181893532c8dbea51",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/43/e249e9edcefb14de68ebccd03d6cb496fdc6a9": "8c4e0a70707fea93e70c01a1589db529",
".git/objects/47/be42074d24b1018f44d4f7e888da60474fecce": "c56cf45a76b6754bf6d3823015391420",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4e/2b820a6064e23b9cc1c3e4f65d20a868464461": "a41bde3b7611f8549deee369c1cd68b7",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/6e/eca73dcc27b9b04dd2e3962e748c2542f6f3e6": "f7f28270d4f30dead7d5d0dd75557d2f",
".git/objects/78/b180078a6a226a2a0338df41dd3a9e2773ed8f": "155f0dbfc73ae8f672934e4d84839eb0",
".git/objects/78/eb1ba6e4308d47b416e2bf0ba4c0da37101cb9": "aff2061929e915a52ba662ab65e0e5fd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/99/c8e37b6006db4bd1b9c4aa07e7b7b9460ffce2": "84309439aff2b7b751d1a1ab5b3ac5cb",
".git/objects/9a/6de177ff35a866f77784f31e0d9417b5c30827": "f29e98b3a2b0cef9005b90519f340f85",
".git/objects/a0/59ce934fc48e72726952b3b8da5a9c37d64a63": "569249f05ba1cc6837c89d9a6f44065f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ad/fc3b378705526db51345874cbe05b2b3fc66d7": "4123ade031a20cecde068e38e8ab9f19",
".git/objects/b0/efb75e1fe7e5dfb6bb67928e7b17c5845393eb": "31fe6d60b92c18862dac509983c817c5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/a1ed366dcda129d5b6e03af89f08448310629d": "3dc9aebdc92b0619738a01a71b861332",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/cb/2c37cc08e90d1372558077ddb41f54477aba14": "8e28f81c36fc1816a1091a9fce40dfb6",
".git/objects/d3/842714cab82c5cbc477531b554b17b5fe464e2": "52b90f8e286f604395d3b9f66196db7b",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/affe71329aef693c05bf7fae73c32d9d5e85f9": "37cfa36b38981d38605842dbc7d70af4",
".git/objects/ec/d7a90d7ce4092b21b1ed994ca7d2b89e3da05a": "7b0632d9ca46af3142e77275fbca22bd",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/refs/heads/master": "4375d3bd5c7dfc16bb61129b0370f03d",
".git/refs/remotes/deploy-web/master": "4375d3bd5c7dfc16bb61129b0370f03d",
"assets/AssetManifest.json": "e7eb717790f556fd097e7a018c34f6dc",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/black.png": "f723af955cb48014c916c3c64c59a1af",
"assets/images/white.png": "441ed49022aa333eb2e086c573eebf47",
"assets/NOTICES": "49378555d8cdff4ef955639b7431faa8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"coherentcloud.github.io/.git/config": "561aac444574091e2bac6aad1f871eca",
"coherentcloud.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"coherentcloud.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"coherentcloud.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"coherentcloud.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"coherentcloud.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"coherentcloud.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"coherentcloud.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"coherentcloud.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"coherentcloud.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"coherentcloud.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"coherentcloud.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"coherentcloud.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"coherentcloud.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"coherentcloud.github.io/.git/index": "850e143ba7868c0bd311d17cabd6c743",
"coherentcloud.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"coherentcloud.github.io/.git/logs/HEAD": "a8a0d29d3bf5492ebdc8496c67d24e9a",
"coherentcloud.github.io/.git/logs/refs/heads/master": "a8a0d29d3bf5492ebdc8496c67d24e9a",
"coherentcloud.github.io/.git/logs/refs/remotes/origin/HEAD": "a8a0d29d3bf5492ebdc8496c67d24e9a",
"coherentcloud.github.io/.git/objects/01/7a109232394bc1fbbca0767e910d4f51d0a0d8": "f7e1ab9fb0c6176603fbb5baf7242058",
"coherentcloud.github.io/.git/objects/03/255c6a6cb79099743c93178674239889683a02": "d5a7accdb68f0111ee1b5d8088b3f751",
"coherentcloud.github.io/.git/objects/38/6804b05dd1299ce00302cc5925dc1512e206c9": "8db1999b5caa1229362642dbbed80e81",
"coherentcloud.github.io/.git/objects/55/8574b5b161fb9daff40d80b535f530371bba94": "78899ebca41ae3954f3a0e572772eec0",
"coherentcloud.github.io/.git/objects/a3/b881a399e702af1f5a8ab1c44fadc80f1e6f02": "401cc51e99ba43d9207e7ab4cd5e6363",
"coherentcloud.github.io/.git/objects/a5/f233c6042b187ffcfbb8d19563e470932e322f": "1b2591709da9dbe3f368f1c059aa0a14",
"coherentcloud.github.io/.git/objects/f0/17d138fdd756f8ec20578e146af550ef14dacb": "dc962664df28db7b74321f3d4248946a",
"coherentcloud.github.io/.git/packed-refs": "6741e5e753aec61ff6847978cc51f751",
"coherentcloud.github.io/.git/refs/heads/master": "aa8e5d1d02bb7da5b49b1f4f04235a27",
"coherentcloud.github.io/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"coherentcloud.github.io/index.html": "b8e1bd1ec237d72104ce5ea431ce4b5a",
"/": "1068bc47634e11d0a1b6bce5043c303c",
"coherentcloud.github.io/styles.css": "bf94f4d43c6d08f69e319424b988c5db",
"coherentcloud.github.io/transactions.json": "2ad0d22401890c75d56cceab3d7f821d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1068bc47634e11d0a1b6bce5043c303c",
"main.dart.js": "66a58162c1834c542d20af291f1bcf8f",
"manifest.json": "780b900d4510a738a377c269c88bc568",
"version.json": "12ea2f4b3b95cba23fdea7c306fd6b99"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
