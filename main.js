//Menus desktop and mobil
const navMenuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu-burger");
const mobileMenu = document.querySelector(".mobile-menu");

navMenuEmail.addEventListener("click", toggleEmailDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);

function toggleEmailDesktopMenu(){
    asideShoppingCar.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    asideShoppingCar.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

//shopping car desktop and mobil
const asideShoppingCar = document.querySelector(".product-detail");
const shoppingCarIcon = document.querySelector(".navbar-shopping-cart");

shoppingCarIcon.addEventListener("click",toggleShoppingCarAside)

function toggleShoppingCarAside(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    asideShoppingCar.classList.toggle("inactive");
}