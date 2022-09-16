//Menus desktop y mobil
const navMenuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu-burger");
const mobileMenu = document.querySelector(".mobile-menu");


navMenuEmail.addEventListener("click", toggleEmailDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);


function toggleEmailDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}