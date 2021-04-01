import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import {Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { userContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Mobile Valley</Navbar.Brand>
    <Nav style={{padding:'10px'}} className="ml-auto">
    <Link to="/home"><Nav.Link href="/">Home</Nav.Link></Link>
    <Link to="/order"><Nav.Link href="/">Orders</Nav.Link></Link>
    <Link to="/admin"><Nav.Link href="/">Admin</Nav.Link></Link>
    <Link to="#pricing"><Nav.Link href="#">Deals</Nav.Link></Link>
    <Nav.Link href="#link">{loggedInUser.name || loggedInUser.displayName}</Nav.Link>
    </Nav>
    {
    !loggedInUser.displayName ? (<Link to="/login"><Button variant="dark">Login</Button></Link>)
    : (<Button onClick={() => setLoggedInUser({})} variant="dark">SignOut</Button>)
    }
  </Navbar>
        </Container>
    );
};

export default Header;
