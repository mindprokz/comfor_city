export default function() {
  var tabs = [...document.querySelectorAll('.advice footer .button_bottom .text')];
  var info_blocks = [
    document.querySelector('.choose'),
    document.querySelector('.profit'),
    document.querySelector('.profit_2'),
    document.querySelector('.flat_price'),
  ];

  // Вешаем обработчики событий на табы
  tabs.forEach( (tab, index) => {
    tab.addEventListener('click', function (){
      if (!this.classList.contains('active')) {
        document.querySelector('.advice footer .button_bottom .text.active').classList.remove('active');
        this.classList.add('active');

        let active_elem = document.querySelector('.open_tab');

        active_elem.classList.remove('open_tab');
        active_elem.classList.add('close_tab');
        info_blocks[index].classList.remove('close_tab');
        info_blocks[index].classList.add('open_tab');
      }
    });
  });
};
