import { calcTime, formatedDate } from './utils';

const handlerExpositor = () => {
  const { days, hours, mins, secs } = calcTime();

  document.querySelector("#expositor")
    .textContent = `${days + "d"} ${hours + "h"} ${mins + "m"} ${secs + "s"}`;
}
const handlerExpositorDate = () => {
  document.querySelector("#expositor_date")
    .textContent = formatedDate();
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    handlerExpositor();
  }, 1000);

  handlerExpositor();
  handlerExpositorDate();
})
