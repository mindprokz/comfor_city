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

	var _plans = __webpack_require__(5);

	var _plans2 = _interopRequireDefault(_plans);

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
	(0, _plans2.default)();

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
	  var info_blocks = [document.querySelector('.choose'), document.querySelector('.profit'), document.querySelector('.profit_2'), document.querySelector('.size')];

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

	  /***************************
	  // Filter Shop markers start
	  ***************************/
	  var _coordsShop = [[49.809678, 73.137317], [49.787851, 73.136335], [49.787488, 73.145546], [49.777632, 73.145873], [49.774681, 73.150959], [49.776367, 73.134815], [49.795187, 73.130085], [49.793836, 73.124571], [49.802035, 73.112849], [49.802039, 73.099932], [49.802115, 73.095885], [49.797086, 73.093670], [49.804551, 73.095178], [49.787017, 73.108227], [49.807869, 73.105850], [49.809002, 73.105055], [49.813257, 73.088745]];

	  var _markersImageShop = ['images/markers/hyndai.png', 'images/markers/zhiger.png', 'images/markers/korzina.png', 'images/markers/uzhni.png', 'images/markers/uzhni.png', 'images/markers/prospekt.png', 'images/markers/giper.png', 'images/markers/inomark.png', 'images/markers/avangard.png', 'images/markers/krepesh.png', 'images/markers/laki.png', 'images/markers/BMW.png', 'images/markers/style-a.png', 'images/markers/palitra.png', 'images/markers/avtomir.png', 'images/markers/autocenter.png', 'images/markers/continental.png'];

	  // Добавляем на карту метки
	  _coordsShop.forEach(function (item, index) {
	    window.application.map.markersObject.push(new CreateMarker(item, _markersImageShop[index], 'shop').add());
	  });

	  /***************************
	  // Filter Shop markers end
	  ***************************/

	  /***************************
	  // Filter relax markers start
	  ***************************/
	  var _coordsRelax = [[49.792703, 73.135224], [49.792004, 73.133393], [49.790787, 73.136253], [49.773668, 73.135219], [49.783925, 73.136162], [49.781341, 73.134767], [49.775265, 73.125921], [49.776326, 73.126446]];

	  var _markersImagerelax = ['images/markers/serik.png', 'images/markers/tennis.png', 'images/markers/arena.png', 'images/markers/enbek.png', 'images/markers/winPark.png', 'images/markers/sobor.png', 'images/markers/etnopark.png', 'images/markers/mechet.png'];

	  // Добавляем на карту метки
	  _coordsRelax.forEach(function (item, index) {
	    window.application.map.markersObject.push(new CreateMarker(item, _markersImagerelax[index], 'relax').add());
	  });

	  /***************************
	  // Filter relax markers end
	  ***************************/

	  /***************************
	  // Filter learn markers start
	  ***************************/

	  var _coordsLearnd = [[49.794825, 73.152396], [49.782457, 73.151913], [49.773810, 73.135137], [49.796350, 73.095808], [49.810373, 73.111824], [49.813272, 73.111196], [49.810131, 73.087690]];

	  var _markersImageLearn = ['images/markers/altyn.png', 'images/markers/erkentai.png', 'images/markers/102.png', 'images/markers/akbole.png', 'images/markers/akkniet.png', 'images/markers/gramot.png', 'images/markers/gvozd.png'];

	  // Добавляем на карту метки
	  _coordsLearnd.forEach(function (item, index) {
	    window.application.map.markersObject.push(new CreateMarker(item, _markersImageLearn[index], 'learn').add());
	  });
	  /***************************
	  // Filter learn markers end
	  ***************************/

	  /***************************
	  // Filter health markers start
	  ***************************/

	  var _coordsHealth = [[49.787168, 73.145247]];

	  var _markersImageHealth = ['images/markers/polikl.png'];

	  // Добавляем на карту метки
	  _coordsHealth.forEach(function (item, index) {
	    window.application.map.markersObject.push(new CreateMarker(item, _markersImageHealth[index], 'health').add());
	  });
	  /***************************
	  // Filter health markers end
	  ***************************/
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
	    zoomControl: true,
	    zoomControlOptions: {
	      position: google.maps.ControlPosition.RIGHT_CENTER
	    }
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

	    this.coords = coords;
	    this.icon = icon;
	    this.filterAttr = filterAttr;
	  }

	  _createClass(CreateMarker, [{
	    key: 'add',
	    value: function add() {
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  // closer for plan_a
	  document.querySelector('.plan_A .closer').addEventListener('click', function () {
	    document.querySelector('.plan_A').classList.add('close');
	  });

	  // opener for plan_a
	  document.querySelector('.first_front').addEventListener('click', function () {
	    document.querySelector('.plan_A').classList.remove('close');
	  });

	  // closer for plan_b
	  document.querySelector('.plan_B .closer').addEventListener('click', function () {
	    document.querySelector('.plan_B').classList.add('close');
	  });

	  // opener for plan_b
	  document.querySelector('.second_front').addEventListener('click', function () {
	    document.querySelector('.plan_B').classList.remove('close');
	  });
	};

/***/ }
/******/ ]);