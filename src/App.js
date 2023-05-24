import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/product-detail" element={<ProductDetails/>}/>
                </Routes>
                <Footer/>
            </Router>

        </div>
    );
}

export default App;
