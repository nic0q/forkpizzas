import { Routes, Route } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Customize from './components/Customize';
import Checkout from "./components/Checkout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/forkpizzas" element={<Menu/>}/>
        <Route path="/my-pizza" element={<Customize/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </>
  );
}