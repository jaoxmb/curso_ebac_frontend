import { Admin, PremiumUser, User } from "./entities.js";

const joao = new Admin({
  name: "João Victor",
  lastname: "Cunha",
  years: 21,
  birthday: "20/08/2003",
  phone: "+55 11 99999-9999",
  CPF: "000.000.000-00",
  email: "joao@mail.com"
})
const camila = new PremiumUser({
  name: "Camila",
  lastname: "Nishioka",
  years: 20,
  birthday: "30/06/2004",
  phone: "+55 11 99999-9999",
  CPF: "000.000.000-00",
  email: "camila@mail.com",
  plan: "Ilimitado"
})
const mario = new User({
  name: "Mario",
  lastname: "Santos",
  years: 59,
  birthday: "06/01/1965",
  phone: "+55 11 99999-9999",
  CPF: "000.000.000-00",
  email: "mario@mail.com"
})

console.info(camila);
console.info(joao);
console.info(mario);

joao.getControls();