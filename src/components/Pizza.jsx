import { BsFillCartPlusFill } from 'react-icons/bs';
import add_to_cart from '../utilities/add_to_cart';

export default function Pizza({name, ingredients, id}) {
  const add = () => {
    add_to_cart({name, ingredients, id});
  }

  return (
    <div className="flex-row rounded-lg border-2 w-72 text-center">
      <img alt="pizza" src="https://media.gettyimages.com/id/833378372/photo/generic-picture-of-a-pizza-from-pizza-hut.jpg?s=612x612&w=gi&k=20&c=3eWec5D5YN_YS8KWm-ihoVJBGSk5dcvE8brV7U_DtQI="></img>
      <h2 className="text-2xl font-bold" color="black">{name}</h2>
        {ingredients.map((ingredient) => <span key = {ingredient} className="text-xs">{ingredient + " "}</span>)}
      <div>
      <button onClick={add} className="bg-[#42bb42] hover:bg-[#5ac95a] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <BsFillCartPlusFill className="text-white"/>
      </button></div>
    </div>
  )
}