import products from "../products.json";
import { useState } from "react";
import FoodCard from "./FoodCard";
import add_to_cart from '../utilities/add_to_cart';
import { useNavigate  } from "react-router-dom";
import Cart from "./Cart";

export default function Menu() {
  const navigate = useNavigate()
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
  const add = (name, id, ingredients = []) => {
    setCart(add_to_cart({name, ingredients, id}));
  }

  const go_to_cart = () => {
    navigate("/cart");
  }

  return (
    <div className="flex">
      <button className="w-64">Carrito</button>
      <button onClick={go_to_cart}>Ir al carrito ;</button>
      <div className="flex flex-wrap">
        {products.Pizzas.map((pizza) => <FoodCard key={pizza.id} id = {pizza.id} name={pizza.name} ingredients={pizza.ingredients} img = {pizza.img} add = {()=>add(pizza.name, pizza.id, pizza.ingredients)}/>)}
      </div>
      <div className="flex flex-wrap">
        {products.Bebidas.map((item) => <FoodCard key={item.id} id = {item.id} name={item.name} img={item.img} add = {()=>add(item.name, item.id)}/>)}
      </div>
      <div className="flex flex-wrap">
        {products.Complements.map((item) => <FoodCard key={item.id} id = {item.id} name={item.name} img={item.img} add = {()=>add(item.name, item.id)}/>)}
      </div>
      <Cart carte = {cart}></Cart>
    </div>
  )
}