export default class Event {
  date;

  constructor (date) {
    date = new Date(date);

    if ( date )
      this.date = date;
  }

  formatedDate() {
    const zero = (numb) => numb > 9 ? numb : "0" + numb;

    const day = zero(this.date.getDate());
    const month = zero(this.date.getMonth() + 1);
    const year = zero(this.date.getFullYear());
    const hours = zero(this.date.getHours());
    const minutes = zero(this.date.getMinutes());


    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  calcReaminingTime(ms) {
    const round = (numb) => numb > 1 ? Math.floor(numb) : 0;
    
    // EndDate - CurrentDate
    ms = this.date.getTime() - new Date().getTime();

    const days = round(ms / 86400000);
    ms %= 86400000;
    const hours = round(ms / 3600000);
    ms %= 3600000
    const mins = round(ms / 60000);
    ms %= 60000;
    const secs = round(ms / 1000);

    return `${days}d ${hours}h ${mins}m ${secs}s`;
  }

  counter(func) {
    
    if ( func )
      setInterval(() => {
        func(this.calcReaminingTime());
      }, 1000);
  }
}