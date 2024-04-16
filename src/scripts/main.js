const form = document.querySelector('.form');
const button = document.querySelector('.form__button');
const title = document.querySelector('.title');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  title.innerHTML = "Thanks for <span>subscribe</span>";
  button.setAttribute('disabled', true);
})