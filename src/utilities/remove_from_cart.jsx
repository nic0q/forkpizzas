export default function remove_from_cart(id, deletion = false) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.items.forEach((item) => { if(item.id === id) {
    if(deletion){
      cart.items.splice(cart.items.indexOf(item), 1);
    }
    else if(item.quantity > 1) { // if quantity is greater than 1, subtract 1 from quantity
      item.quantity -= 1;
    }
    else{ // if quantity is 1, remove item from cart
      cart.items.splice(cart.items.indexOf(item), 1);
    }
  }})
  localStorage.setItem("cart", JSON.stringify(cart))
  if(cart.items.length === 0) {localStorage.removeItem("cart"); return []} else{return cart};
}