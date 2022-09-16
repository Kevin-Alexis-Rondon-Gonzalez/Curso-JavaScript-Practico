const navMenuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu-burger");
const mobileMenu = document.querySelector(".mobile-menu");
const asideShoppingCar = document.querySelector(".product-detail");
const shoppingCarIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container")

    //Menus desktop and mobil
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
shoppingCarIcon.addEventListener("click",toggleShoppingCarAside)
function toggleShoppingCarAside(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    asideShoppingCar.classList.toggle("inactive");
}

    //Product list
const productList =[];
productList.push({
    name: "bike1",
    price: 120,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "bike2",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "bike3",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
function renderProducts(array){
    for(product of array){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);