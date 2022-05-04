import { useEffect } from "react";

import { connect } from "react-redux";

import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./Assets/styles/GlobalStyles";



import Login from "./components/Account/Login";


import Register from "./components/Account/Register";

import {getProduct} from "./store/action/authAction"

function App({getProduct, login}) {
  useEffect(() => {
    getProduct()
  })
  const {isAuthenticated} = login
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account/register" element={ <Register />} />
          <Route path="/account/login" element={<Login />} />
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
