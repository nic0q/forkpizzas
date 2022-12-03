import { BsFillCartPlusFill } from 'react-icons/bs';

export default function FoodCard({name, ingredients = [], add, img, size, price}) {
  return (
    <div className={"flex-row rounded-lg border-2 text-center m-2 pb-2 bg-gray-200 "+size}>
      <img className={size} alt="pizza" src={img}></img>
      <h2 className="text-sm font-bold pt-2" color="black">{name}</h2>
      <br></br>
      {ingredients.map((ingredient) => <span key = {ingredient} className="text-xs font-sans">{ingredient + " "}</span>)}
      <div>
        <h5>${price}</h5>
      <button onClick={add} className="bg-[#42bb42] hover:bg-[#5ac95a] text-gray-800 font-semibold py-2 mt-2 px-4 border border-gray-400 rounded shadow">
        <BsFillCartPlusFill className="text-white"/>
      </button></div>
    </div>
  )
}