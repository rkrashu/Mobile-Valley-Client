import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
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

    if (products.length === 0) {
        return(
            <Container style={{textAlign:'center', marginTop:'200px'}}>
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                
            </Container>
        )
    }
    else{
        return (
            <div className='shopProduct'>
            <Container>
                {
                    products.map(product => <ProductCard key ={product._id} product = {product}></ProductCard>)
                }
            </Container>
            </div>
        );
    }
    
};

export default Shop;