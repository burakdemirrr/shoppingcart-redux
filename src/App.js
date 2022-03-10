import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import SingleProduct from "./SingleProduct"

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <ToastContainer />
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/item/:id" element={<SingleProduct/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>  
    </div>
  );  
}
export default App;
