const section1 = document.querySelector(".section-1");
const menuMobiIcon = document.querySelector("#menu-mobi-icon");
const header = document.querySelector(".header");

menuMobiIcon.addEventListener("click", function (e) {
  const menu = header.querySelector(".menu-mobi");
  const contentInner = header.querySelector(".inner-content");
  const i = menuMobiIcon.querySelector("i");
  i.classList.toggle("fa-bars-staggered");
  i.classList.toggle("fa-close");
  menu.classList.toggle("opend");
  contentInner.classList.toggle("opend");
});

// window.onscroll = function () {
//   console.log(document.documentElement.scrollTop);
// };
