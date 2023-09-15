const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle('hidden');
});

window.onscroll = function () {
  const nav = document.querySelector("#navbar");
  const fixedNav = nav.offsetTop;

  if (window.pageYOffset < fixedNav) {
    nav.classList.add("nav-fixed");
  } else {
    nav.classList.remove("nav-fixed");
  }
};
