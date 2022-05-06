import { useEffect } from "react";

import { connect } from "react-redux";

import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./Assets/styles/GlobalStyles";



import Login from "./components/Account/Login";


import Register from "./components/Account/Register";

import Account from "./components/Account/MyAccount/index";

import {getProduct} from "./store/action/authAction"

import PrivateRoute from "./PrivateRoute";
import Navbar from "./components/Home/Navbar";
import OutlerRoute from "./OutlerRoute";
import ProductDetails from "./components/Home/ProductDetails";

function App({getProduct, login}) {
  useEffect(() => {
    getProduct()
  },[])

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
export default connect(mapStateToProps,{getProduct})(App);
