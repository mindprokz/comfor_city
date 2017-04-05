export default function initSlider() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
  });

  clearAllSlider();

  document.querySelector('.main_1 .line_month li').classList.add('active');

  document.querySelector('.main_1 .flexslider').style.display = 'block';

  [...document.querySelectorAll('.main_1 .line_month li')].forEach( (el, num) => {
    el.addEventListener('click', e => {
      clearAllSlider();
      document.querySelector('.main_1 .line_month li.active').classList.remove('active');
      el.classList.add('active');
      document.querySelectorAll('.main_1 .flexslider')[num].style.display = 'block';
      $('.main_1 .flexslider').resize();
    });
  });
}


function clearAllSlider() {
  [...document.querySelectorAll('.main_1 .flexslider')].forEach(el => {
    el.style.display = 'none';
  });
}
