import Checkout from "./Checkout";

export default function Customize() {
  return (
    <div className="flex bg-black h-screen items-center justify-center">
        <div>
        <Checkout></Checkout>
          </div>
      
      <Checkout></Checkout>
    </div>
  )
}