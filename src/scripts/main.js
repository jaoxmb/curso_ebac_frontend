import AOS from 'aos';
import 'aos/dist/aos.css';
import Event from './event';

const event = new Event("09-20-2024 18:00");

const handlerCounter = () => {

  event.counter((counter) => {
    document.querySelector("#counter")
      .textContent = counter;
  })
}
const handlerEventDate = () => {
  document.querySelector("#event_date")
    .textContent = event.formatedDate();
}

document.addEventListener("DOMContentLoaded", () => {
  handlerCounter();
  handlerEventDate();

  AOS.init();
})