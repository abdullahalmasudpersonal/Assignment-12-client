import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css';

const Products = () => {
    const [homeProducts, setHomeProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setHomeProducts(data));
    }, []);

    return (
        <div className='products'>
            <h1></h1>
            <div className='products-dev'>
                {
                    homeProducts.map(homeProduct => <Product
                        key={homeProduct._id}
                        homeProduct={homeProduct}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;