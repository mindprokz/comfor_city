export default function () {

  // closer for plan_a_office
  document.querySelector('.plan_A_office .closer').addEventListener('click', () => {
    document.querySelector('.plan_A_office').classList.add('close');
  });

  // opener for plan_a_office
  [...document.querySelectorAll('.first_front .shape_rect_office')].forEach( (elem) => {
    elem.addEventListener('click', () => {
      document.querySelector('.plan_A_office').classList.remove('close');
    });
  });

  // closer for plan_b_office
  document.querySelector('.plan_B_office .closer').addEventListener('click', () => {
    document.querySelector('.plan_B_office').classList.add('close');
  });

  // opener for plan_b_office
  [...document.querySelectorAll('.second_front .shape_rect_office')].forEach( (elem) => {
    elem.addEventListener('click', () => {
      document.querySelector('.plan_B_office').classList.remove('close');
    });
  });

  // closer for plan_c_office
  document.querySelector('.plan_C_office .closer').addEventListener('click', () => {
    document.querySelector('.plan_C_office').classList.add('close');
  });

  // opener for plan_c_office
  [...document.querySelectorAll('.third_front .shape_rect_office')].forEach( (elem) => {
    elem.addEventListener('click', () => {
      document.querySelector('.plan_C_office').classList.remove('close');
    });
  });

  // closer for plan_a
  document.querySelector('.plan_A .closer').addEventListener('click', () => {
    document.querySelector('.plan_A').classList.add('close');
  });

  // opener for plan_a
  [...document.querySelectorAll('.first_front .shape_rect')].forEach( (elem) => {
    elem.addEventListener('click', () => {
      document.querySelector('.plan_A').classList.remove('close');
    });
  });


  // closer for plan_b
  document.querySelector('.plan_B .closer').addEventListener('click', () => {
    document.querySelector('.plan_B').classList.add('close');
  });

  // opener for plan_b
  [...document.querySelectorAll('.second_front .shape_rect')].forEach( (elem) => {
    elem.addEventListener('click', () => {
      document.querySelector('.plan_B').classList.remove('close');
    });
  });


  // closer for plan_c
  document.querySelector('.plan_C .closer').addEventListener('click', () => {
    document.querySelector('.plan_C').classList.add('close');
  });

  // opener for plan_c
  [...document.querySelectorAll('.third_front .shape_rect')].forEach( (elem) => {
    elem.addEventListener('click', () => {
      document.querySelector('.plan_C').classList.remove('close');
    });
  });


  // closer for plan_info
  document.querySelector('.plan_info .closer').addEventListener('click', () => {
    document.querySelector('.plan_info').classList.add('close');
  });

  [...document.querySelectorAll('.plans .shape_rect')].forEach( (elem) => {
    elem.addEventListener('click', function () {
      let _elems = this.parentNode.nextElementSibling.children;

      window.flat = {
        porch: parseInt(_elems[0].textContent[0]),
        floor: parseInt(_elems[1].textContent[0])
      }
    });
  });

  open_planInfo();
}

function open_planInfo() {

  [...document.querySelectorAll('.plans .shape')].forEach( (item) => {
    item.addEventListener('click', () => {
      document.querySelector('.plan_info').classList.remove('close');
      document.querySelector('.plans').scrollLeft = 0;
    });
  });
}

/*
  @ARGUMENTS
    pricePlan : number -> Цена квартиры
    imgPlan : string -> ссылка на изображение
    type_plan : string -> Тип планировки
    quantityRoom_plan : number -> Количество комнат
    allSquare_plan : number -> общая площадь
    liveSquare_plan : number -> Жилая площадь
    kitchenSquare_plan : number -> Площадь кухни + гостинная
    bedroomOneSquare_plan : number -> Площадь первой спальни
    bedroomTwoSquare_plan : number -> Площадь второй спальни
    bedroomThirdSquare_plan : number -> Площадь третей спальни
    toulet_plan : number -> Кол-во туателов
    balcon_plan: number -> Кол-во балконов
    number_flat: number -> Номер квартиры
    livingRoom: number -> Площадь гостинной
    onlyKitchen: number -> площадь только кухни

*/

