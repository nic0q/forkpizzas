import { TbShoppingCartX } from 'react-icons/tb';
import { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
  const empty_cart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  }
  console.log(cart)
  return (
    <div>
      {cart.length !== 0 ? cart.items.map((item) => <div key={item.id}>
        <label className="font-bold">Item</label>
        <h6 className="text-xl">{item.name}</h6>
        <h6 className="text-xl">{item.quantity}</h6>
      </div>) : "Cart is empty"}
      <button onClick={empty_cart}><TbShoppingCartX></TbShoppingCartX></button>
    </div>
  )
}