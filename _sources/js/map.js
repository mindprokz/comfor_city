export default function () {
  initMap();
  window.application.map.markersObject = [];
  window.application.map.filterArr = ['shop', 'learn', 'relax', 'health'];

  /***************************
  // Filter Shop markers start
  ***************************/
  let _coordsShop = [
    [49.809678, 73.137317],
    [49.787851, 73.136335],
    [49.787488, 73.145546],
    [49.777632, 73.145873],
    [49.774681, 73.150959],
    [49.776367, 73.134815],
    [49.795187, 73.130085],
    [49.793836, 73.124571],
    [49.802035, 73.112849],
    [49.802039, 73.099932],
    [49.802115, 73.095885],
    [49.797086, 73.093670],
    [49.804551, 73.095178],
    [49.787017, 73.108227],
    [49.807869, 73.105850],
    [49.809002, 73.105055],
    [49.813257, 73.088745],
    [49.780744, 73.127031],
  ];

  let _markersImageShop = [
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/hyndai.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/zhiger.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/korzina.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/uzhni.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/uzhni.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/prospekt.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/giper.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/inomark.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/avangard.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/krepesh.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/laki.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/BMW.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/style-a.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/palitra.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/avtomir.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/autocenter.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/continental.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/main.png',
  ];

  // Добавляем на карту метки
  _coordsShop.forEach( (item, index) => {
    window.application.map.markersObject.push(new CreateMarker(item, _markersImageShop[index], 'shop').add());
  });

  /***************************
  // Filter Shop markers end
  ***************************/


  /***************************
  // Filter relax markers start
  ***************************/
  let _coordsRelax = [
    [49.792703, 73.135224],
    [49.792004, 73.133393],
    [49.790787, 73.136253],
    [49.773668, 73.135219],
    [49.783925, 73.136162],
    [49.781341, 73.134767],
    [49.775265, 73.125921],
    [49.776326, 73.126446],
    [49.780744, 73.127031],
  ];

  let _markersImagerelax = [
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/serik.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/tennis.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/arena.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/enbek.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/winPark.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/sobor.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/etnopark.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/mechet.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/main.png',
  ];

  // Добавляем на карту метки
  _coordsRelax.forEach( (item, index) => {
    window.application.map.markersObject.push(new CreateMarker(item, _markersImagerelax[index], 'relax').add());
  });

  /***************************
  // Filter relax markers end
  ***************************/


  /***************************
  // Filter learn markers start
  ***************************/

  let _coordsLearnd = [
    [49.794825, 73.152396],
    [49.782457, 73.151913],
    [49.773810, 73.135137],
    [49.796350, 73.095808],
    [49.810373, 73.111824],
    [49.813272, 73.111196],
    [49.810131, 73.087690],
    [49.780744, 73.127031],
  ];

  let _markersImageLearn = [
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/altyn.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/erkentai.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/102.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/akbole.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/akkniet.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/gramot.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/gvozd.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/main.png',
  ];

  // Добавляем на карту метки
  _coordsLearnd.forEach( (item, index) => {
    window.application.map.markersObject.push(new CreateMarker(item, _markersImageLearn[index], 'learn').add());
  });
  /***************************
  // Filter learn markers end
  ***************************/

  /***************************
  // Filter health markers start
  ***************************/

  let _coordsHealth = [
    [49.787168, 73.145247],
    [49.780744, 73.127031],
  ];

  let _markersImageHealth = [
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/polikl.png',
    'http://comfortcity.kz/wp-content/themes/comfort/images/markers/main.png',
  ]

  // Добавляем на карту метки
  _coordsHealth.forEach( (item, index) => {
    window.application.map.markersObject.push(new CreateMarker(item, _markersImageHealth[index], 'health').add());
  });
  /***************************
  // Filter health markers end
  ***************************/

}

function initMap() {
  window.application = {};
  window.application.map = {};
  window.application.map.markers = [];
  window.application.map.markersFilter = 'all';

  window.application.map.map = new google.maps.Map(document.querySelector('#map'), {
    center: {lat: 49.784215, lng: 73.137432},
    zoom: 15,
    scrollwheel : false,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
    },
  });

  [...document.querySelectorAll('.map footer .button_bottom .text')].forEach( (item, index) => {
    item.addEventListener('click', function () {
      if (window.application.map.markersFilter === 'all') {
        this.classList.add('active');
        window.application.map.markersFilter = window.application.map.filterArr[index];
        CreateMarker.clearAll();
        CreateMarker.addAll();
      } else if (this.classList.contains('active')) {
        this.classList.remove('active');
        window.application.map.markersFilter = 'all';
        CreateMarker.clearAll();
        CreateMarker.addAll();
      } else {
        document.querySelector('.button_bottom .text.active').classList.remove('active');
        this.classList.add('active');
        window.application.map.markersFilter = window.application.map.filterArr[index];
        CreateMarker.clearAll();
        CreateMarker.addAll();
      }
    });
  });
}

class CreateMarker {
  constructor(coords, icon, filterAttr, title) {
    this.coords = coords;
    this.icon = icon;
    this.filterAttr = filterAttr;
  }

  add() {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.coords[0], this.coords[1]),
        title: ' ',
        icon: this.icon
    });

    if (this.filterAttr === window.application.map.markersFilter || window.application.map.markersFilter === 'all' || this.filterAttr === 'all') {
      marker.setMap(window.application.map.map);
      window.application.map.markers.push(marker);
    }

    return this;
  }

  static addAll() {
    window.application.map.markersObject.forEach( (item) => {
      item.add();
    });
  }

  static clearAll() {
      window.application.map.markers.forEach( (item) => {
        item.setMap(null);
      });
      window.application.map.markers.length = 0;
  }
}
