
let counterValue = 0;

const valueChange = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');


const clickDecrementBtn = (event) => {
  counterValue -= 1;
  valueChange.textContent = counterValue;
};

decrementBtn.addEventListener('click', clickDecrementBtn);

const clickIncrementBtn = (event) => {
  counterValue += 1;
  valueChange.textContent = counterValue;
};

incrementBtn.addEventListener('click', clickIncrementBtn);

