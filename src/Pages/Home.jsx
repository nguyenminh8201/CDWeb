import React from 'react';
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import About from "../components/About";
import Feature from "../components/Feature";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div>
            <Slider/>
            <ProductList/>
            <About/>
            <Feature/>
            <Contact/>
        </div>
    );
};

export default Home;