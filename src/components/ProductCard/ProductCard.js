import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './productCard.css'

const ProductCard = (props) => {
    const {name, price, imageURL, _id} =(props.product)
    
    return (
        <div className='productDetails'>
           <Card>
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                <Card.Title style={{textAlign: 'center', color: 'blue'}}>{name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <h5 style={{display:'inline-block'}}>Price: ${price}</h5>
                    <Link to={"/checkout/" + _id}><Button style={{marginLeft:'100px'}}>Buy Now</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ProductCard;