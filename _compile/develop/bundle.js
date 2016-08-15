/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _sendForm = __webpack_require__(1);

	var _sendForm2 = _interopRequireDefault(_sendForm);

	var _floatMenu = __webpack_require__(2);

	var _floatMenu2 = _interopRequireDefault(_floatMenu);

	var _tabs = __webpack_require__(3);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _map = __webpack_require__(4);

	var _map2 = _interopRequireDefault(_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Нажатие на бургер
	document.querySelector('.burger').addEventListener('click', function () {
	  var menu = document.querySelector('.menu');
	  menu.classList.add('open_menu');
	  menu.classList.remove('close_menu');
	});

	document.querySelector('.menu .closer').addEventListener('click', function () {
	  var menu = document.querySelector('.menu');
	  menu.classList.remove('open_menu');
	  menu.classList.add('close_menu');
	});

	// Отправка формы обратной связи скрипту для отправления по почте
	var data = {
	  name: 'input[name="name"]',
	  email: 'input[name="email"]',
	  telephone: 'input[name="telephone"]'
	};

	//new SendFunc('application', data, 'mail');

	$(window).load(function () {

	  $('.flexslider').flexslider({
	    animation: "slide",
	    animationLoop: false
	  });

	  $("img, a").on("dragstart", function (event) {
	    event.preventDefault();
	  });

	  $(document).on('click', 'a.anchor', function () {
	    $('html, body').animate({ scrollTop: $('a[name="' + this.hash.slice(1) + '"]').offset().top - 148 }, 1000);
	    return false;
	  });
	});

	(0, _map2.default)();
	(0, _tabs2.default)();

	// События модального окна
	document.querySelector('nav .number-block .button-open-form').addEventListener('click', function () {
	  document.querySelector('.modal').classList.remove('close_modal');
	});

	document.querySelector('.modal .closer').addEventListener('click', function () {
	  document.querySelector('.modal').classList.add('close_modal');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sendForm = function sendForm(id, dates, idMail) {
	  _classCallCheck(this, sendForm);

	  document.getElementById(id).addEventListener('submit', function () {

	    var data = {
	      name: document.querySelector(dates.name.value),
	      email: document.querySelector(dates.email.value),
	      telephone: document.querySelector(dates.telephone.value)
	    };

	    $("#application").submit(function () {
	      $.ajax({
	        type: "POST",
	        url: "mail.php",
	        data: data
	      }).done(function (value) {
	        var mail = document.getElementById(idMail);

	        mail.innerHTML = value;
	        mail.classList.remove('not_visible_mail');

	        setTimeout(function () {
	          $("#" + id).trigger("reset");
	          mail.classList.add('not_visible_mail');
	        }, 1000);
	      });

	      return false;
	    });
	  });
	};

	exports.default = sendForm;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Принимает объект с настройками для меню
	var FloatMenu = function () {
	  function FloatMenu() {
	    _classCallCheck(this, FloatMenu);
	  }

	  _createClass(FloatMenu, [{
	    key: 'construnctor',

	    // @params - object
	    value: function construnctor(params) {
	      this.elem = params.elem;
	      this.height = params.height;
	      this.first_class = params.first_class;
	      this.second_class = params.second_class;
	      this.active_class = params.first_class;
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      if (window.pageYOffset > this.height) {
	        this.elem.classList.add(this.first_class);
	        this.elem.classList.add(this.second_class);
	      } else {
	        this.elem.classList.add(this.first_class);
	      }

	      window.addEventListener('scroll', function () {

	        if (window.pageYOffset > _this.height && _this.active_class === _this.first_class) {
	          _this.elem.classList.add(_this.second_class);
	          _this.active_class = _this.second_class;
	        } else if (window.pageYOffset < _this.height && _this.active_class === _this.second_class) {
	          _this.elem.classList.remove(_this.second_class);
	          _this.active_class = _this.first_class;
	        }
	      });
	    }
	  }]);

	  return FloatMenu;
	}();

	exports.default = FloatMenu;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var tabs = [].concat(_toConsumableArray(document.querySelectorAll('.advice footer .button_bottom .text')));
	  var info_blocks = [document.querySelector('.choose'), document.querySelector('.profit'), document.querySelector('.price'), document.querySelector('.size')];

	  // Вешаем обработчики событий на табы
	  tabs.forEach(function (tab, index) {
	    tab.addEventListener('click', function () {
	      if (!this.classList.contains('active')) {
	        document.querySelector('.advice footer .button_bottom .text.active').classList.remove('active');
	        this.classList.add('active');

	        var active_elem = document.querySelector('.open_tab');

	        active_elem.classList.remove('open_tab');
	        active_elem.classList.add('close_tab');
	        info_blocks[index].classList.remove('close_tab');
	        info_blocks[index].classList.add('open_tab');
	      }
	    });
	  });
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function () {
	  initMap();
	  window.application.map.markersObject = [];
	  window.application.map.filterArr = ['shop', 'learn', 'relax', 'health'];

	  var marker_1 = new CreateMarker([49.784862, 73.135996], 'images/markers/enbek.png', 'health', 'Спортивный клуб Енбек').add();
	  window.application.map.markersObject.push(marker_1);

	  var marker_2 = new CreateMarker([49.776823, 73.138847], 'images/markers/hyndai.png', 'shop', 'Центр авто hyndai').add();
	  window.application.map.markersObject.push(marker_2);

	  var marker_3 = new CreateMarker([49.778955, 73.127570], 'images/markers/akkniet.png', 'learn', 'Детский сад №23').add();
	  window.application.map.markersObject.push(marker_3);

	  var marker_4 = new CreateMarker([49.779375, 73.140489], 'images/markers/winPark.png', 'relax', 'Парк победы').add();
	  window.application.map.markersObject.push(marker_4);
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function initMap() {
	  window.application = {};
	  window.application.map = {};
	  window.application.map.markers = [];
	  window.application.map.markersFilter = 'all';

	  window.application.map.map = new google.maps.Map(document.querySelector('#map'), {
	    center: { lat: 49.784215, lng: 73.137432 },
	    zoom: 14,
	    scrollwheel: false,
	    disableDefaultUI: true
	  });

	  [].concat(_toConsumableArray(document.querySelectorAll('.map footer .button_bottom .text'))).forEach(function (item, index) {
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

	var CreateMarker = function () {
	  function CreateMarker(coords, icon, filterAttr, title) {
	    _classCallCheck(this, CreateMarker);

	    this.title = title;
	    this.coords = coords;
	    this.icon = icon;
	    this.filterAttr = filterAttr;
	  }

	  _createClass(CreateMarker, [{
	    key: 'add',
	    value: function add() {
	      var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(this.coords[0], this.coords[1]),
	        title: this.title,
	        icon: this.icon
	      });

	      if (this.filterAttr === window.application.map.markersFilter || window.application.map.markersFilter === 'all') {
	        marker.setMap(window.application.map.map);
	        window.application.map.markers.push(marker);
	      }

	      return this;
	    }
	  }], [{
	    key: 'addAll',
	    value: function addAll() {
	      window.application.map.markersObject.forEach(function (item) {
	        item.add();
	      });
	    }
	  }, {
	    key: 'clearAll',
	    value: function clearAll() {
	      window.application.map.markers.forEach(function (item) {
	        item.setMap(null);
	      });
	      window.application.map.markers.length = 0;
	    }
	  }]);

	  return CreateMarker;
	}();

/***/ }
/******/ ]);