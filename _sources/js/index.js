import FloatMenu from './floatMenu'
import tabsInit from './tabs'
import mapInit from './map'
import plansInit from './plans'
import sliderInit from './slider'

// Нажатие на бургер
document.querySelector('.burger').addEventListener('click', () => {
  let menu = document.querySelector('.menu');
  menu.classList.add('open_menu');
  menu.classList.remove('close_menu');
});

document.querySelector('.menu .closer').addEventListener('click', () => {
  let menu = document.querySelector('.menu');
  menu.classList.remove('open_menu');
  menu.classList.add('close_menu');
});



$(window).load(function() {
  // fancybox
  $(".fancybox").fancybox({
  	openEffect: 'fade',
  	closeEffect: 'fade'
  });

  sliderInit();

  $("img, a").on("dragstart", function (event) { event.preventDefault(); });

  $(document).on('click', 'a.anchor', function () {
    $('html, body').animate({ scrollTop: pageYOffset + $('a[name="'+this.hash.slice(1)+'"]')[0].getBoundingClientRect().top * 0.75 - 135 }, 1000 );
    let menu = document.querySelector('.menu');
    menu.classList.remove('open_menu');
    menu.classList.add('close_menu');
    return false;
   });
});

mapInit();
tabsInit();
plansInit();

// События модального окна
document.querySelector('nav .number-block .button-open-form').addEventListener('click', function () {
  document.querySelector('.modal_main').classList.remove('close_modal');
});

document.querySelector('.modal_main .closer').addEventListener('click', function () {
  document.querySelector('.modal_main').classList.add('close_modal');
});


document.querySelector('.modal_calculate .closer').addEventListener('click', function () {
  document.querySelector('.modal_calculate').classList.add('close_modal');
});

// калькулятор
document.querySelector('#calculator').addEventListener('submit', (e) => {
  e.preventDefault();

  let data = {
    flat: document.querySelector('#calculator input[name="flat"]').value,
    first_pay: document.querySelector('#calculator input[name="first_pay"]').value,
    long: document.querySelector('#calculator input[name="long"]').value,
    percent: document.querySelector('#calculator input[name="percent"]').value,
  }

  let m = (data.flat - data.first_pay),
    p = m * (data.percent / 100) * data.long,
    res = (m + p) / (12 * data.long),
    _res = Math.round(res)

  document.querySelector('#calculator #price').textContent = _res + ' тенге';
});

document.querySelector('#flat_calculator').addEventListener('click', e => {
  document.querySelector('.modal_calculate').classList.remove('close_modal');
});

// Отправка писем
document.querySelector('#application').addEventListener('submit', (e) => {
  e.preventDefault();

  var data = {
    name: document.querySelector('.modal_main form input[name="name"]').value,
    mail: document.querySelector('.modal_main form input[name="email"]').value,
    telephone: document.querySelector('.modal_main form input[name="telephone"]').value,
  }

  $.ajax({
    type: "POST",
    url: "http://comfortcity.kz/wp-content/themes/comfort/mail.php",
    data: data
  }).done(function (value) {
    let mail = document.getElementById('mail');

    mail.innerHTML = value;
    mail.classList.remove('not_visible_mail');

    setTimeout(function () {
      mail.innerHTML = " ";

      mail.classList.add('not_visible_mail');
    }, 3000);

  });
});

// YaMetrix
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter39993590 = new Ya.Metrika({
                id:39993590,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
