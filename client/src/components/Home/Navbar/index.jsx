import { useEffect, useState } from "react";

import { Nav,NavbarContainer, NavbarMenu, NavItem, NavLogo, NavLink, MenuIcon, Topbar, UserAuth, Login, Slash, UserActivity, Wishlist, AddToCart, Span} from "./NavbarElements";
import { FaAlignJustify,FaHeart,FaWeightHanging } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Col, Container, Row, TitleH6 } from "../../Utils/Elements";
import { Link } from "react-router-dom";
const Navbar = () => {

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
                            {/* <Login>Login </Login>  */}
                            <Link to="/account/login">  Login </Link>
                            <Slash>
                                
                            </Slash> 
                            <Link to="/account/register">  Register </Link>
                            {/* <UserRegister>
                                <Close>
                                    <AiOutlineClose />
                                </Close>
                               <Ul>
                                   <Li>Register</Li>
                                   <Li>login</Li>
                                   <Li>Wish List (0)</Li>
                                   <Li>Shopping Cart (0)</Li>
                               </Ul>
                            </UserRegister> */}
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
                  <Wishlist>
                     <FaHeart />
                    <Span>0</Span>
                  </Wishlist>
                  <AddToCart>
                      <FaWeightHanging />
                      <Span>0</Span>
                  </AddToCart>
              </UserActivity>
          </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar