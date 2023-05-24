import React from 'react';
import ProductList from "./ProductList";
import FilterBar from "./FilterBar";

const Product = () => {
    return (
        <div>
        <FilterBar/>
        <ProductList/>
        </div>
    );
};

export default Product;