function toggleMenu() {
  const menu_btn = document.querySelector('.hamburger');
  const menu_link = document.querySelector('.nav-link-mobile');

  menu_btn.classList.toggle("is-active");
  menu_link.classList.toggle("is-active");
}

// const menu_btn = document.querySelector('.hamburger');
// const menu_link = document.querySelector('.nav-link-mobile');


// nav_menu.addEventListener('click', function () {
//   menu_btn.classList.toggle('is-active');
//   menu_link.classList.toggle('is-active');
// });