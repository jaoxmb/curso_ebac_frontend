import './header.js';
import characters from './characters.js';
import carousel from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  characters.load();
  characters.select(0);

  carousel.load();
})