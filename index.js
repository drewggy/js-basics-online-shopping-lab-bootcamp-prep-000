var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var thePrice = Math.floor(Math.random()*10000);
  var newObj = Object.assign({itemName: `${itemName}`, itemPrice: `${thePrice}`});
  cart.push(newObj);
  return  `${itemName} has been added to your cart.`;

}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}


addToCart("Almond Milk");
addToCart("Razors");
console.log(JSON.stringify(cart));
