let menuOpen = false;
const mobileLinks = document.querySelector('.mobile-links');

function mobileMenu() {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileLinks.style.display = 'block';
  } else {
    mobileLinks.style.display = 'none';
  }
}