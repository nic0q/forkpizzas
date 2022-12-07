export default function add_quantity(id) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.items.forEach((item) => { if(item.id === id) {
    item.quantity += 1;
  }})
  localStorage.setItem("cart", JSON.stringify(cart))
  if(cart.items.length === 0) {localStorage.removeItem("cart"); return []} else{return cart};
}