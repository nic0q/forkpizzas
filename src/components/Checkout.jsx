import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { BiTrash } from "react-icons/bi"
import { useEffect, useState } from "react"
import remove_from_cart from "../utilities/remove_from_cart"
import remove_cart from "../utilities/remove_cart"
import add_quantity from "../utilities/add_quantity"
import to_clp from "../utilities/to_clp"
import "../styles/checkout.css"
import { useNavigate } from "react-router-dom"
import { BiHappy, BiHappyBeaming, BiHappyHeartEyes } from "react-icons/bi"

export default function Checkout() {
  const navigate = useNavigate()
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  )
  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [tip, setTip] = useState(0)
  const [payment, setPayment] = useState(-1)
  const [delivery, setDelivery] = useState(-1)
  const [deliveryCost, setDeliveryCost] = useState(0)

  useEffect(() => {
    try {
      let subtotal = 0
      cart.items.forEach((item) => {
        subtotal += item.price * item.quantity
      })
      setSubTotal(subtotal)
      setTotal(subtotal + tip * subtotal + deliveryCost)
    } catch (e) {
      setTotal(0)
    }
  }, [cart, deliveryCost, tip])
  const empty_cart = () => {
    setCart(remove_cart())
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
  const handleChange = (percentage) => {
    setTip(percentage)
  }
  const handleChangeDelivery = (id, cost) => {
    setDelivery(id)
    setDeliveryCost(cost)
  }
  const pay = () => {
    if (payment === -1) {
      alert("Seleccione un medio de pago")
    } 
    if (delivery === -1) {
      alert("Seleccione un medio de entrega")
    }
    else {
      alert("Gracias por su compra")
      navigate("/forkpizzas")
    }
  }
  const ProductCart = ({ name, quantity, price, img, id }) => {
    return (
      <div className="flex shrink-0 grow-0 w-full h-[60px] my-3 bg-gray-100 rounded-xl items-center justify-between pr-4 text-gray-800 shadow-xl drop-shadow-md">
        <img className="w-[60px] ml-10 h-[90%]" alt="pizza" src={img}></img>
        <div className="flex flex-col w-[35%]">
          <h3 className="text-xl">{name}</h3>
          <h3 className="text-lg  text-gray-500">{to_clp(price)}</h3>
        </div>
        <div className="flex flex-row text-center align-middle justify-between items-center w-[15%]">
          <div className="btn" onClick={() => remove_one_item(id)}>
            -
          </div>
          <div className="mx-3 w-10 text-xl">{quantity}</div>
          <div className="btn" onClick={() => add_item(id)}>
            +
          </div>
        </div>
        <div className="flex flex-col items-center w-[10%]">
          <div className="text-xl">{to_clp(price * quantity)}</div>
          <div
            className="text-red-500 text-sm underline decoration-wavy cursor-pointer"
            onClick={() => remove_item(id)}
          >
            Eliminar
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex bg-gray-100 h-screen items-center justify-center text-gray-700">
      <div className="flex flex-col w-[30%] h-[90%] m-6">
        <h4>Datos</h4>
        <div className="flex flex-col bg-white shadow-xl drop-shadow-md h-[18%] rounded-xl justify-around items-center mb-4">
          <div className={`w-[90%] h-20 flex items-center`}>
            <p className="text-xs w-[30%] mr-8">Ingrese su nombre</p>
            <input
              type="text"
              placeholder="Nombre"
              className="w-[70%] border-2 rounded-lg shadow-xl drop-shadow-md font-sans"
            ></input>
          </div>
          <div className={`w-[90%] h-20 flex items-center`}>
            <p className="text-xs w-[30%] mr-8">Ingrese su correo</p>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-[70%] border-2 rounded-lg shadow-xl drop-shadow-md font-sans"
            ></input>
          </div>
        </div>
        <h4>Seleccione el medio de pago</h4>
        <div className="flex flex-col bg-white shadow-xl drop-shadow-md h-[30%] rounded-xl justify-between items-center mb-4">
          <div
            onClick={() => setPayment(0)}
            className={`w-72 h-20 my-1 justify-around flex items-center border-2 rounded-xl shadow-xl drop-shadow-md ${
              payment === 0 ? "bg-green-300 " : "bg-white cursor-pointer"
            }`}
          >
            <p className="text-sm">Efectivo</p>
            <p className="text-2xl">💵</p>
          </div>
          <div
            onClick={() => setPayment(1)}
            className={`w-72 h-20 my-1 justify-around flex items-center border-2 rounded-xl shadow-xl drop-shadow-md ${
              payment === 1 ? "bg-blue-300 " : "bg-white cursor-pointer"
            }`}
          >
            <p className="text-sm">Targeta de Crédito</p>
            <p className="text-2xl">💳</p>
          </div>
          <div
            onClick={() => setPayment(2)}
            className={`w-72 h-20  my-1 justify-around flex items-center border-2 rounded-xl shadow-xl drop-shadow-md ${
              payment === 2 ? "bg-yellow-300 " : "bg-white cursor-pointer"
            }`}
          >
            <p className="text-sm">WebPay</p>
            <p className="text-2xl">🏦</p>
          </div>
        </div>
        <h4>Método de entrega</h4>
        <div className="flex flex-col bg-white shadow-xl drop-shadow-md h-[18%] rounded-xl justify-around items-center mb-4">
          <div
            onClick={() => handleChangeDelivery(0, 0)}
            className={`w-72 h-20 my-2 justify-around flex items-center border-2 rounded-xl shadow-xl drop-shadow-md ${
              delivery === 0 ? "bg-orange-300 " : "bg-white cursor-pointer"
            }`}
          >
            <p className="text-sm">Entrega en Local</p>
            <p className="text-2xl">🏬</p>
          </div>
          <div
            onClick={() => handleChangeDelivery(1, 2500)}
            className={`w-72 h-20 my-2 justify-around flex items-center border-2 rounded-xl shadow-xl drop-shadow-md ${
              delivery === 1 ? "bg-red-300 " : "bg-white cursor-pointer"
            }`}
          >
            <p className="text-sm">a Domicilio</p>
            <p className="text-2xl">🏠</p>
          </div>
        </div>
        {delivery === 1 ? (
          <div className="h-[10%]">
            <h4>Dirección de entrega a domicilio</h4>
            <div className="flex flex-col bg-white shadow-xl drop-shadow-md rounded-xl justify-between items-center">
              <div className={`w-[90%] h-20 flex items-center`}>
                <p className="text-sm w-[20%] mr-8">Dirección</p>
                <input
                  type="text"
                  placeholder="Calle"
                  className="w-[70%] border-2 rounded-lg shadow-xl drop-shadow-md font-sans mx-2"
                ></input>
                <select
                  type="text"
                  placeholder="Calle"
                  className="w-[70%] border-2 rounded-lg shadow-xl drop-shadow-md font-sans"
                >
                  <option value="0">Seleccione una comuna</option>
                  <option value="2">La Reina</option>
                  <option value="3">Las Condes</option>
                  <option value="4">Lo Barnechea</option>
                  <option value="5">Lo Espejo</option>
                  <option value="6">Lo Prado</option>
                  <option value="7">Macul</option>
                  <option value="8">Maipú</option>
                  <option value="9">Ñuñoa</option>
                  <option value="10">Pedro Aguirre Cerda</option>
                  <option value="11">Peñalolén</option>
                  <option value="12">Providencia</option>
                  <option value="13">Pudahuel</option>
                  <option value="14">Quilicura</option>
                  <option value="15">Quinta Normal</option>
                  <option value="16">Recoleta</option>
                  <option value="17">Renca</option>
                  <option value="18">San Joaquín</option>
                  <option value="19">San Miguel</option>
                  <option value="20">San Ramón</option>
                  <option value="21">Santiago</option>
                  <option value="22">Vitacura</option>
                </select>
              </div>
            </div>
          </div>
        ) : delivery === 0 ? (
          <div className="h-[10%]">
            <h4>Dirección de entrega en local</h4>
            <div className="flex flex-col bg-white shadow-xl drop-shadow-md rounded-xl justify-between items-center">
              <div className={`w-[90%] h-20 flex items-center`}>
                <p className="text-sm w-[30%] mr-8">Locales</p>
                <select
                  type="text"
                  placeholder="Calle"
                  className="w-[70%] border-2 rounded-lg shadow-xl drop-shadow-md font-sans"
                >
                  <option value="0">Seleccione una sucursal</option>
                  <option value="1">Sucursal 1</option>
                  <option value="2">Sucursal 2</option>
                  <option value="3">Sucursal 3</option>
                  <option value="4">Sucursal 4</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col w-[70%] h-full pt-8 mr-6 ">
        <div className="flex flex-col flex-nowrap bg-white rounded-xl w-full h-full p-4 overflow-y-auto mb-6 shadow-xl drop-shadow-md">
          <div className="flex justify-between">
            <div
              className="flex flex-row text-start items-center mt-[-10px] cursor-pointer text-green-500"
              onClick={() => navigate("/forkpizzas")}
            >
              <BsFillArrowLeftCircleFill className="w-8 h-8 mr-2" />
              <h2 className="underline decoration-wavy">Volver al menú</h2>
            </div>
            <div
              className="flex flex-row text-start items-center mt-[-10px] cursor-pointer text-red-500"
              onClick={empty_cart}
            >
              <BiTrash className="w-8 h-8 mr-2" />
              <h2 className="underline decoration-wavy cursor-pointer">
                Eliminar Productos
              </h2>
            </div>
          </div>
          {cart.length !== 0
            ? cart.items.map((item, key) => (
                <ProductCart
                  key={key}
                  name={item.name}
                  quantity={item.quantity}
                  img={item.img}
                  id={item.id}
                  price={item.price}
                />
              ))
            : "Cart is empty"}
        </div>
        <h4>¿Desea añadir propina?</h4>
        <div className="flex justify-between">
          <div className="flex bg-white items-center h-[77%] rounded-xl w-full mr-6 p-3 justify-around shadow-xl drop-shadow-md text-gray-800">
            <div className="flex flex-col items-center">
              <BiHappy className="w-16 h-16 hover:text-gray-600" />
              <p>Sin propina</p>
              <input
                className="w-6 h-6 accent-green-600"
                checked={tip === 0}
                onClick={() => handleChange(0)}
                type="radio"
                name="tip"
              ></input>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <BiHappyBeaming className="w-16 h-16 hover:text-gray-600" />
                <p>5%</p>
                <input
                  className="w-6 h-6 accent-green-600"
                  onClick={() => handleChange(0.05)}
                  type="radio"
                  name="tip"
                ></input>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <BiHappyHeartEyes className="w-16 h-16 hover:text-gray-600" />
                <p>10%</p>
                <input
                  className="w-6 h-6 accent-green-600"
                  onClick={() => handleChange(0.1)}
                  type="radio"
                  name="tip"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white items-center h-[95%] w-[70%] rounded-xl p-5 ml-auto text-gray-700  shadow-xl drop-shadow-md">
            <div>
              <div className="flex flex-row rounded-xl justify-between">
                <div>
                  <h3 className="text-lg mr-5 text-start">Sub-Total: </h3>
                </div>
                <div>
                  <h3 className="text-lg w-20 mr-10">{to_clp(subTotal)}</h3>
                </div>
              </div>
              <div className="flex flex-row rounded-xl justify-between my-3">
                <div>
                  <h3 className="text-lg mr-5 text-start">Delivery:</h3>
                </div>
                <div>
                  <h3 className="text-lg w-20 mr-10">{to_clp(deliveryCost)}</h3>
                </div>
              </div>
              <div className="flex flex-row rounded-xl justify-between mb-2">
                <div>
                  <h3 className="text-lg mr-5 text-start">Propina:</h3>
                </div>
                <div>
                  <h3 className="text-lg w-20 mr-10">
                    {to_clp(subTotal * tip)}
                  </h3>
                </div>
              </div>
              <div>
                <hr className="bg-gray-900 h-[2px] mb-3"></hr>
              </div>

              <div className="flex flex-row rounded-xl justify-between mt-2">
                <div>
                  <h3 className="text-xl mr-5 my-2 text-start">
                    Total . . . . . . . . .{" "}
                  </h3>
                </div>
                <div>
                  <h3 className="text-2xl w-20 mr-10">{to_clp(total)}</h3>
                </div>
              </div>
              <div className={`w-[90%] h-20 flex items-center`}>
            <p className="text-xs w-[60%] mr-8">Desea Boleta o Factura</p>
             <select className="bg-gray-300 px-6 border-2 rounded-xl">
              <option value="Boleta">Boleta</option>
              <option value="Factura">Factura</option>
             </select>
          </div>
              <button
                onClick={pay}
                type="button"
                className="font-sans text-xl w-full py-2 bg-green-500 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
              >
                {payment === 0 ? "Hacer Pedido" : payment === 1 ? "Proceder al pago" : payment === 2 ? "Continuar con WebPay" : "Pagar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
