import React from 'react';
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Product = () => {
    return (
        <div>
            <Header/>
            <FilterBar/>
            <ProductList/>
            <Footer/>
        </div>
    );
};

export default Product;