import { useState } from "react"
import products from "../products.json"
import to_clp from "../utilities/to_clp"
import add_to_cart from "../utilities/add_to_cart"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
const Ingredient = ({ id, name, image = "", price, addIngredient, ingredientList = [] }) => {
  return (
    <div
      onClick={()=>addIngredient(id, price)}
      className={`flex w-44 h-12 border-2 border-gray-200  bg-white rounded-lg items-center text-sm m-2 cursor-pointer shadow-xl drop-shadow-md ${
        image !== "" ? "justify-evenly" : "justify-center" 
      } ${ingredientList.includes(id) ? "border-green-500" : "hover:border-gray-400"}`}
    >
      <p>{name}</p>
      {image !== "" ? (
        <img className="h-8 w-8" alt="ingredient" src={image}></img>
      ) : (
        ""
      )}
    </div>
  )
}
const IngredientList = ({ name, ingredients, addIngredient, ingredientList }) => {
  return (
    <div className="">
      <h4 className="text-start underline decoration-wavy mb-1">{name}</h4>
      <div className="w-[full] flex flex-wrap pb-3">
        {ingredients.map((ingredient) => (
          <Ingredient id = {ingredient.id} name={ingredient.name} image={ingredient.image} price = {ingredient.price} addIngredient = {addIngredient} ingredientList={ingredientList}/>
        ))}
      </div>
    </div>
  )
}
export default function Customize() {
  const navigate = useNavigate()
  const [ingredientsCost, setIngredientsCost] = useState(12000)
  const [ingredientList, setIngredientList] = useState([])
  const add = (id, price) => {
    if(!ingredientList.includes(id) ){
      setIngredientsCost((prev) => prev + price)
      setIngredientList((prev) => [...prev, id])
    }else{
      setIngredientList((prev) => prev.filter((ingredient) => ingredient !== id))
      setIngredientsCost((prev) => prev - price)
    }    
    console.log(id, price)
  }
  const submitPizza = () => {
    add_to_cart({name:"Pizza Personalizada", ingredients:[], id:999 , img:"https://images.deliveryhero.io/image/pedidosya/products/c51bde16-927d-4a61-95e5-d6875bc22a52.jpg?quality=90&width=1920&webp=1", price:ingredientsCost})
    navigate("/checkout")
  }
  return (
    <div className="flex flex-col w-full h-full bg-gray-300 items-center">
      <Navbar></Navbar>
    <div className="flex flex-col items-center justify-center text-sm  text-gray-700">
      <div className="flex bg-gray-100 mt-8 rounded-2xl shadow-xl drop-shadow-md w-[80%]">
        <div className="flex flex-col">
        <h2 className="text-xl p-2">Crear Pizza</h2>
        <div className="pl-6 pt-6 ">
          <IngredientList name={"Carnes"} ingredients={products.Extras.Carnes} addIngredient={add} ingredientList={ingredientList}/>
          <IngredientList name={"Vegetales"} ingredients={products.Extras.Vegetales} addIngredient={add} ingredientList={ingredientList}/>
          <IngredientList name={"Tamaño de Pizza"} ingredients={products.Extras.Pizza_size} addIngredient={add} ingredientList={ingredientList}/>
          <IngredientList name={"Tipo de Queso"} ingredients={products.Extras.Cheese_type} addIngredient={add} ingredientList={ingredientList}/>
          <IngredientList name={"Cantidad de Queso"} ingredients={products.Extras.Cheese_quantity} addIngredient={add} ingredientList={ingredientList}/>
          <IngredientList name={"Tamaño de masa"} ingredients={products.Extras.Dought_Width} addIngredient={add} ingredientList={ingredientList}/>
        </div>
        <div className="mt-auto px-16">
        <hr className="bg-gray-400 h-[2px] mb-3"></hr>
        <div className="flex justify-around">
          <div>
            Total
          </div>
          <div>
            {to_clp(ingredientsCost)}
          </div>
        </div>
      </div>
        <button onClick={submitPizza} className="rounded-2xl bg-green-500 py-4 mx-8 text-gray-100 hover:text-gray-100 hover:bg-green-600 mt-auto mb-5">Craftear Pizza</button>
        </div>
      </div>
    </div>
    </div>
  )
}
