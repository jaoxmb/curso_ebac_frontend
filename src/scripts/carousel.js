import Flicking from "@egjs/flicking";
import { Arrow, Fade } from "@egjs/flicking-plugins";

const animeCarouselItems = document.querySelectorAll(".carousel__item");

function clearItensClass() {
  animeCarouselItems.forEach((element) => {
    element.classList.remove("carousel__item--active");
  })
}

animeCarouselItems.forEach((element) => {
  element.addEventListener('mouseenter', (e) => {
    clearItensClass();
    e.currentTarget.classList.add("carousel__item--active");
  })
})

const load = () => {
  let config = {
    panelsPerView: 1.7,
    align: "center",
    circular: true
  }
  
  const charactersCarousel = new Flicking("#charactersCarousel", {
    align: "prev",
    panelsPerView: 'auto',
    circular: false
  })
  
  const animeCarousel = new Flicking("#animeCarousel", config).addPlugins(new Arrow(), new Fade("", 0.7));
  
  const mangaCarousel = new Flicking("#mangaCarousel", config).addPlugins(new Arrow(), new Fade("", 0.7));
}

export default {
  load
}