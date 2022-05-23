import { useEffect, useState } from "react";

import { Nav,NavbarContainer, NavbarMenu, NavLogo, MenuIcon, UserActivity, AddToCart, Span, Button, MyCart, H5, User, AccountMenu, Ul, Li, LogoBar, SearchPanel, SearchInput, SearchIcon} from "./NavbarElements";
import { FaAlignJustify,FaUserAlt,FaSearch } from "react-icons/fa";
import { AiOutlineClose,AiOutlineShoppingCart } from "react-icons/ai";
import {connect} from "react-redux"

import {logout} from "../../../store/action/authAction"

import { Link } from "react-router-dom";

import {Col, Row, Container} from "../../Utils/Elements"


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
          <Container>
             <Row>
              <Col w="25" sm="50">
                <LogoBar>
                    <MenuIcon>
                        {open ? <AiOutlineClose onClick={() => isClose()} /> : <FaAlignJustify onClick={() => isOpen()} />}
                    </MenuIcon>
                    <NavLogo to='/'>
                        .COFFEE
                    </NavLogo>
                </LogoBar>
              </Col>
              
              <NavbarMenu  toggle={open}>
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
            
              </NavbarMenu>
             
             <Col w="50" none="true">
                <SearchPanel smnone="true">
                    <SearchInput type="search" name='search' placeholder="Search Here" />
                    <SearchIcon>
                     <FaSearch />
                  </SearchIcon>
                </SearchPanel>
             </Col>
              
              <Col w="25" sm="50">
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
              </Col> 

              </Row>
              <Row>
                  <Col w="100">
                    <SearchPanel smblock="true">
                    <SearchInput type="search" name='search' placeholder="Search Here" />
                    <SearchIcon>
                        <FaSearch />
                    </SearchIcon>
                    </SearchPanel>
                  </Col>
              </Row>
          </Container>
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