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
            console.log(data)
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
        fetch('https://apple-custard-55014.herokuapp.com/orderConfirm',{
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(orderDetails)
      })
              .then(res => console.log(res))
    }
    return (
        <Container style={{marginTop:'150px'}}>

            <h2>CheckOut</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
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
<button onClick={()=>handleBuyNow(productInfo)}>CheckOut</button>
</div>

        </Container>
    );
};

export default ChecKOut;