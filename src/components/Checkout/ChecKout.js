import { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const ChecKOut = () => {
    const [loggedInUser] = useContext(userContext)
    const [productInfo, setProductInfo] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://apple-custard-55014.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => {
            setProductInfo(data)})
    },[id])

    const handleBuyNow = (data) =>{
      const orderDetails = data
      const date = new Date()
      const userName = loggedInUser.displayName
      const userEmail = loggedInUser.email
      orderDetails.userName = userName
      orderDetails.email = userEmail
      orderDetails.date = date
      delete orderDetails._id
        fetch('https://apple-custard-55014.herokuapp.com/orderConfirm',{
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(orderDetails)
      })
              .then(res => {
                if(res){
                  alert("Order Done, Thank you.")
                }
              })
    }
    return (
        <Container style={{marginTop:'150px'}}>

            <h2>CheckOut</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{productInfo.name}</td>
      <td>1</td>
      <td>${productInfo.price}</td>
    </tr>
    <tr>
      <td colSpan="2">Total</td>
      <td>${productInfo.price}</td>
    </tr>
  </tbody>
</Table>
<div style={{textAlign: 'right'}}>
<button style={{backgroundColor:'black', border:'1px solid black',borderRadius:'5px', color:'white', height:'35px', width: '120px'}} onClick={()=>handleBuyNow(productInfo)}>Submit Order</button>
</div>

        </Container>
    );
};

export default ChecKOut;