import SendFunc from './sendForm.js';
import FloatMenu from './floatMenu.js';
import tabsInit from './tabs.js';
import mapInit from './map.js';
import plansInit from './plans.js';

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

// Отправка формы обратной связи скрипту для отправления по почте
let data = {
  name : 'input[name="name"]',
  email : 'input[name="email"]',
  telephone : 'input[name="telephone"]'
};

//new SendFunc('application', data, 'mail');

$(window).load(function() {

  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
  });

  $("img, a").on("dragstart", function (event) { event.preventDefault(); });

  $(document).on('click', 'a.anchor', function () {
       $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 148 }, 1000 );
       return false;
   });
});

mapInit();
tabsInit();
plansInit();

// События модального окна
document.querySelector('nav .number-block .button-open-form').addEventListener('click', function () {
  document.querySelector('.modal').classList.remove('close_modal');
});

document.querySelector('.modal .closer').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('close_modal');
});
