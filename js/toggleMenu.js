function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const list = document.querySelector(".menu-list");
  const social = document.querySelector(".socials");
  const project = document.querySelector(".project-list-container");
  const testimonials = document.querySelector(".testimonials");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const icon = document.querySelector(".hamburger-icon");
  const overlay = document.querySelector("[data-overlay]");

  menu.classList.toggle("open");
  list.classList.toggle("open");
  social.classList.toggle("open");
  project.classList.toggle("open");
  hamburgerMenu.classList.toggle("open");
  icon.classList.toggle("open");
  testimonials.classList.toggle("open");
  overlay.classList.toggle("active");
}