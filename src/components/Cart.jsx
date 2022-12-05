import { TbShoppingCartX } from 'react-icons/tb';
import {BiTrash} from 'react-icons/bi';

export default function Cart({carte, remove_item, empty_cart}) {
  return (
    <div className='ml-2 w-[20%] h-[60%] border-2 border-gray-400 rounded-2xl py-3'>
      <table className="table-auto text-black">
        <thead>
          <tr>
            <th className='w-[50%]'>Pedido</th>
            <th className='w-[10%]'>Cantidad</th>
            <th className='w-[20%]'></th>
          </tr>
        </thead>
        <tbody className='text-xs font-sans'>
          {carte.length !== 0 ? carte.items.map((item) =>
            <tr key={item.id} className="text-center w-[80%]">
              <td><h6>{item.name}</h6></td>
              <td><h6>{item.quantity}</h6></td>
              <td>
                <button className="bg-[#d62626] hover:bg-[#fa6161] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>remove_item(item.id)}>
                <TbShoppingCartX className='text-red-100'/>
                </button>
              </td>
            </tr>): <td><p className="text-center">Cart is empty</p></td>}
        </tbody>
      </table>
      <button className="bg-red-500 hover:bg-[#fa6161] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={empty_cart}>
            <BiTrash className='text-red-100'/>
        </button>
    </div>
  )
}