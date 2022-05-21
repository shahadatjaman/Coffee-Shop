import {useEffect} from 'react'

import {connect} from "react-redux"

import {Container, Row, Col} from "../../Utils/Elements"

import { Dir, LeftMenu, Li, MenuBody, MenuTitle, Wrapper, Title, Ul, Text } from "../MyAccount/AccountStyles";

import {Link, NavLink} from "react-router-dom"

import { Button, Cart, CartName, CartTitle, CartWrapper, CheckOut, H3, H5, Image, Img, Items, Price, Span, Trash,OrderButton,Loading, Empty, Cuntinue } from "./CartStyles";


import { FaTrash,FaChevronLeft } from "react-icons/fa";


import { getCartAction,deleteCart } from "../../../store/action/cartAction";


const AddToCart = ({getCartAction,cart,login,deleteCart}) => {
       
    return (
        <>
        {/* <Navbar /> */}
        <Wrapper>
            <Container>
                <Row>
                    <Col>
                      <Dir>
                          <NavLink to="/">Home | </NavLink>
                          <NavLink to="/account"> Account </NavLink>
                      </Dir>
                    </Col>
                </Row>
            </Container>
           <Container>
               <Row>
                   <Col w="25">
                       <LeftMenu>
                          <MenuTitle>
                              <Title>
                                Account
                              </Title>
                               </MenuTitle>
                           <MenuBody>
                               <Ul>
                                   <Li>
                                    <NavLink to="/account">My Account </NavLink>
                                   </Li>
                                   <Li>
                                       <NavLink to="/account/cart">
                                       Cart List
                                       </NavLink>
                                   </Li>
                                   <Li>Order History</Li>
                               </Ul>
                           </MenuBody>
                       </LeftMenu>
                   </Col>
                   <Col w="50">
                       <CartWrapper>
                         <CartTitle>
                          <H3>Shopping Cart</H3>
                          </CartTitle> 
                        {cart.loading ? (<Loading>Loading</Loading>) : (
                            <>
                            {cart.cartData !== undefined  && cart.cartData.length > 0 && cart.cartData?.map(data => {
                                   
                                   return (
                                      <Cart key={data._id}>
                                      <Row>
                                          <Col w="20">
                                          <Image>
                                              <Img src={require(`../../../Assets/Images/${data.avatar === undefined ? "" : data.avatar}`)} alt="one"/>
                                          </Image>
                                          </Col>
                                          
                                          <Col w="30">
                                              <CartName>
                                              <H5>{data.coffeeName}</H5>
                                              
                                              <Price>
                                                  <Span mt="1" fw="800">${data.price}.00</Span>
                                                  <Span mt="1" fw="500"> qty : {data.qty}</Span>
                                              </Price>
                                              </CartName>
                                          </Col>
          
                                          <Col w="25">
                                              <Price>
                                              <Span mt="1" fw="800">${data.tottalPrice}.00</Span>
                                              </Price>
                                          </Col>
                                      
                                          <Col w="25">
                                              <Trash>
                                              <Button onClick={() => deleteCart(data._id)}>
                                                  <FaTrash />
                                              </Button>
                                              </Trash>
                                          </Col>
                                      
                                      </Row>
                                      </Cart>
                                   )
                            })}
                            </>
                        )} 
                        {cart.cartData !== undefined  && cart.cartData.length === 0 ? (<Empty>Your cart is empty</Empty>) : ""}
                        
                       </CartWrapper>
                       <Cuntinue>
                          <FaChevronLeft />
                           <Span>
                              <Link to="/">
                                 Cuntinue Shopping
                              </Link>
                           </Span>
                       </Cuntinue>
                   </Col>
                   <Col w="25">
                      <CheckOut>
                          
                          <Items mb="1">
                              {/* <Span fw="500"> items</Span> */}
                              {cart.cartPrices !== undefined && (<Span fw="500">{cart.cartPrices.cartCount} Itmes</Span>)}
                              {cart.cartPrices !== undefined && (<Span fw="700">${cart.cartPrices.totallPrice}</Span>)}
                          </Items>
                          <Items mb="3">
                              <Span fw="500">Shopping</Span>
                              <Span fw="700">Free</Span>
                          </Items>
                          <Items>
                              <Span fw="500">Total (tax incl.)</Span>
                              {/* <Span fw="700">$190,00</Span> */}
                              {cart.cartPrices !== undefined && (<Span fw="700">${cart.cartPrices.totallPrice}</Span>)}
                          </Items>
                          <OrderButton to="/">PROCEED TO CHECKOUT</OrderButton>
                      </CheckOut>
                   </Col>
               </Row>
           </Container>
        </Wrapper>
        </>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        cart : state.cart,
        login : state.login
    }
}

export default connect(mapStateToProps, {getCartAction,deleteCart})(AddToCart);