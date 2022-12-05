import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {BiTrash} from 'react-icons/bi';
import { useEffect, useState } from 'react';
import remove_from_cart from '../utilities/remove_from_cart';
import remove_cart from '../utilities/remove_cart';
import add_quantity from '../utilities/add_quantity';
import to_clp from '../utilities/to_clp';
import "../styles/checkout.css"
import { useNavigate  } from "react-router-dom";


export default function Checkout(){
  const navigate = useNavigate()
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    try {
      let total = 0
      cart.items.forEach((item) => {
        total += item.price * item.quantity;
      })
      setTotal(total);
    }
    catch (e) {
      setTotal(0);
    }
  }, [cart])
  const empty_cart = () => {
    setCart(remove_cart());
  }
  const remove_one_item = (id) => {
    setCart(remove_from_cart(id))    
  }
  const remove_item = (id) => {
    setCart(remove_from_cart(id, true))    
  }
  const add_item = (id) => {
    setCart(add_quantity(id))
  }

  const ProductCart = ({name, quantity, price, img, id}) =>{
    return  <div className="flex shrink-0 grow-0 w-full h-[100px] my-1 bg-gray-300 rounded-xl items-center justify-between pr-4">
    <img className="w-[100px] ml-10 h-[90%]" alt = "pizza" src={img}></img>
    <div className='flex flex-col w-[35%]'>
      <h3 className="text-2xl">{name}</h3>
      <h3 className="text-lg mt-2 text-gray-500">{to_clp(price)}</h3>
    </div>
    <div className="flex flex-row text-center align-middle justify-between items-center w-[15%]">
      <div className="btn" onClick={()=>remove_one_item(id)}>-</div>
      <div className="mx-3 w-10 text-3xl">{quantity}</div>
      <div className="btn" onClick={()=>add_item(id)}>+</div>
    </div>
    <div className="flex flex-col items-center w-[10%]">
      <div className="text-2xl">{to_clp(price * quantity)}</div>
      <div className="text-red-500 text-sm underline decoration-wavy cursor-pointer" onClick={()=>remove_item(id)}>Eliminar</div>
    </div>
  </div>
  }
  return <div className="flex bg-black h-screen items-center justify-center">
    <div className="flex flex-col w-[50%] h-[90%] m-3">
      <div className='flex flex-row bg-gray-300 h-[50%] rounded-xl mb-1.5'>

      </div>
      <div className='flex flex-row bg-gray-300 h-[50%] rounded-xl mt-1.5'>

</div>
    </div>
    <div className="flex flex-col w-[70%] h-[90%] ">
      <div className="flex flex-col flex-nowrap bg-white rounded-xl w-full h-[90%] p-4 overflow-y-auto mb-3">
        <div className="flex justify-between">

          <div className='flex flex-row text-start items-center mt-[-10px] cursor-pointer text-purple-500' onClick={()=>navigate("/forkpizzas")}>
            <BsFillArrowLeftCircleFill className='w-8 h-8 mr-2'/>
            <h2 className="underline decoration-wavy">Volver al menú</h2>
          </div>
          <div className='flex flex-row text-start items-center mt-[-10px] cursor-pointer text-red-500' onClick={empty_cart}>
            <BiTrash className='w-8 h-8 mr-2'/>
            <h2 className="underline decoration-wavy cursor-pointer">Eliminar Productos</h2>
          </div>
        </div>
        {cart.length !== 0 ? cart.items.map((item, key) =>
        <ProductCart key = {key} name = {item.name} quantity = {item.quantity} img = {item.img} id = {item.id} price = {item.price}/>): "Cart is empty"}
      </div>
      <div className='flex justify-between'>
      <div className="flex flex-col bg-[#22C55E] items-end h-full rounded-xl w-full mr-3 p-5">
        </div>
      <div className="flex flex-col bg-[#e45f13] items-end h-full rounded-xl p-5 ml-auto">
        <div>
        <div className="flex flex-row rounded-xl justify-between">
          <div>
          <h3 className="text-xl mr-5 text-start">Sub-Total</h3>
          </div>
          <div>
          <h3 className="text-2xl w-20 mr-10">{to_clp(total)}</h3>  
          </div>
          
        </div>
        <div className="flex flex-row rounded-xl justify-between">
        <div>
          <h3 className="text-xl mr-5 text-start">Delivery</h3>
          </div>
          <div>
          <h3 className="text-2xl w-20 mr-10">{to_clp(total)}</h3>  
          </div>
        </div>
        <div className="flex flex-row rounded-xl justify-between">
        <div>
          <h3 className="text-xl mr-5 text-start">Propina</h3>
          </div>
          <div>
          <h3 className="text-2xl w-20 mr-10">{to_clp(total)}</h3>  
          </div>
        </div>
        <div>
        <hr className='bg-gray-400 h-[2px] mb-3'></hr>
          </div>
        
        <div className="flex flex-row rounded-xl justify-between text-white mt-2">
        <div>
          <h3 className="text-2xl mr-5 text-start">Total</h3>
          </div>
          <div>
          <h3 className="text-2xl w-20 mr-10">{to_clp(total)}</h3>  
          </div>
        </div>
        <button type="button" className="font-sans text-xl w-72 mt-2 py-2 bg-black text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">
          Pagar
        </button>
        </div>

      </div></div>
    </div>

  </div>

}