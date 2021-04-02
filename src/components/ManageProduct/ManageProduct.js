import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import { AiFillDelete } from "react-icons/ai";

const ManageProduct = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(()=>{
        fetch('https://apple-custard-55014.herokuapp.com/allProducts')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[])

    const deleteItem = (e,id) =>{
        // console.log(e.target.parentNode)
        fetch(`https://apple-custard-55014.herokuapp.com/delete/${id}`,{
            method: "DELETE",
        })
        .then(res => {
            if (res) {
                // e.target.parentNode.parentNode.style.display="none"            }
           
            alert("Product Delete Successfully")
            }
        })
    }
    return (
        <Container>
            <Sidebar></Sidebar>
             <div style={{textAlign:'center', marginTop:'30px', marginLeft:'200px'}}>
                    <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>      
                    {
                        allProducts.map(pd=> (
                            <tr>
                                <td>{pd.name}</td>
                                <td>{pd.price}</td>
                                <td><button onClick={(e)=>deleteItem(e, pd._id)}>{<AiFillDelete />}</button></td>
                                
                             </tr>
                        ))
                    }
                    </tbody>
                  </Table>
                  </div>
        </Container>
    )
};

export default ManageProduct;