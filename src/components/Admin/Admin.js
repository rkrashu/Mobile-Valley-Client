import { Container } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import React from 'react';
import AddProducts from '../AddProducts/AddProducts';

const Admin = () => {
    return (
        <Container>
            <div>
            <Sidebar></Sidebar>
            </div>
            
            <div style={{marginLeft:'500px', marginTop:'20px'}}>
             <AddProducts></AddProducts>
            </div>
           
        </Container>
    );
};

export default Admin;