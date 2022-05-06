import {useEffect, useState} from "react"

import {NavLink,useParams} from 'react-router-dom'

import {connect} from "react-redux"

import { Image, Img, Name,ProductName, ProductDetailsWrapper, Info, Ul, Li, Span, Prices, OldPrice, Price } from "./ProductDetailsStyles";

import {Container, Row, Col, Loading, Button} from "../../Utils/Elements"

import one from "../../../Assets/Images/one.jpg"

import { Dir } from "../../Account/MyAccount/AccountStyles";

import { productAction } from '../../../store/action/productAction';

const ProductDetails = ({productAction,product}) => {

    const productId = useParams()
    
  
    useEffect(() => {
        productAction(productId)
    },[productId,productAction])

    const data = product.product

    
    const {loading} = product

        

    return loading ? (
        <Loading>
            <h3>Loading</h3>
        </Loading>
    ) : (
        <>
         <ProductDetailsWrapper>
            <Container>
                <Row>
                    <Col w="100">
                        <Dir>
                        <NavLink to="/">Home | </NavLink>
                              
                        </Dir>
                    </Col>
                </Row>
                <Row>
                    <Col w="40">
                       {data.avatar  !== undefined && (
                            <Image>
                            <Img src={require(`../../../Assets/Images/${data.avatar === undefined ? "" : data.avatar}`)} alt="one" />
                        </Image>
                       ) }
                        
                    </Col>
                    <Col w="60">
                        <ProductName>
                            <Name>{data.coffeeName}</Name>
                        </ProductName>
                        <Info>
                            <Ul>
                                <Li>
                                    Brand : 
                                 <Span>Apple</Span>
                                </Li>
                                <Li>
                                Availability :  
                                <Span>In Stock</Span>
                                </Li>
                            </Ul>
                        </Info>
                        <Prices>
                            <OldPrice>${data.oldPrice}.20</OldPrice>
                            <Price>${data.price}.00</Price>
                        </Prices>

                        <Button color="#fff" bg="#5C3D2E">Add To Cart</Button>
                    </Col>
                </Row>
            </Container>
         </ProductDetailsWrapper>
        </>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        product : state.product
    }
}

export default connect(mapStateToProps, {productAction})(ProductDetails);