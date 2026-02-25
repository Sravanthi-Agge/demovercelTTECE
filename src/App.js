import { BrowserRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Reg from "./Reg";
import { Route } from "react-router-dom";
//import { Routes } from "react-router-dom";
import Home from "./Home";
function App()
{
  return(
    <>
    <h1> i am app</h1>
     <BrowserRouter>
     <Routes>
      <Route path="/reg" element={<Reg/>}/>
      <Route path="/h" element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App