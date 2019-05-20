var all_Product_1 = document.getElementById("all_Product_1");
var all_Product_2 = document.getElementById("all_Product_2");
var all_Product_3 = document.getElementById("all_Product_3");
var all_Product_4 = document.getElementById("all_Product_4");
var Sticker = document.getElementById("Sticker");
var hat = document.getElementById("hat");

var allProduct = document.getElementById("allProduct");
var hatProduct = document.getElementById("hatProduct");
var stickerProduct = document.getElementById("stickerProduct");
var topwareProduct = document.getElementById("topwareProduct");



function allProducts(){
  Sticker.style.display = "block";
  hat.style.display = "block";
  all_Product_1.style.display = "block";
  all_Product_2.style.display = "block";
  all_Product_3.style.display = "block";
  all_Product_4.style.display = "block";
  allProduct.classList.add("active");
  hatProduct.classList.remove("active");
  stickerProduct.classList.remove("active");
  topwareProduct.classList.remove("active");
}

function Stickers(){
  Sticker.style.display = "block";
  hat.style.display = "none";
  all_Product_1.style.display = "none";
  all_Product_2.style.display = "none";
  all_Product_3.style.display = "none";
  all_Product_4.style.display = "none";

  allProduct.classList.remove("active");
  hatProduct.classList.remove("active");
  stickerProduct.classList.add("active");
  topwareProduct.classList.remove("active");

}

function Hats(){
  Sticker.style.display = "none";
  hat.style.display = "block";
  all_Product_1.style.display = "none";
  all_Product_2.style.display = "none";
  all_Product_3.style.display = "none";
  all_Product_4.style.display = "none";

  allProduct.classList.remove("active");
  hatProduct.classList.add("active");
  stickerProduct.classList.remove("active");
  topwareProduct.classList.add("active");
  topwareProduct.classList.remove("active");
}

function Topware(){
  Sticker.style.display = "none";
  hat.style.display = "block";
  all_Product_1.style.display = "block";
  all_Product_2.style.display = "block";
  all_Product_3.style.display = "block";
  all_Product_4.style.display = "block";

  allProduct.classList.remove("active");
  hatProduct.classList.remove("active");
  stickerProduct.classList.remove("active");
  topwareProduct.classList.add("active");
}

function addToCart(){
    window.open("addToCart.html","_self")
    console.log('asdf');
}
