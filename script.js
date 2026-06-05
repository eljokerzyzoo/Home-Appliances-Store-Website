
/* =========================
   SIDE MENU TOGGLE
========================= */

function toggleMenu(){
const menu = document.getElementById("sideMenu");

if(menu.classList.contains("show")){
menu.classList.remove("show");
}else{
menu.classList.add("show");
}
}

/* =========================
   CART SYSTEM
========================= */

let cart = [];

function addToCart(name, price){

cart.push({
name: name,
price: price
});

updateCart();

}

/* تحديث السلة */

function updateCart(){

const box = document.getElementById("cartBox");

if(!box) return;

if(cart.length === 0){
box.innerHTML = "السلة فاضية 🛒";
return;
}

let total = 0;

let html = "";

cart.forEach(item => {

html += `
<p>${item.name} - ${item.price} جنيه</p>
`;

total += item.price;

});

html += `<hr><b>الإجمالي: ${total} جنيه</b>`;

box.innerHTML = html;

}

/* =========================
   SEARCH (اختياري بسيط)
========================= */

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("input", function(){

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

let title = card.querySelector("h3")?.innerText.toLowerCase();

if(title && title.includes(value)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});

}