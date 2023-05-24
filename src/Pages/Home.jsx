import React from 'react';
import Slider from "../components/Slider";
import Product from "../components/Product";
import About from "../components/About";
import Feature from "../components/Feature";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Product/>
            <About/>
            <Feature/>
            <Contact/>
        </div>
    );
};

export default Home;