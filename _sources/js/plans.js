export default function () {

  // closer for plan_a
  document.querySelector('.plan_A .closer').addEventListener('click', () => {
    document.querySelector('.plan_A').classList.add('close');
  });

  // opener for plan_a
  document.querySelector('.first_front').addEventListener('click', () => {
    document.querySelector('.plan_A').classList.remove('close');
  });


  // closer for plan_b
  document.querySelector('.plan_B .closer').addEventListener('click', () => {
    document.querySelector('.plan_B').classList.add('close');
  });

  // opener for plan_b
  document.querySelector('.second_front').addEventListener('click', () => {
    document.querySelector('.plan_B').classList.remove('close');
  });


  // closer for plan_b
  document.querySelector('.plan_C .closer').addEventListener('click', () => {
    document.querySelector('.plan_C').classList.add('close');
  });

  // opener for plan_b
  document.querySelector('.third_front').addEventListener('click', () => {
    document.querySelector('.plan_C').classList.remove('close');
  });


  // closer for plan_info
  document.querySelector('.plan_info .closer').addEventListener('click', () => {
    document.querySelector('.plan_info').classList.add('close');
  });

  open_planInfo();
}

function open_planInfo() {

  [...document.querySelectorAll('.plans .shape')].forEach( (item) => {
    item.addEventListener('click', () => {
      document.querySelector('.plan_info').classList.remove('close');
    });
  });
}

/*
  @TODO -> Добавить проверку аргументов если они null то делать родителя элемента
  невидимым

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

*/

window.changeInfo = function changeInfo(pricePlan, imgPlan, type_plan, quantityRoom_plan, allSquare_plan, liveSquare_plan, kitchenSquare_plan, bedroomOneSquare_plan, bedroomTwoSquare_plan, bedroomThirdSquare_plan, toulet_plan, balcon_plan) {
  document.querySelector('#price_plan').textContent = pricePlan + ' тнг';
  document.querySelector('#img_plan').src = "images/plans/" + imgPlan;
  document.querySelector('#type_plan').textContent = type_plan;
  document.querySelector('#quantityRoom_plan').textContent = quantityRoom_plan;
  document.querySelector('#allSquare_plan').textContent = allSquare_plan + "м";
  document.querySelector('#liveSquare_plan').textContent = liveSquare_plan + "м";
  document.querySelector('#kitchenSquare_plan').textContent = kitchenSquare_plan + "м";

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
}
