const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navbarList = navbar.querySelector('.navbar__list');

burger.addEventListener('click', (e) => {
  burger.classList.toggle('is-active');
  navbar.classList.toggle('is-active');

  navbarList.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) {
      burger.classList.remove('is-active');
      navbar.classList.remove('is-active');
    }
  });
});
