import Pizza from "./Pizza";
import products from "../products.json";

export default function Menu() {
  return (
    <div className="flex flex-wrap">
      {products.Pizzas.map((pizza) => <Pizza key={pizza.id} id = {pizza.id} name={pizza.name} ingredients={pizza.ingredients}/>)}
    </div>
  )
}