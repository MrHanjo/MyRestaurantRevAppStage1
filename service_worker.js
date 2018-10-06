self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restcache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'css/styles.css',
        'data/restaurants.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
        //not sure what to do here...
        //'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        //'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
      ]);
    })
  );
  console.log('alksaldjfkser INSTALLED')
});
    

/*
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function)
  )
    console.log('alksaldjfkser ACTIVATED')
})

self.addEventListener('fetch', function(evt) {
    console.log('alksaldjfkser fetched', evt.request.url);
})
*/