import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://apple-custard-55014.herokuapp.com/allProducts')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    return (
        <div className='shopProduct'>
        <Container>
            {
                products.map(product => <ProductCard key ={product._id} product = {product}></ProductCard>)
            }
        </Container>
        </div>
    );
};

export default Shop;