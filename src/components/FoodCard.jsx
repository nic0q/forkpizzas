import { BsFillCartPlusFill } from "react-icons/bs"
import to_clp from "../utilities/to_clp"

export default function FoodCard({
  name,
  ingredients = [],
  add,
  img,
  size,
  price,
}) {
  return (
    <div
      className={
        "flex-row rounded-lg text-center m-1 pb-2 bg-gray-100 w-48 text-gray-800"
      }
    >
      <img className={size} alt="pizza" src={img}></img>
      <h2 className="text-sm font-bold pt-2 h-[10%]" color="black">
        {name}
      </h2>
      <br></br>
      <div
        className={
          ingredients.length === 0 ? "" : "text-xs font-sans mb-1 h-[10%]"
        }
      >
        {ingredients.join(", ")}
      </div>
      <div className="h-[10%] mt-2">
        <h5>{to_clp(price)}</h5>
        <div
          className="flex bg-green-500 font-sans align-center justify-center items-center text-center cursor-pointer my-3 mx-2 py-2 rounded-xl text-xs text-white"
          onClick={add}
        >
          <BsFillCartPlusFill />
          <p className="ml-2">Añadir al carrito</p>
        </div>
      </div>
    </div>
  )
}
