import { useNavigate } from "react-router-dom"
import "../styles/checkout.css"
import to_clp from "../utilities/to_clp"
export default function Cart({ carte, remove_one_item, add_item, total = 0 }) {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col w-[15%] h-[80%] border-2 border-gray-200 shadow-xl drop-shadow-xl rounded-2xl p-3 fixed right-2 z-10 bg-white scroll-smooth">
      <div className="">
        <div
          className="flex font-bold cursor-pointer justify-between items-center text-gray-100  bg-green-500 p-5 mb-2 text-start rounded-xl font-sans"
          onClick={() => navigate("/forkpizzas/checkout")}
        >
          <div className="w-full text-sm">Ir a pagar</div>
          <div>{to_clp(total)}</div>
        </div>
        <hr className="bg-gray-400 h-[2px] mb-3"></hr>
        <table className="table-auto text-gray-800">
          <thead>
            <tr>
              <th className="w-[50%] text-sm text-start">Pedido</th>
              <th className="w-[40%] text-xs text-start">Sub-Total</th>
            </tr>
          </thead>
          <tbody className="text-xs font-sans">
            {carte.length !== 0
              ? carte.items.map((item) => (
                  <tr key={item.id} className="text-start w-[80%]">
                    <td>
                      <h6 className="text-start ">{item.name}</h6>
                    </td>
                    <td>
                      <div className="flex flex-row text-center align-middle justify-between items-center w-[90%]">
                        <div
                          className="btn"
                          onClick={() => remove_one_item(item.id)}
                        >
                          -
                        </div>
                        <div className="w-10 text-lg">{item.quantity}</div>
                        <div className="btn " onClick={() => add_item(item.id)}>
                          +
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
      <div className="mt-auto">
        <hr className="bg-gray-400 h-[2px] mb-3"></hr>
        <table className="table-auto text-black">
          <thead>
            <tr>
              <th className="w-[50%] text-start">Total</th>
              <th className="w-[5%] text-start">
                <p>{to_clp(total)}</p>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}
