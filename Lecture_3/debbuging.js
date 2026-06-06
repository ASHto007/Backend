// Write one simple bug in the code and then fix it
// We Hava one object products data and we want to calculate the total price of all products// Bug: The total price is calculated incorrectly because we are not multiplying the price by the quantity
function calculateTotal(products) {
  let total = 0;
  products.forEach((product) => {
    total += product.price * product.quantity; // This is the bug, we should multiply price by quantity
  });
  return total;
}

const productList = [
  { name: "Shoes", price: 10, quantity: 2 },
  { name: "Hat", price: 20, quantity: 1 },
  { name: "Gloves", price: 30, quantity: 3 },
];

const grandTotal = calculateTotal(productList);
console.log("Total Price:", grandTotal); // This will output an incorrect total price

// The correct total price should be:
// Product 1: 10 * 2 = 20
// Product 2: 20 * 1 = 20
// Product 3: 30 * 3 = 90
// Total Price: 20 + 20 + 90 = 130
