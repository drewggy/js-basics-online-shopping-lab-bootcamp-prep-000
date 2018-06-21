var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {

  var newObj = Object.assign({}, {itemName:`${itemName}`, itemPrice: 46})
  cart.push(newObj);
  return `${itemName} has been added to your cart.`;

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
