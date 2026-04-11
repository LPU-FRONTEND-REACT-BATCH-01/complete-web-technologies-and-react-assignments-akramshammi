let cartData = {
    items: [
        { name: "Shirt", price: 500, quantity: 2 },
        { name: "Pants", price: 1000, quantity: 1 },
        { name: "Shoes", price: 2000, quantity: 3 },
        { name: "Shirt", price: 300, quantity: 1 }
    ]
};

let sortByName = [...cartData.items].sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

let sortByPrice = [...cartData.items].sort((a, b) => a.price - b.price);

let filteredItems = cartData.items.filter(item => item.price > 500);


console.log("Sorted by Name:", sortByName);
console.log("Sorted by Price:", sortByPrice);
console.log("Filtered (price > 500):", filteredItems);