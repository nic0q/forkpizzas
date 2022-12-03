import { TbShoppingCartX } from 'react-icons/tb';

export default function Cart({carte, empty_cart, remove_item}) {
  return (
    <table  className="table-auto text-black">
      <thead>
    <tr>
      <th>Pedido</th>
      <th>Cantidad</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
      {carte.length !== 0 ? carte.items.map((item) =>
        <tr key={item.id} className="text-start">
          <td><h6 className="text-base">{item.name}</h6></td>
          <td><h6 className="text-lg">{item.quantity}</h6></td>
          <td>
            <button className="bg-[#d62626] hover:bg-[#fa6161] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>remove_item(item.id)}>
            <TbShoppingCartX className='text-red-100'/>
            </button>
          </td>
        </tr>): "Cart is empty"}
        <tr>
          <td>
            <button className="bg-[#d62626] hover:bg-[#fa6161] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={empty_cart}>
            <TbShoppingCartX className='text-red-100'/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}