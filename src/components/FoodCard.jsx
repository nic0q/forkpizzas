import { BsFillCartPlusFill } from 'react-icons/bs';

export default function FoodCard({name, ingredients = [], add, img}) {
  return (
    <div className="flex-row rounded-lg border-2 w-72 text-center">
      <img alt="pizza" src={img}></img>
      <h2 className="text-2xl font-bold" color="black">{name}</h2>
      {ingredients.map((ingredient) => <span key = {ingredient} className="text-xs">{ingredient + " "}</span>)}
      <div>
      <button onClick={add} className="bg-[#42bb42] hover:bg-[#5ac95a] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <BsFillCartPlusFill className="text-white"/>
      </button></div>
    </div>
  )
}