import { BsFillCartPlusFill } from 'react-icons/bs';
import to_clp from '../utilities/to_clp';

export default function FoodCard({name, ingredients = [], add, img, size, price}) {
  return (
    <div className={"flex-row rounded-lg border-2 text-center m-1 pb-2 bg-gray-200 "+size}>
      <img className={size+" h-[52%]"} alt="pizza" src={img}></img>
      <h2 className="text-sm font-bold pt-2 h-[10%]" color="black">{name}</h2>
      <br></br>
      <div className={ingredients.length === 0 ? "" : "text-xs font-sans mb-1 h-[10%]"}>
        {ingredients.join(", ")}
      </div>
      <div className='h-[10%]'>
        <h5>{to_clp(price)}</h5>
      <button onClick={add} className="bg-green-500 hover:bg-[#5ac95a] text-gray-800 font-semibold py-2 mt-2 px-4 border border-gray-400 rounded shadow">
        <BsFillCartPlusFill className="text-white"/>
      </button></div>
    </div>
  )
}