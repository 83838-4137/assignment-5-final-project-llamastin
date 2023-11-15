const nav = document.querySelector('.nav');
const hamburgerMenu = document.querySelector('.hamburgerMenu');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('nav--toggle');
  hamburgerMenu.classList.toggle('hamburgerMenu--toggle');
});