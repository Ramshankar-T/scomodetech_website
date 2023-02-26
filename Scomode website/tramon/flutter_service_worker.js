'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "72e6a25f035cb50d497d105b64d601e1",
"assets/assets/icons/admin.png": "dc8bcad7040068e6051c00543695f3db",
"assets/assets/icons/alarm.svg": "a023a59d7f15e0d9c92303a0016ba3ce",
"assets/assets/icons/alarm_history.svg": "99d5295d76c6a925422bbdfff3ca64ec",
"assets/assets/icons/alert_noti.svg": "7a068dc876314a87fa7795a29f7984fb",
"assets/assets/icons/battery.svg": "1e5dd57a8e6507641f2c582aa2a30604",
"assets/assets/icons/bell.png": "581e168b2d745fbdf6b4e0467abbddd5",
"assets/assets/icons/cabinet.svg": "bcc1b5a8f31eaabe1bf73932ea7a0a79",
"assets/assets/icons/calender.svg": "1fdc64d20849454274f201ef7a43d110",
"assets/assets/icons/controller.svg": "94feedf701c969a4801a3771e2c35cfd",
"assets/assets/icons/controller_bg.png": "4d979f0abadb71bedec5d0e823906deb",
"assets/assets/icons/controller_bw.svg": "ecb2a815a9cbe47be7b34041d22efcd9",
"assets/assets/icons/dashboard.png": "6186e931fda6bbeec07d881d6f96328f",
"assets/assets/icons/dashboard.svg": "29c97b5b7e455af467fbc22d69fcb66e",
"assets/assets/icons/download.svg": "08026cd322cde1f991d875b56983252c",
"assets/assets/icons/downward_arrow.svg": "b917d5c3af6cafe10a26acf9e0346c82",
"assets/assets/icons/eye.svg": "cadc9145b20a4e6ce97aefedf20ee814",
"assets/assets/icons/filter.svg": "8214caf51abc048d16201038c5224485",
"assets/assets/icons/info.svg": "837bc3fd369586532e689830fdc5074a",
"assets/assets/icons/info_white.svg": "7e3a8d971ec5df53441b45ef65571715",
"assets/assets/icons/logout.svg": "fb842374a6d0da16b1c99d81bb10ae28",
"assets/assets/icons/maxis_logo.png": "96df5b7dbabbafa51040837a683d1d89",
"assets/assets/icons/notification.svg": "0b4b1a0da609826174f891caa89ba031",
"assets/assets/icons/operator.svg": "b1fee96e6ed5588fa33f22898a80d2f5",
"assets/assets/icons/power.svg": "a1507675a8c9eea66bb0f054d23f7f19",
"assets/assets/icons/print.svg": "391394dcbda233423cda7617bc39b70c",
"assets/assets/icons/report.png": "690af85355a69c0b7f6fbb3c49d9139f",
"assets/assets/icons/report.svg": "11d05abd7d5456dfbb730db70e26110c",
"assets/assets/icons/report_history.svg": "9433472e3ffc874b86564b3161f1f562",
"assets/assets/icons/search.svg": "807a653a30205b4e90477bcb21576467",
"assets/assets/icons/sites.svg": "16cd96d537e205d37b8b852411fe13ee",
"assets/assets/icons/sites_bw.svg": "5ad38c6b5e5a45a5f786fe449a61965b",
"assets/assets/icons/site_bg.png": "454907e6e12d371d2c3b9894317ba32f",
"assets/assets/icons/stat_card_icon.svg": "98189d3e95155d1ddadfe5c5c495eb4c",
"assets/assets/icons/tower.svg": "7b9500c22308592281f2e95c1362e014",
"assets/assets/icons/upward_arrow.svg": "e16cd524f2dbb00758decf8df1fbbc6c",
"assets/assets/images/acdc.png": "22d5d342f7af82626a5bad290b5f3003",
"assets/assets/images/fuel.png": "593a6671180cad1e2a57fdf98bc7e227",
"assets/assets/images/genset.png": "26a5b04ff70445422435f8c90670aa95",
"assets/assets/images/grid.png": "9caef97643793f4dd7226d36add4de8c",
"assets/assets/images/landing_bg.png": "8be682dbdd81ed504f5d0f8f26af967e",
"assets/assets/images/li-lon_batt.png": "428b0c7b093faffb994bb79777b0bad0",
"assets/assets/images/load.png": "04f6f32e54dc381f25bfafd20f406292",
"assets/assets/images/login_bg.jpg": "f77ae21baf11532961ab5e593b8260e5",
"assets/assets/images/login_bg.png": "5177ecf1a15f309af2f928be6d36fdfc",
"assets/assets/images/maxis.jpeg": "a57320e50a43d1ce5923dcffd3242b98",
"assets/assets/images/scomode.png": "9eefa1acb6c38f5f617778e4ab332c9b",
"assets/assets/images/scomode_logo.png": "171fdbcf4237e143c4637470f2d2087f",
"assets/assets/images/solar.png": "0cd71394cf88e1df27e85a022b4fd8df",
"assets/assets/images/solar_irradiance.png": "43757723e2c5393f7af2b0cb3d464d4f",
"assets/assets/images/tms.png": "2ce8a4c32f88ea67f870d55bcee0821d",
"assets/assets/images/tower.png": "cd42f9d581d1358053da0edc2bd15b1c",
"assets/assets/images/vrla_batt.png": "67af2d09591984f31738ca1db74d9c60",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8ce8f06ccf6b60cad7ec7d898d96371c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.jpeg": "a57320e50a43d1ce5923dcffd3242b98",
"index.html": "990a89e0f8ee95e25d768d4006ef0065",
"/": "990a89e0f8ee95e25d768d4006ef0065",
"main.dart.js": "87db5b4b4e7574bcee9eeae47801887d",
"manifest.json": "6ce0884eb6f188e5879ccac61a3bc8cf",
"version.json": "1f6d17a6f66610868b9ac88a68aca68c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
