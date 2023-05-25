import CategoryManager from './adcomponents/CategoryManager';
import OrderManagerment from './adcomponents/OrderManagement';
import ProductManager from './adcomponents/ProductManager';
import Statistical from './adcomponents/Statistical';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./customer/components/Header";
import Footer from "./customer/components/Footer";
import ProductDetails from "./customer/components/ProductDetails";
import Cart from "./customer/Pages/Cart";
import Register from "./customer/Pages/Register";
import Login from "./customer/Pages/Login";
import Product from "./customer/Pages/Product";
import Contact from "./customer/Pages/Contact";
import About from "./customer/Pages/About";
import Home from "./customer/Pages/Home";

function App() {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product-detail" element={<ProductDetails/>}/>
            <Route path="/statistical" element={<Statistical/>}></Route>,
            <Route path="/category" element={<CategoryManager/>}></Route>,
            <Route path="/product_manager" element={<ProductManager/>}></Route>
            <Route path="/order" element={<OrderManagerment/>}></Route>
          </Routes>
          <Footer/>
        </Router>
      </div>

  );
}

export default App;
