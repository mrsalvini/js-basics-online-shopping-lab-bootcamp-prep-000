var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ itemName: item, itemPrice: Math.floor(1 + Math.random() * 100) })
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  var result = "In your cart, you have "
  for (let i = 0; i < cart.length; i++) {
    if (i < cart.length - 1) {
      result += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    else if (cart.length === 1) {
      result += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  }
  return result
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
