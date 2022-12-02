import { TbShoppingCartX } from 'react-icons/tb';

export default function Cart({carte, empty_cart, remove_item}) {
  console.log(carte)
  return (
    <div>
      {carte.length !== 0 ? carte.items.map((item) =>
        <div key={item.id}> 
          <label className="font-bold">Item</label>
          <h6 className="text-xl">{item.name}</h6>
          <h6 className="text-xl">{item.quantity}</h6>
          {<button onClick={()=>remove_item(item.id)}><TbShoppingCartX></TbShoppingCartX></button>}
        </div>): "Cart is empty"}
      {<button onClick={empty_cart}><TbShoppingCartX className='text-red-500'/></button>}
    </div>
  )
}