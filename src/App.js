import { Routes, Route } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Customize from './components/Customize';
import Checkout from "./components/Checkout";
import Branches from "./components/Branches";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/forkpizzas" element={<Menu/>}/>
        <Route path="/forkpizzas/my-pizza" element={<Customize/>}/>
        <Route path="/forkpizzas/checkout" element={<Checkout/>}/>
        <Route path="/forkpizzas/branches" element={<Branches/>}/>
      </Routes>
    </>
  );
}