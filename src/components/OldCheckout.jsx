import { useEffect, useState } from 'react';
import remove_from_cart from '../utilities/remove_from_cart';
import remove_cart from '../utilities/remove_cart';
import add_quantity from '../utilities/add_quantity';
import "../styles/checkout.css"

export default function Checkout() {
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    try {
      let total = 0
      cart.items.forEach((item) => {
        total += item.price * item.quantity;
      })
      setTotal(total);
    }
    catch (e) {
      setTotal(0);
    }
  }, [cart])
  const empty_cart = () => {
    setCart(remove_cart());
  }
  const remove_one_item = (id) => {
    setCart(remove_from_cart(id))    
  }
  const remove_item = (id) => {
    setCart(remove_from_cart(id, true))    
  }
  const add_item = (id) => {
    setCart(add_quantity(id))
  }
  const ProductCart = ({name, quantity, price, img, id}) =>{
    return <div className="Cart-Items flex">
      <div className="image-box">
        <img alt = "Product" src={img} style={{height:"120px"}} />
      </div>
      <div className="about">
        <h1 className="title">{name}</h1>
      </div>
      <div className="counter">
        <div className="btn" onClick={()=>remove_one_item(id)}>-</div>
        <div className="count">{quantity}</div>
        <div className="btn" onClick={()=>add_item(id)}>+</div>
      </div>
      <div className="prices">
        <div className="amount">{price * quantity}</div>
        <div className="remove" onClick={()=>remove_item(id)}><u>Remove</u></div>
      </div>
    </div>
  }
  return (
    <div className="body">
      <div className="CartContainer grid justify-items-end">
        <div className="Header">
        	<h3 className="Heading">Shopping Cart</h3>
        	<h5 className="Action" onClick={empty_cart}>Remove all</h5>
        </div>
        {cart.length !== 0 ? cart.items.map((item) =>
        <ProductCart name = {item.name} quantity = {item.quantity} img = {item.img} id = {item.id} price = {item.price}/>): "Cart is empty"}
         	<div className="checkout">
         	<div className="total">
         	<div>
         	 	<div className="Subtotal">Sub-Total</div>
         	 	{cart.length !== 0 ? <div className="items">{cart.items.length} Items </div> : ""}
         	</div>
         	<div className="total-amount">${total}</div>
         	</div>
         	<button className="button">Checkout</button></div>
      </div>
    </div>
  )
}