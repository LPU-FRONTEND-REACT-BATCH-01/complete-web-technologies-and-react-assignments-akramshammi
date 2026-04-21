let productList = document.getElementById("product-list");
let productsData = ["Shoes", "Shirt", "Watch"];

productsData.forEach(p => {
  productList.innerHTML += `<p>${p}</p>`;
});