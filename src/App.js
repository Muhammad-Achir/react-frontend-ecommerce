import './App.css';

import { Switch, Route, Router, useHistory } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './components/ProductDetail';
import AddProduct from './pages/AddProduct';
import Login from './pages/Login';
import Register from './pages/Register';

import PrivateRoute from './components/PrivateRouter';

function App() {
  const history = useHistory ()
  let check = !localStorage.getItem('token')
  console.log("check" + check)
  const [ isLoggedIn, setIsLoggedIn ] = useState (!check)

  function setLogin () {
    setIsLoggedIn (true)
  }

  function logout () {
    localStorage.removeItem ('token')
    setIsLoggedIn (false)
  }

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} logout={logout}></Navbar>

      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <PrivateRoute exact path='/products'>
          <Products></Products>
        </PrivateRoute>

        <PrivateRoute path="/product/:id">
          <ProductDetail></ProductDetail>      
        </PrivateRoute>

        <PrivateRoute path="/add/">
          <AddProduct></AddProduct>      
        </PrivateRoute>

        <Route exact path='/login'>
          <Login setLogin={setLogin}></Login>
        </Route>

        <Route exact path='/register'>
          <Register></Register>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
