import { useEffect, useState } from "react";

import { Nav,NavbarContainer, NavbarMenu, NavItem, NavLogo, NavLink, MenuIcon, Topbar, UserAuth, Slash, UserActivity, AddToCart, Span, Button, MyCart, H5, User, AccountMenu, Ul, Li, LogoBar} from "./NavbarElements";
import { FaAlignJustify,FaUserAlt } from "react-icons/fa";
import { AiOutlineClose,AiOutlineShoppingCart } from "react-icons/ai";
import {connect} from "react-redux"

import {logout} from "../../../store/action/authAction"
import { Link } from "react-router-dom";


const Navbar = ({auth,isLogged,logout, cart,login}) => {

    const [open, setOpen] = useState(false)
    const [sticky, setSticky] = useState(false)
    const [account, setAccount] = useState({
        istrue : false
    })
    

    const isOpen = () => {
        setOpen(true)
    }
    const isClose = () => {
        setOpen(false)
    }

    const isOpenAccount = () => {
        setAccount({
            istrue : true
        })
    }
    const isCloseAccount = () => {
        setAccount({
            istrue : false
        })
    }

    const isHeaderSticky = () => {
       if(window.scrollY >= 400){
           setSticky(true)
       }else{
           setSticky(false)
       }
    }
    useEffect(() => {
    isHeaderSticky()
    })
   
    window.addEventListener('scroll', isHeaderSticky)

    

    const {isAuthenticated} = isLogged
    return (  
        <>
         <Nav issticky={sticky}>
          <NavbarContainer>
              <LogoBar>
                <MenuIcon>
                    {open ? <AiOutlineClose onClick={() => isClose()} /> : <FaAlignJustify onClick={() => isOpen()} />}
                </MenuIcon>
                <NavLogo to='/'>
                    .COFFEE
                </NavLogo>
              </LogoBar>
              
              <NavbarMenu  toggle={open}>
                  <NavItem issticky={sticky}>
                      <NavLink smooth  to='#'>
                          Home
                      </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink smooth  to="#about">
                          About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink smooth  to="#products">
                          Products
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink smooth  to="#tstimonial">
                          Tstimonial
                     </NavLink>
                  </NavItem>
            
          
                  <NavItem>
                     <NavLink smooth  to="#">
                          FAQ
                      </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink smooth  to="#">
                          Contract
                    </NavLink>
                  </NavItem>
              </NavbarMenu>
              <UserActivity>
                  <User>
                      <Button>
                        {account.istrue ? (
                            <>
                              <FaUserAlt onClick={() => isCloseAccount()} />
                            </>
                        ) : (
                            <>
                             <FaUserAlt onClick={() => isOpenAccount()} />
                            </>
                        )}
                      </Button>
                      <AccountMenu account={account.istrue}>
                          <Ul>
                              {isAuthenticated ? "":(
                                  <Li>
                                      <Link to="/account/register">
                                        Sign in
                                      </Link>
                                  </Li>
                              )}
                              {isAuthenticated ? "":(
                                  <Li onClick={() => isCloseAccount()}>
                                      <Link to="/account/register">
                                        Register
                                      </Link>
                                  </Li>
                              )}
                             
                              {isAuthenticated ? (
                                  <Li onClick={() => isCloseAccount()}>
                                      <Link to="/account">
                                      My Account
                                      </Link>
                                  </Li>
                              ) : ""}
 
                           {isAuthenticated ? (
                                  <Li onClick={() => isCloseAccount()}>
                                      {login.user._id && (<Link to={`/account/cart/${login.user._id}`}>
                                         Cart
                                      </Link>)}
                                  </Li>
                              ) : ""}
                               {isAuthenticated ? (
                                  <Li onClick={() => isCloseAccount()}>
                                      <Link to="/account/order">
                                         Order
                                      </Link>
                                  </Li>
                              ) : ""}

                            {isAuthenticated ? (
                                  <Li onClick={() => isCloseAccount()}>
                                      <Button onClick={() => logout()}>
                                         Log out
                                      </Button>
                                  </Li>
                              ) : ""}

                              {isAuthenticated ? "":(
                                  <Li onClick={() => isCloseAccount()}>
                                      <Link to="/account/login">
                                        Log in
                                      </Link>
                                  </Li>
                              )}
                          </Ul>
                      </AccountMenu>
                  </User>
    
                  <AddToCart>
                      <AiOutlineShoppingCart />
                     
                          {cart.cartPrices !== undefined && cart.cartPrices && Object.keys(cart.cartPrices).length > 0 && (
                              <Span>
                                {cart.cartPrices.cartCount}
                              </Span>
                          )}
                       
                  </AddToCart>
                  <MyCart>
                      <H5 mb="0.5" fs="20" fw="400" smnone="true">My Cart</H5>
                      {cart.cartPrices !== undefined && cart.cartPrices && Object.keys(cart.cartPrices).length > 0 && (
                              <H5 fw="900" smnone="true">
                                ${cart.cartPrices.totallPrice}
                              </H5>
                          )}
                  </MyCart>
              </UserActivity>   
          </NavbarContainer>
         </Nav>
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth : state.auth,
        cart : state.cart,
        login : state.login
    }
}

export default connect(mapStateToProps,{logout})(Navbar)