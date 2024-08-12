import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from "./Register";
import ProductDetail from "./ProductDetail";
import Products from "./Product";

function App() {
  return (
    <div style={{marginTop: '-3.5rem'}}>
      <BrowserRouter>
         <Routes>
            <Route path='/' element = {<Register/>} />
            <Route path='/register' element = {<Register/>} />
            <Route path='/login' element = {<Login/>} />
            <Route path='/home' element = {<Home/>} />
            <Route path='/prodDetail' element = {<ProductDetail />} />
            <Route path='/products' element = {<Products />} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
