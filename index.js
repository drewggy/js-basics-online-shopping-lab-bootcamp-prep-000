var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
//  var thePrice = Math.floor(Math.random()*10000)/100;
  var newObj = Object.assign({itemName: `${itemName}`, itemPrice: `${Math.floor(Math.random()*10000)/100}`});
  cart.push(newObj);
  return  `${itemName} has been added to your cart.`;

}

function viewCart() {
  if (cart.length < 1) return "There are no items in your cart.";

  var outString = "In your cart, you have";
  for (var i = 1; i < cart.length; i++){
    if (cart.length > 1 && i < cart.lenght-1) outString += ", ";
    if (cart.length > 1 && i === cart.lenght-1) outString += " and ";
    outString += `${cart[i].itemName} at ${cart[i].itemPrice}`;
  }
  outString += ".";
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


console.log(addToCart("Almond Milk"));
console.log(addToCart("Razors"));
console.log(JSON.stringify(cart));
viewCart();
