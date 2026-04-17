let products = [
  { id: 1, name: "Shoes", price: 1000 },
  { id: 2, name: "Shirt", price: 500 },
  { id: 3, name: "Watch", price: 2000 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  let productDiv = document.getElementById("products");
  productDiv.innerHTML = "";

  products.forEach(p => {
    productDiv.innerHTML += `
      <div class="product-item">
        <p>${p.name} - ₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  let item = products.find(p => p.id === id);
  cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}
function displayCart() {
  let cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    cartDiv.innerHTML += `
      <div class="product-item">
        <p>${item.name} - ₹${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

displayProducts();