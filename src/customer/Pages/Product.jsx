import React from 'react';
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

const Product = () => {
    return (
        <div>
        <FilterBar/>
        <ProductList/>
        </div>
    );
};

export default Product;