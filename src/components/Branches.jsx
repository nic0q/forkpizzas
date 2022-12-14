import { Footer } from "./Footer";
import Navbar from "./Navbar";

const Branch = ({name, address, phone}) => {
  return <div className="border-2 border-gray-300 p-4 rounded-2xl bg-orange-500 shadow-xl drop-shadow-md">
    <h2 className="text-2xl font-bold">{name}</h2>
    <p className="text-lg text-gray-200">{address}</p>
    <p className="text-lg text-gray-200">{phone}</p>
  </div>
}

export default function Branches(){
  return <div className="flex flex-col w-full h-screen bg-gray-200 items-center">
    <Navbar></Navbar>
    <div className="flex flex-col w-full h-full  items-center pt-8 mb-8">
      <h1 className="text-3xl font-bold">Sucursales en todo Santiago 🇨🇱</h1>
      <div className="flex flex-wrap w-[95%] items center gap-4 mt-8 justify-center">
        <Branch name="Santiago" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="Estación Central" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="Nuñoa" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="Providencia" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="La Reina" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="Maipú" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="Vitacura" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="La Florida" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="Lo Barnechea" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="Las Condes" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="Peñalolén" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
        <Branch name="Quilicura" address="Av. Apoquindo 5000, Las Condes" phone="+56 9 1234 5678"></Branch>
      </div>
    </div>
  <Footer></Footer>
  </div>
}