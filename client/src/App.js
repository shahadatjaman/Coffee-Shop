import * as Types from "../src/store/types/types"

import { useEffect } from "react";

import { connect } from "react-redux";

import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./Assets/styles/GlobalStyles";



import Login from "./components/Account/Login";


import Register from "./components/Account/Register";

import Account from "./components/Account/MyAccount/index";

import {getProduct} from "./store/action/authAction"

import {getUser} from "./store/action/cartAction"

import PrivateRoute from "./PrivateRoute";
import Navbar from "./components/Home/Navbar";
import OutlerRoute from "./OutlerRoute";
import ProductDetails from "./components/Home/ProductDetails";
import AddToCart from "./components/Account/Cart";

import Axios from "axios";

import {getCartAction} from "../src/store/action/cartAction"


import store from './store';


const token = localStorage.getItem("auth_token");

function App({getProduct, login,getCartAction}) {
  useEffect(() => {
    getProduct()
    
  },[getProduct])

  useEffect(() => {
    getCartAction()
},[getCartAction])

  const getUser = ()  => {
    Axios.get('/api/user', {
      headers : {
          Authorization : token
      }
  })
         .then(user => {
          
            store.dispatch({
              type : Types.USER,
              payload : {
                user : user.data.user
              }
            })
           
         })
         .catch(error => {
           console.log(error)
         })
  }
   
  useEffect(() => {
    getUser()
  }, [])
  

  return (
    <>
      <GlobalStyles />
      
      <Router>
      <Navbar isLogged={login} />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/register" element={
          <OutlerRoute dirLink="/">
            <Register />
          </OutlerRoute>
        } />
        <Route path="/account/login" element={
        <OutlerRoute dirLink="/">
          <Login />
        </OutlerRoute>
      } />
        <Route  path="/account" element={
        <PrivateRoute dirLink="/">
          <Account />
        </PrivateRoute>
      }/>
      <Route  path="/account/cart" element={
        <PrivateRoute dirLink="/account/login">
          <AddToCart />
        </PrivateRoute>
      }/>
        <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}
const mapStateToProps = state => {
  return {
    login : state.login
  }
}
export default connect(mapStateToProps,{getProduct,getUser,getCartAction})(App);
