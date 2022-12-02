import { useState } from 'react';
import remove_from_cart from '../utilities/remove_from_cart';
import remove_cart from '../utilities/remove_cart';
import { TbShoppingCartX } from 'react-icons/tb';
import "../styles/checkout.css"

export default function Checkout() {
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
  const empty_cart = () => {
    setCart(remove_cart());
  }
  const remove_item = (id) => {
    setCart(remove_from_cart(id))    
  }
  const ProductCart = ({name, quantity, price = 100, img, id}) =>{
    return <div class="Cart-Items flex">
        <div class="image-box">
          <img alt = "Product" src={img} style={{height:"120px"}} />
        </div>
        <div class="about">
          <h1 class="title">{name}</h1>
        </div>
        <div class="counter">
          <div class="btn" onClick={()=>remove_item(id)}>-</div>
          <div class="count">{quantity}</div>
          <div class="btn">+</div>
        </div>
        <div class="prices">
          <div class="amount">{price}</div>
          <div class="remove"><u>Remove</u></div>
        </div>
        <TbShoppingCartX className='text-red-100'/>
    </div>
  }
  console.log(cart)
  return (
    <div class="body">
      <div class="CartContainer grid justify-items-end">
        <div class="Header">
        	<h3 class="Heading">Shopping Cart</h3>
        	<h5 class="Action" onClick={empty_cart}>Remove all</h5>
        </div>

        {cart.length !== 0 ? cart.items.map((item) =>
        <ProductCart name = {item.name} quantity = {item.quantity} img = {item.img} id = {item.id}/>): "Cart is empty"}
         	<div class="checkout">
         	<div class="total">
         	<div>
         	 	<div class="Subtotal">Sub-Total</div>
         	 	{cart.length !== 0 ? <div class="items">{cart.items.length} Items </div> : ""}
         	</div>
         	<div class="total-amount">$6.18</div>
         	</div>
         	<button class="button">Checkout</button></div>
      </div>
    </div>
  )
}