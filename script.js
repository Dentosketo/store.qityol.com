const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
  navMenu.classList.toggle('show');
});
