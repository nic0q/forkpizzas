import React from "react"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { GiPitchfork } from "react-icons/gi"
import { useNavigate } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function Navbar({ n_cart_items }) {
  const navigate = useNavigate()
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }
  const CV_LINK =
    "https://drive.google.com/file/d/1NOR8T9LKNtmHoWTI877jPu8yj-xIrEpX/view?usp=sharing"
  return (
    <div className="w-full h-[80px] flex items-center px-w bg-transparent justify-evenly text-xl md:bg-[#e45f13]">
      <div
        className="text-white md:hidden z-10 text-3xl m-3 flex fixed bottom-0 right-0"
        onClick={handleClick}
      >
        {nav ? (
          <FaTimes className="rounded-xl w-14 h-14 text-[#db2777] bg-[#04001E] p-[2px] pb-[3px] mr-1" />
        ) : (
          <GiHamburgerMenu className="rounded-xl w-14 h-14 text-[#db2777] bg-[#04001E] p-[2px] pb-[3px] mr-1" />
        )}
      </div>
      <div
        className="flex items-center border-2 border-purple-800 rounded-xl p-2 text-purple-700 bg-white hover:bg-gray-300 cursor-pointer"
        onClick={() => navigate("/forkpizzas")}
      >
        <p>Pizzas Fork</p>
        <GiPitchfork className="w-10 h-10 font-bold"></GiPitchfork>
      </div>
      <ul className={"hidden md:flex text-white items-center"}>
        <li className="mx-10 hover:text-gray-300 cursor-pointer" onClick={() => navigate("/forkpizzas")}>
          Menu
        </li>
        <li className="mx-7 text-center hover:text-gray-300 cursor-pointer" onClick={() => navigate("/custom")}>
          Arma tu Pizza
        </li>
        <li className="mx-10 hover:text-gray-300 cursor-pointer" onClick={() => navigate("/custom")}>
          Locales
        </li>
        <li>
          <div
            className="relative bg-green-500 inline-block p-2 mt-1 mr-6 rounded-xl font-sans font-bold cursor-pointer h-18 hover:bg-green-400"
            onClick={() => navigate("/checkout")}
          >
            <AiOutlineShoppingCart className="w-14 h-14 text-white" />
            <div className="absolute mt-[-65px] ml-9 rounded-full text-lg bg-green-400 border-2 text-white px-2">
              <span>{n_cart_items}</span>
            </div>
          </div>
        </li>
        <li>
          <button className="font-bold border-none p-1 px-3 text-xl py-2 rounded-full bg-purple-800">
            <a
              target={"_blank"}
              href={CV_LINK} // English version
              rel="noreferrer"
            >
              <span>Pizza Gratis?</span>
            </a>
          </button>
        </li>
      </ul>
      {/* Mobile Responsibe */}

      <ul
        className={
          nav
            ? "flex flex-col bg-[#04001E] justify-center items-center absolute top-0 left-0 w-full h-screen text-white text-4xl"
            : "hidden"
        }
      >
        <li className="py-8 font-semibold">
          <a href="#aboutMe" onClick={handleClick}>
            About Me
          </a>
        </li>
        <li className="py-8 font-semibold">
          <a href="#skills" onClick={handleClick}>
            Skills
          </a>
        </li>
        <li className="py-8 font-semibold">
          <a href="#projects" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li className="py-8 font-semibold">
          <a href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>

        <button className="my-8 font-bold border-none p-1 px-6 text-xl py-2 rounded-full bg-[#E41476]">
          <a target={"_blank"} href={CV_LINK} rel="noreferrer">
            CV GDrive
          </a>
        </button>
      </ul>
    </div>
  )
}
