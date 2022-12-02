import { useState } from 'react';
import remove_from_cart from '../utilities/remove_from_cart';
import remove_cart from '../utilities/remove_cart';
import Cart from './Cart';

export default function Checkout() {
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
  const empty_cart = () => {
    setCart(remove_cart());
  }

  const remove_item = (id) => {
    setCart(remove_from_cart(id))    
  }

  console.log(cart)
  return (
    <Cart carte = {cart} empty_cart = {empty_cart} remove_item = {remove_item}></Cart>
  )
}