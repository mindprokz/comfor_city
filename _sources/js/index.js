import SendFunc from './sendForm.js';
import FloatMenu from './floatMenu.js';

//   $(document).ready(function () {
//     'use strict';
// //Аякс отправка форм
//     $("#application").submit(function () {
//       var data = {
//         name : document.querySelector('input[name="name"]').value,
//         email : document.querySelector('input[name="email"]').value,
//         telephone : document.querySelector('input[name="telephone"]').value
//       };
//       $.ajax({
//         type: "POST",
//         url: "mail.php",
//         data: data
//       }).done(function (value) {
//         $('#mail')[0].innerHTML = value;
//         $('#mail').removeClass('not_visible_mail');
//         setTimeout(function () {
//           $("#form").trigger("reset");
//         }, 1000);
//       });
//     return false;
//     });
//  function  test() {
// 	console.log('test!');
// }
//
//   });

//Плавающее меню
// new FloatMenu({
//     elem : document.getElementById('navigation'),
//     height : 200,
//     first_class : 'menu_fixed_on_top',
//     second_class : 'float_menu'
//   }).init();

// Нажатие на бургер
document.querySelector('.burger').addEventListener('click', () => {
  let menu = document.querySelector('.menu');
  menu.classList.add('open_menu');
  menu.classList.remove('close_menu');
});

document.querySelector('.closer').addEventListener('click', () => {
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
  });

  $("img, a").on("dragstart", function (event) { event.preventDefault(); });

  $(document).on('click', 'a.anchor', function () {
       $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 148 }, 1000 );
       return false;
   });
});