window.changeInfo = function changeInfo(pricePlan, imgPlan, type_plan, quantityRoom_plan, allSquare_plan, liveSquare_plan, kitchenSquare_plan, bedroomOneSquare_plan, bedroomTwoSquare_plan, bedroomThirdSquare_plan, toulet_plan, balcon_plan, number_flat, livingRoom, onlyKitchen) {
  document.querySelector('#img_plan').src = "http://comfortcity.kz/wp-content/themes/comfort/images/plans/" + imgPlan;
  document.querySelector('#type_plan').textContent = type_plan;
  document.querySelector('#quantityRoom_plan').textContent = quantityRoom_plan;
  document.querySelector('#allSquare_plan').textContent = allSquare_plan + "м";
  document.querySelector('#liveSquare_plan').textContent = liveSquare_plan + "м";

  if (livingRoom === null) {
    document.querySelector('#livingRoom').parentNode.parentNode.classList.add('none');
  } else {
    let elem = document.querySelector('#livingRoom');

    elem.parentNode.parentNode.classList.contains('none') ? elem.parentNode.parentNode.classList.remove('none') : '';
    elem.textContent =  livingRoom + "м";
  }

  if (onlyKitchen === null) {
    document.querySelector('#onlyKitchen').parentNode.parentNode.classList.add('none');
  } else {
    let elem = document.querySelector('#onlyKitchen');

    elem.parentNode.parentNode.classList.contains('none') ? elem.parentNode.parentNode.classList.remove('none') : '';
    elem.textContent =  onlyKitchen + "м";
  }

  if (kitchenSquare_plan === null) {
    document.querySelector('#kitchenSquare_plan').parentNode.parentNode.classList.add('none');
  } else {
    let elem = document.querySelector('#kitchenSquare_plan');

    elem.parentNode.parentNode.classList.contains('none') ? elem.parentNode.parentNode.classList.remove('none') : '';
    elem.textContent =  kitchenSquare_plan + "м";
  }

  if (bedroomOneSquare_plan === null) {
    document.querySelector('#bedroomOneSquare_plan').parentNode.parentNode.classList.add('none');
  } else {
    let elem = document.querySelector('#bedroomOneSquare_plan');

    elem.parentNode.parentNode.classList.contains('none') ? elem.parentNode.parentNode.classList.remove('none') : '';
    elem.textContent =  bedroomOneSquare_plan + "м";
  }

  if (bedroomTwoSquare_plan === null) {
    document.querySelector('#bedroomTwoSquare_plan').parentNode.parentNode.classList.add('none');
  } else {
    let elem = document.querySelector('#bedroomTwoSquare_plan');

    elem.parentNode.parentNode.classList.contains('none') ? elem.parentNode.parentNode.classList.remove('none') : '';
    elem.textContent =  bedroomTwoSquare_plan + "м";
  }

  if (bedroomThirdSquare_plan === null) {
    document.querySelector('#bedroomThirdSquare_plan').parentNode.parentNode.classList.add('none');
  } else {
    let elem = document.querySelector('#bedroomThirdSquare_plan');

    elem.parentNode.parentNode.classList.contains('none') ? elem.parentNode.parentNode.classList.remove('none') : '';
    elem.textContent =  bedroomThirdSquare_plan + "м";
  }

  document.querySelector('#toulet_plan').textContent = toulet_plan;
  document.querySelector('#balcon_plan').textContent = balcon_plan;

  switch (window.flat.porch) {
    case 1:
      if (window.flat.floor >= 1 && number_flat === 1) {
        document.querySelector('#header_plan').textContent = window.flat.porch +
        ' подъезд, ' + window.flat.floor + ' этаж, квартира №' + (7 * (window.flat.floor - 1) - 6)
      } else {
        document.querySelector('#header_plan').textContent = window.flat.porch +
          ' подъезд, ' + window.flat.floor + ' этаж, квартира №' + (7 * (window.flat.floor - 1) - (7 - number_flat))
     }
    break;

    case 2:
      if (window.flat.floor >= 1 && number_flat === 1) {
        document.querySelector('#header_plan').textContent = window.flat.porch +
        ' подъезд, ' + window.flat.floor + ' этаж, квартира №' + (6 * (window.flat.floor - 1) - 5 + 56)
      } else {
        document.querySelector('#header_plan').textContent = window.flat.porch +
          ' подъезд, ' + window.flat.floor + ' этаж, квартира №' + (6 * (window.flat.floor - 1) - (6 - number_flat) + 56)
     }
    break;

    case 3:
      if (window.flat.floor >= 1 && number_flat === 1) {
        document.querySelector('#header_plan').textContent = window.flat.porch +
        ' подъезд, ' + window.flat.floor + ' этаж, квартира №' + (7 * (window.flat.floor - 1) - 6 + 104)
      } else {
        document.querySelector('#header_plan').textContent = window.flat.porch +
          ' подъезд, ' + window.flat.floor + ' этаж, квартира №' + (104 + 7 * (window.flat.floor - 1) - (7 - number_flat))
     }
    break;

  }

}
