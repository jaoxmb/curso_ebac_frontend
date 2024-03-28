const form = document.querySelector('form');
const form__input = document.querySelector('.form__input');
const result__number = document.querySelector('.result__number');
const result__list = document.querySelector('.result__list');

let sorted = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.currentTarget[0];
  const maxNumber = input.value;

  if (!inputValidity(input, maxNumber)) {
    return;
  }

  const handlerNumber = () => {
    result__number.textContent = random(Number(maxNumber));
  }
  const handlerList = () => {
    result__list.innerHTML = '';
  
    if (sorted.length >= 5) {
      result__list.innerHTML += `<li class="result__item result__item--dot">...</li>`;
    }
  
    sorted
      .slice(-5)
      .map(item => {
        result__list.innerHTML += `<li class="result__item">${item}</li>`;
      })
  }

  handlerNumber();
  handlerList();
})

form__input.addEventListener('input', (e) => {
  const current = e.target;
  const maxNumber = current.value;

  inputValidity(current, maxNumber);  
})

function inputValidity(input, maxNumber) {
  maxNumber = Number(maxNumber);

  if (maxNumber <= 0) {
    input.setCustomValidity('Insira um valor númerico igual a 1 ou maior do que 1.');
    return false;
  }
  input.setCustomValidity('');
  return true;
}

function random(maxNumber) {
  const handlerSorted = (number) => {
    sorted.push(number);
    return number;
  }
  const handlerRandomNumber = () => {
    let random, exist = true;
    
    while (exist) {
      random = parseInt(Math.random() * maxNumber);
      exist = sorted.find(value => value === random) === undefined ? false : true;
    }
    
    return random;
  }

  maxNumber++

  if (sorted.length === maxNumber) {
    alert('Você já sorteou todos os números possíveis.');
    return sorted.slice(-1);
  }
  
  return handlerSorted(handlerRandomNumber());
}