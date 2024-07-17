const optionsContainer = document.querySelector(".characters__options .flicking-camera");
const resumeTitle = document.querySelector(".characters .title");
const resumeText = document.querySelector(".characters .text");
const resumeImage = document.querySelector(".characters__image");

import violetPerson from "../assets/characters/violet.png";
import violetCover from "../assets/characters/violet-cover.png";
import gilbertPerson from "../assets/characters/gilbert.png";
import gilbertCover from "../assets/characters/gilbert-cover.png";
import claudiaPerson from "../assets/characters/claudia.png";
import claudiaCover from "../assets/characters/claudia-cover.png";
import benedictPerson from "../assets/characters/benedict.png";
import benedictCover from "../assets/characters/benedict-cover.png";
import cattleyaPerson from "../assets/characters/cattleya.png";
import cattleyaCover from "../assets/characters/cattleya-cover.png";
import ericaPerson from "../assets/characters/erica.png";
import ericaCover from "../assets/characters/erica-cover.png";


const characters = [
  {
    name: "Violet Evergarden",
    about: "Eu entrei na guerra como soldado quando era jovem. Porque eu só sabia lutar, eu ainda não entendo os sentimentos das pessoas e expressar meus sentimentos. Embora eu não pudesse entender o significado de uma palavra do oficial superior Gilbert no campo de batalha, encontrei o trabalho de Auto Memories Doll e comecei a procurar o significado dessa palavra.",
    personImage: violetPerson,
    coverImage: violetCover
  },
  {
    name: "Gilbert Bougainvillea",
    about: "Nascido para ser uma família aristocrática genérica que continua por gerações, ele se tornou Major do Exército. Durante a guerra, encontrei uma jovem violeta e ambos lutaram com os exércitos imperiais. É mais importante que qualquer coisa para Violet.",
    personImage: gilbertPerson,
    coverImage: gilbertCover
  },
  {
    name: "Claudia Hodgins",
    about: "Bom amigo dos tempos de escola militar de Gilbert. Era o Exército do Coronel, mas depois da guerra ele deixou a revista CH fora do exército. Estou cuidando do violeta a pedido de Gilbert. Devido ao personagem que ama a humanidade, ela também está se mostrando como um comerciante.",
    personImage: claudiaPerson,
    coverImage: claudiaCover
  },
  {
    name: "Benedict Blue",
    about: "Hodgins é um membro do antiquado, um dos funcionários que trabalha como entregador (carteiro) no posto do CH. Há compromisso em roupas, não vestindo uniformes de pessoal de entrega, mas vestindo uniformes.",
    personImage: benedictPerson,
    coverImage: benedictCover
  },
  {
    name: "Cattleya Baudelaire",
    about: "Um dos funcionários que trabalha na empresa postal CH. Há uma reputação de ser capaz de expressar sentimentos delicados que o cliente não pode falar em palavras, muitas vezes recebendo trabalho sob indicação. Com liberdade e generosidade, estou resumindo juniores incluindo violeta como idosos.",
    personImage: cattleyaPerson,
    coverImage:  cattleyaCover
  },
  {
    name: "Erica Brown",
    about: "CH Um dos funcionários que trabalhará como empresa postal. Iris senior, estou lutando para interagir com o cliente e não tenho certeza do meu trabalho.",
    personImage: ericaPerson,
    coverImage: ericaCover
  },
];

function load() {
  characters.map((person, i) => {
    const item = document.createElement("div");

    item.classList.add("characters__options__item");
    item.innerHTML += `
      <span>
        <img src="${person.coverImage}" alt="${person.name}">
      </span>
      <h4 class="text">${person.name.split(" ")[0]}</h4>
    `;
    item.addEventListener('click', (e) => select(i));
    
    optionsContainer.appendChild(item);
  })
}

function select(index) {
  const item = document.querySelectorAll(".characters__options__item")[index];
  const { name, about, personImage } = characters[index];
  const clearActives = () => {
    document.querySelectorAll(".characters__options__item")
      .forEach(el => {
        el.classList.remove("active");
      })
  }

  clearActives();
  item.classList.add("active")
  resumeTitle.innerText = name;
  resumeText.innerText = about;
  resumeImage.setAttribute("src", personImage);
}

export default {
  load,
  select
}