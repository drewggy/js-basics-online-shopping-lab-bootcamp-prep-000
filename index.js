var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {

  var newObj = Object.assign({}, {itemName:`${itemName}`, itemPrice: MathFloor(Math.randon()*10000)/100})
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


addToCart("Almond Milk");
addToCart("Razors");
console.log(JSON.stringify(cart));
