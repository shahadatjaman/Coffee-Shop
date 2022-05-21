import { useEffect, useState } from "react";

import { Nav,NavbarContainer, NavbarMenu, NavItem, NavLogo, NavLink, MenuIcon, Topbar, UserAuth, Login, Slash, UserActivity, Wishlist, AddToCart, Span, MyAccount} from "./NavbarElements";
import { FaAlignJustify,FaHeart,FaWeightHanging } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Col, Container, Row, TitleH6 } from "../../Utils/Elements";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

import {logout} from "../../../store/action/authAction"

import {Navigate} from 'react-router-dom'

const Navbar = ({auth,isLogged,logout, cart}) => {

    const [open, setOpen] = useState(false)
    const [sticky, setSticky] = useState(false)
    

    const isOpen = () => {
        setOpen(true)
    }
    const isClose = () => {
        setOpen(false)
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


    return (  
        <>
        <Topbar>
            <Container>
                <Row>
                    <Col w="50">
                        <TitleH6>
                          Get Special 27% Discount On Ice Cream Cone
                        </TitleH6>
                    </Col>
                    <Col w="50">
                        <UserAuth>
                          
                            {isLogged.isAuthenticated ? (
                               <>
                               <Button color="#000" bg="#fff" onClick={() => {
                                   logout(Navigate)
                               }}>Logout</Button>
                               <Slash>
                                   
                                   </Slash> 
                                 <Link to="/account">
                                       
                                       <MyAccount>
                                           My Account
                                       </MyAccount>
                                 </Link>
                                </>
                            ) : (
                                <>
                               <NavLink to="/account/login">Login </NavLink> 
                               <Slash>
                                   
                               </Slash> 
                               <NavLink to="/account/register">  Registerr </NavLink>
                               </>
                            )}
    
                        </UserAuth>
                    </Col>
                </Row>
            </Container>
        </Topbar>
         <Nav issticky={sticky}>
          <NavbarContainer>
              <NavLogo to='/'>
                  .COFFEE
              </NavLogo>
              <MenuIcon>
                {open ? <AiOutlineClose onClick={() => isClose()} /> : <FaAlignJustify onClick={() => isOpen()} />}
              </MenuIcon>
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
    
                  <AddToCart>
                      <FaWeightHanging />
                     
                          {cart.cartPrices !== undefined && cart.cartPrices && Object.keys(cart.cartPrices).length > 0 && (
                              <Span>
                                {cart.cartPrices.cartCount}
                              </Span>
                          )}
                       
                  </AddToCart>
              </UserActivity>
          </NavbarContainer>
         </Nav>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        auth : state.auth,
        cart : state.cart
    }
}

export default connect(mapStateToProps,{logout})(Navbar)