const create_cart = (object) => {
  localStorage.setItem("cart", JSON.stringify({items: [{...object, quantity: 1}]}));
}

const add_item = (cart, object) => {
  if(cart.items.some((item) => item.id === object.id)) { // if element already exists in cart, add 1 to quantity
    cart.items.find((item) => item.id === object.id).quantity += 1;
  }
  else{ // if element does not exist in cart, add it to cart
    cart.items.push({...object, quantity: 1});
  }
}

export default function add_to_cart(object) {
  if(!localStorage.getItem("cart")) {
    create_cart(object);
  }
  else {
    const cart = JSON.parse(localStorage.getItem("cart"));
    add_item(cart, object)
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}