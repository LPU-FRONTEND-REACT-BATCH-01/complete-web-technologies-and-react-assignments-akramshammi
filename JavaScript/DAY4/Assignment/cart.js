let cartList = document.getElementById("cart-list");
let cartData = JSON.parse(localStorage.getItem("cart")) || [];

cartData.forEach(c => {
  cartList.innerHTML += `<p>${c.name}</p>`;
});