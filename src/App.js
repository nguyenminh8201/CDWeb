import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Statistical from "./adcomponents/Statistical";
import CategoryManager from "./adcomponents/CategoryManager";
import ProductManager from "./adcomponents/ProductManager";
import OrderManagerment from "./adcomponents/OrderManagement";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product-detail" element={<ProductDetails />} />
                    <Route path="/statistical" element={<Statistical />}></Route>,
                    <Route path="/category" element={<CategoryManager />}></Route>,
                    <Route path="/productManager" element={<ProductManager />}></Route>
                    <Route path="/order" element={<OrderManagerment />}></Route>

                </Routes>
            </Router>
        </div>
    );
}

export default App;
