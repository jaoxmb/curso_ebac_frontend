const EVENT_DATA = new Date("08 20 2024 19:00");

const calcTime = () => {
  const round = (numb) => Math.floor(numb);
  const currentDate = new Date();
  const sub = EVENT_DATA.getTime() - currentDate.getTime();

  const days = round(sub / 86400000);
  const hours = round((sub % 86400000) / 3600000);
  const mins = round(((sub % 86400000) % 3600000) / 60000);
  const secs = round((((sub % 86400000) % 3600000) % 60000) / 1000);

  return {
    days,
    hours,
    mins,
    secs
  }
}
const formatedDate = () => {
  const day = EVENT_DATA.getDate();
  const month = EVENT_DATA.getMonth() + 1;
  const year = EVENT_DATA.getFullYear();
  const hours = EVENT_DATA.getHours();
  const minutes = EVENT_DATA.getMinutes();

  const zero = (numb) => numb > 9 ? numb : "0" + numb;

  return zero(day) + "/" + zero(month) + "/" + year + " as " + zero(hours) + ":" + zero(minutes);
}

export { formatedDate, calcTime };