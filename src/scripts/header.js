const header = document.querySelector(".header");
const headerHeight = header.clientHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY < headerHeight) {
    return header.classList.add("header--disabled");
  }
  return header.classList.remove("header--disabled");
})