export default function add_to_cart(object) {
  if(!localStorage.getItem("cart")) {
    object.quantity = 1;
    localStorage.setItem("cart", JSON.stringify({items: [object]}));
  }
  else {
    const cart = JSON.parse(localStorage.getItem("cart"));
    // if element already exists in cart, add 1 to quantity
    if(cart.items.some((item) => item.id === object.id)) {
      cart.items.forEach((item) => {
        if(item.id === object.id) {
          item.quantity += 1;
        }
      })
    }
    else{
      object.quantity = 1;
      cart.items.push(object);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem("cart")));
  }
}