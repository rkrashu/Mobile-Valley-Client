import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import AddProducts from './components/AddProducts/AddProducts';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Shop from './components/Shop/Shop';
import ChecKOut from './components/Checkout/ChecKout';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
export const userContext = createContext()




function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (    
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
    <Switch>
      <PrivateRoute path='/admin'>
      <Admin></Admin>
      </PrivateRoute>
      <PrivateRoute path='/addProduct'>
        <AddProducts></AddProducts>
      </PrivateRoute>
      <PrivateRoute path='/manageProduct'>
        <ManageProduct></ManageProduct>
      </PrivateRoute>
      <PrivateRoute path='/checkout/:id'>
        <ChecKOut></ChecKOut>
      </PrivateRoute>
      <PrivateRoute path='/order'>
        <Order></Order>
      </PrivateRoute>
      <Route path='/login'>
       <Login></Login>
      </Route>
      <Route path ='/'>
        <Shop></Shop>
      </Route>
      
    </Switch>
      
    </Router>
    </userContext.Provider>
  );
}

export default App;
