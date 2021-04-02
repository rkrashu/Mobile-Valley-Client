import React, { useContext } from 'react';
import firebaseConfig from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Container, Form, Button } from 'react-bootstrap';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { AiFillGoogleCircle } from "react-icons/ai";


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
    const handleLoginIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
      setLoggedInUser(result.user)
   history.replace(from);
  }).catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage)
  });
    }
    return (
        <Container>
        <div style={{width:'50%', margin: '200px 300px'}}>
              <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Log In
                </Button>
            </Form>
              <div className='container' >
              <button style={{marginTop:'40px',marginLeft:'70px', backgroundColor:'#1D8348', color:'white', width:'300px',height: '50px'}} onClick={()=>handleLoginIn()}>{<AiFillGoogleCircle />} Login in with Google</button>
              </div>
      </div>

        </Container>
    );
};

export default Login;