import products from "../products.json";
import { useEffect, useState } from 'react';
import FoodCard from "./FoodCard";
import add_to_cart from '../utilities/add_to_cart';
import Cart from "./Cart";
import remove_cart from '../utilities/remove_cart';
import remove_from_cart from '../utilities/remove_from_cart';
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import add_quantity from '../utilities/add_quantity';

export default function Menu() {
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
  const add = (name, id, img, price, ingredients = []) => {
    setCart(add_to_cart({name, ingredients, id, img, price}));
  }
  const empty_cart = () => {
    setCart(remove_cart());
  }
  const remove_item = (id) => {
    setCart(remove_from_cart(id))    
  }
  const remove_one_item = (id) => {
    setCart(remove_from_cart(id))    
  }
  const add_item = (id) => {
    setCart(add_quantity(id))
  }
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Navbar n_cart_items = {cart.length !== 0 ? cart.items.length : 0}></Navbar>
    
    <div className="flex flex-row w-screen bg-[#F5F5F5] text-black justify-center pt-8 pb-32">
      <div className="flex flex-col w-[65%] mr-3">
        <div className="flex justify-around border-2 border-gray-400 rounded-2xl py-3">
          <div ><a href="#pizzas">Pizzas</a></div>
          <div><a href="#bebidas">Bebidas</a></div>
          <div><a href="#complementos">Complementos</a></div>
        </div>
        <div className="border-2 border-gray-400 rounded-2xl my-3">
          <div className="flex flex-row justify-center" id="pizzas">
            {products.Pizzas.map((pizza) => <FoodCard key={pizza.id} id = {pizza.id} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price}  img = {pizza.img} add = {()=>add(pizza.name, pizza.id, pizza.img, pizza.price, pizza.ingredients)} size = {"w-48 "}/>)}
          </div>
          <div className="flex flex-row justify-center" id="bebidas">
            {products.Bebidas.map((item) => <FoodCard key={item.id} id = {item.id} name={item.name} price={item.price} img={item.img} add = {()=>add(item.name, item.id, item.img, item.price)} size = {"w-32"}/>)}
          </div>
          <div className="flex flex-row justify-center" id="complementos">
            {products.Complements.map((item) => <FoodCard key={item.id} id = {item.id} name={item.name} price={item.price} img={item.img} add = {()=>add(item.name, item.id, item.img, item.price)} size = {"w-48 pb-3"}/>)}
          </div>
        </div>
      </div>
      <div>

      </div>
      
      <Cart add_item = {add_item} remove_one_item = {remove_one_item} carte = {cart} remove_item = {remove_item} empty_cart = {empty_cart} total = {total}/>
    </div>
      <Footer/>
    </div>
  )
}