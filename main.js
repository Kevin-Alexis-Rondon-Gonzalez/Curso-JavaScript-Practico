//Declaracion de selectores
const navMenuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu-burger");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const shoppingCarIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container")
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

//addEventListener
navMenuEmail.addEventListener("click", toggleEmailDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
shoppingCarIcon.addEventListener("click",toggleShoppingCarAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

//Function close and open
function toggleEmailDesktopMenu(){
    shoppingCartContainer.classList.add("inactive");
    productDetail.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    shoppingCartContainer.classList.add("inactive");
    productDetail.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}
function toggleShoppingCarAside(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetail.classList.add("inactive");
    shoppingCartContainer.classList.toggle("inactive");
}
function openProductDetailAside(){
    productDetail.classList.remove("inactive")
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}
function closeProductDetailAside(){
    productDetail.classList.add("inactive")
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
        productImg.addEventListener("click", openProductDetailAside);

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