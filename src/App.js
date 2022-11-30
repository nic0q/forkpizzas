import { Routes, Route } from "react-router-dom";
import './App.css';
import Index from './components/Index';
import Menu from './components/Menu';
import Customize from './components/Customize';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/my-pizza" element={<Customize/>}/>
      </Routes>
    </>
  );
}