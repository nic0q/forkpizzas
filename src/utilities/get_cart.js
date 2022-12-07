export default function get_cart(){
  console.log(JSON.parse(localStorage.getItem('cart')));
  return JSON.parse(localStorage.getItem("cart"));
}