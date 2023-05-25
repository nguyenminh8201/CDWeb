import React from 'react';
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import AboutCom from "../components/AboutCom";
import Feature from "../components/Feature";
import ContactCom from "../components/ContactCom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <ProductList/>
            <AboutCom/>
            <Feature/>
            <ContactCom/>
            <Footer/>
        </div>
    );
};

export default Home;