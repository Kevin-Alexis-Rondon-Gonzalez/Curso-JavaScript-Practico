const navMenuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navMenuEmail.addEventListener("click", toggleEmailDesktopMenu);

function toggleEmailDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}
