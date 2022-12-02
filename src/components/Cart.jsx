import { TbShoppingCartX } from 'react-icons/tb';
import { useState } from 'react';
import remove_from_cart from '../utilities/remove_from_cart';
import remove_cart from '../utilities/remove_cart';

export default function Cart({carte = []}) {
  console.log(carte)
  const [cart, setCart] = useState(carte);
  
  const empty_cart = () => {
    setCart(remove_cart());
  }

  const remove_item = (id) => {
    setCart(remove_from_cart(id))    
  }
  
  console.log(cart)
  return (
    <div>
      {cart.length !== 0 ? cart.items.map((item) =>
        <div key={item.id}> 
          <label className="font-bold">Item</label>
          <h6 className="text-xl">{item.name}</h6>
          <h6 className="text-xl">{item.quantity}</h6>
          <button onClick={()=>remove_item(item.id)}><TbShoppingCartX></TbShoppingCartX></button>
        </div>): "Cart is empty"}
      <button onClick={empty_cart}><TbShoppingCartX className='text-red-500'/></button>
    </div>
  )
}