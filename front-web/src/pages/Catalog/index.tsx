import React from 'react';
import ProductCard from './components/ProductsCard';
import './styles.scss';

const Catalog = () => (
<div className="catalog-container">
    <h1 className="catalog-title">
        Cátalogo de produtos
    </h1>
    <div className="catalog-products">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </div>
</div>
);

export default Catalog;