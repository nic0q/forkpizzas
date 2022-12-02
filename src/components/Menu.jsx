import products from "../products.json";
import { useState } from "react";
import FoodCard from "./FoodCard";
import add_to_cart from '../utilities/add_to_cart';
import { useNavigate  } from "react-router-dom";
import Cart from "./Cart";
import remove_cart from '../utilities/remove_cart';
import remove_from_cart from '../utilities/remove_from_cart';

export default function Menu() {
  const navigate = useNavigate()
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
  const add = (name, id, img, ingredients = []) => {
    setCart(add_to_cart({name, ingredients, id, img}));
  }
  const empty_cart = () => {
    setCart(remove_cart());
  }
  const remove_item = (id) => {
    setCart(remove_from_cart(id))    
  }

  return (
    <div className="flex bg-white text-black justify-center w-full h-screen">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          {products.Pizzas.map((pizza) => <FoodCard key={pizza.id} id = {pizza.id} name={pizza.name} ingredients={pizza.ingredients} img = {pizza.img} add = {()=>add(pizza.name, pizza.id, pizza.img,pizza.ingredients)} size = {"w-64"}/>)}
        </div>
        <div className="flex flex-row justify-center">
          {products.Bebidas.map((item) => <FoodCard key={item.id} id = {item.id} name={item.name} img={item.img} add = {()=>add(item.name, item.id,item.img)} size = {"w-48"}/>)}
        </div>
        <div className="flex flex-row justify-center">
          {products.Complements.map((item) => <FoodCard key={item.id} id = {item.id} name={item.name} img={item.img} add = {()=>add(item.name, item.id,item.img)} size = {"w-48"}/>)}
        </div>
      </div>
      <div>
        <Cart carte = {cart} empty_cart = {empty_cart} remove_item = {remove_item}></Cart>
        <button onClick={()=>navigate("/checkout")} className="bg-[#42bb42] hover:bg-[#5ac95a] text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Ver Carrito
        </button>
      </div>
    </div>
  )
}