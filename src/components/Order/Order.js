import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { userContext } from '../../App';

const Order = () => {
    const [loggedInUser] = useContext(userContext)
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://apple-custard-55014.herokuapp.com/order?email='+(loggedInUser.email))
        .then(res => res.json())
        .then(data => setProducts(data))
    },[loggedInUser.email])
        
    if (products.length !== 0) {
        return (
            <Container>
                 <div style={{textAlign:'center', margin:'30px'}}>
                <h2 style={{color:'goldenrod', }} > Total Order: {products.length} </h2>
                </div>
                        <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Order Value</th>
                            <th>Order Time</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                            products.map(pd=> (
                                <tr>
                            <td>{pd.userName}</td>
                            <td>{pd.email}</td>
                            <td>{pd.name}</td>
                            <td>${pd.price}</td>
                            <td>{pd.date}</td>
                          </tr>
                            ))
                        }
                        </tbody>
                      </Table>
            </Container>
        )
    }
    else{
        return (
            <Container >
                <div style={{textAlign:'center', margin:'200px'}}>
                <h1 style={{color:'blue', }} > Sorry No Order Found </h1>
                </div>
                   
                    
            </Container>
        )
    }
    }


export default Order;