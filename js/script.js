const nav = document.querySelector('.nav');
const hambugerMenu = document.querySelector('.hamburgerMenu');

hambugerMenu.addEventListener('click', () => {
  nav.classList.toggle('nav--toggle');
  hambugerMenu.classList.toggle('hamburgerMenu--toggle');
});