// navbar fixed
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const fixNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.scrollY > fixNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.add('hidden');
    toTop.classList.remove('flex');
  }
});

// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
  if (e.target !== navMenu && e.target !== hamburger) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !navMenu.classList.contains('hidden')) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// darkmode
const modeIcon = document.getElementById('modeIcon');
const html = document.querySelector('html');

let darkMode = false; // Setel awal mode ke mode terang (false)

modeIcon.addEventListener('click', function () {
  darkMode = !darkMode; // Toggle mode

  if (darkMode) {
    html.classList.add('dark');
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
  } else {
    html.classList.remove('dark');
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
  }
});
