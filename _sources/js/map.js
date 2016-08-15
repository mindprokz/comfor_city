export default function () {
  initMap();
  window.application.map.markersObject = [];
  window.application.map.filterArr = ['shop', 'learn', 'relax', 'health'];

  let marker_1 = new CreateMarker([49.784862, 73.135996], 'images/markers/enbek.png', 'health', 'Спортивный клуб Енбек').add();
  window.application.map.markersObject.push(marker_1);

  let marker_2 = new CreateMarker([49.776823, 73.138847], 'images/markers/hyndai.png', 'shop', 'Центр авто hyndai').add();
  window.application.map.markersObject.push(marker_2);

  let marker_3 = new CreateMarker([49.778955, 73.127570], 'images/markers/akkniet.png', 'learn', 'Детский сад №23').add();
  window.application.map.markersObject.push(marker_3);

  let marker_4 = new CreateMarker([49.779375, 73.140489], 'images/markers/winPark.png', 'relax', 'Парк победы').add();
  window.application.map.markersObject.push(marker_4);

}

function initMap() {
  window.application = {};
  window.application.map = {};
  window.application.map.markers = [];
  window.application.map.markersFilter = 'all';

  window.application.map.map = new google.maps.Map(document.querySelector('#map'), {
    center: {lat: 49.784215, lng: 73.137432},
    zoom: 14,
    scrollwheel : false,
    disableDefaultUI: true
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
    this.title = title;
    this.coords = coords;
    this.icon = icon;
    this.filterAttr = filterAttr;
  }

  add() {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.coords[0], this.coords[1]),
        title: this.title,
        icon: this.icon
    });

    if (this.filterAttr === window.application.map.markersFilter || window.application.map.markersFilter === 'all' ) {
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
