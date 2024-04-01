const form = document.querySelector('form');
const form__input = document.querySelector('.randomize__form__input');
const result__number = document.querySelector('.randomize__result__number');
const result__list = document.querySelector('.randomize__result__list');

let currentRandomList;
let index = 0;
let max = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.currentTarget[0];
  const maxNumber = Number(input.value);

  // Reseta os parametros caso o usuario insira um valor de numero maximo diferente do atual
  if (max != maxNumber) {
    currentRandomList = new randomArray(maxNumber);
    max = maxNumber;
    index = 0;
  }
  // Verifica o fim da lista de números aleatorios
  if (index === currentRandomList.list.length) {
    alert("Você atingiu o número máximo de números aleatórios.");
    return;
  }

  const handlerNumber = () => {
    result__number.textContent = currentRandomList.list[index];
    index++
  }
  const handlerList = () => {
    const filtred = currentRandomList.list
      .slice(0, index)

    result__list.innerHTML = '';
  
    if (index > 5) {
      result__list.innerHTML += `<li class="randomize__result__item randomize__result__item--dot">...</li>`;
    }
  
    filtred
      .slice(-5)
      .map(item => {
        result__list.innerHTML += `<li class="randomize__result__item">${item}</li>`;
      })
  }

  handlerNumber();
  handlerList();
})

form__input.addEventListener('input', (e) => {
  const current = e.target;
  const maxNumber = Number(current.value);

  if (maxNumber <= 1) {
    current.setCustomValidity('Insira um valor númerico igual a 1 ou maior do que 1.');
  }

  current.setCustomValidity('');
})

const randomArray = class {
  list = [];

  constructor (maxNumber) {
    this.randomize(maxNumber);
  }

  randomize (maxNumber) {
    const calc = () => {
      const random = parseInt(Math.random() * (maxNumber + 1));
      if (this.list.includes(random)) {
        return;
      }
      this.list.push(random);
    }

    while (this.list.length < maxNumber) {
      calc();
    }
  }
}