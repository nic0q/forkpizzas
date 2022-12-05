import products from "../products.json";
import { useState } from "react";
import FoodCard from "./FoodCard";
import add_to_cart from '../utilities/add_to_cart';
import { useNavigate  } from "react-router-dom";
import Cart from "./Cart";
import remove_cart from '../utilities/remove_cart';
import remove_from_cart from '../utilities/remove_from_cart';
import {AiOutlineShoppingCart} from 'react-icons/ai';


export default function Menu() {
  const navigate = useNavigate()
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
  const add = (name, id, img, price, ingredients = []) => {
    setCart(add_to_cart({name, ingredients, id, img, price}));
  }
  const empty_cart = () => {
    setCart(remove_cart());
  }
  const remove_item = (id) => {
    setCart(remove_from_cart(id))    
  }

  return (
    <div className="flex flex-row w-screen bg-white text-black justify-center">
      <div className="flex flex-col w-[80%]">
        <div className="flex justify-around border-2 border-gray-400 rounded-2xl py-3">
          <div ><a href="#pizzas">Pizzas</a></div>
          <div><a href="#bebidas">Bebidas</a></div>
          <div><a href="#complementos">Complementos</a></div>
        </div>
        <div className="border-2 border-gray-400 rounded-2xl my-3">
          <div className="flex flex-row justify-center" id="pizzas">
            {products.Pizzas.map((pizza) => <FoodCard key={pizza.id} id = {pizza.id} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price}  img = {pizza.img} add = {()=>add(pizza.name, pizza.id, pizza.img, pizza.price, pizza.ingredients)} size = {"w-64"}/>)}
          </div>
          <div className="flex flex-row justify-center" id="bebidas">
            {products.Bebidas.map((item) => <FoodCard key={item.id} id = {item.id} name={item.name} price={item.price} img={item.img} add = {()=>add(item.name, item.id, item.img, item.price)} size = {"w-48"}/>)}
          </div>
          <div className="flex flex-row justify-center" id="complementos">
            {products.Complements.map((item) => <FoodCard key={item.id} id = {item.id} name={item.name} price={item.price} img={item.img} add = {()=>add(item.name, item.id, item.img, item.price)} size = {"w-48"}/>)}
          </div>
        </div>
      </div>
      <div className="relative bg-green-500 inline-block p-5 rounded-xl font-sans font-bold cursor-pointer h-24" onClick={()=>navigate("/checkout")}>
        <AiOutlineShoppingCart className="w-14 h-14 text-white"/>
        <div class="absolute mt-[-65px] ml-9 rounded-full text-lg bg-green-400 border-2 text-white px-2">
          <span>{cart.length !== 0 ? cart.items.length : 0}</span>
        </div>
      </div>


      <Cart carte = {cart} remove_item = {remove_item} empty_cart = {empty_cart}></Cart>

    </div>
  )
}