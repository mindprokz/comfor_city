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
}
