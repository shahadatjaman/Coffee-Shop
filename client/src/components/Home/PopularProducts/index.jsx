import {connect} from 'react-redux'

import * as Types from "../../../store/types/types"

import { Cart, Img, ProductWrapper, Image, CartContent, H4, Stars, Li, Prices, Price, Dis, Old, DisDiv, Sale,Span, Buttons, Button, StarAndCart } from "./ProductsStyles";

import { AiFillHeart } from "react-icons/ai";

import {Container, Row, Col, Title, TitleH1} from "../../Utils/Elements"


import { AiFillStar,AiOutlineEye,AiOutlineSwap,AiOutlineShoppingCart } from "react-icons/ai";

import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';

const PopularProducts = ({auth}) => {
   
    
    const { product} = auth
    



    return (
        <ProductWrapper>
            <Container>
               <Row>
                   <Col w="100">
                       <Title>
                           <TitleH1>
                           Popular Products

                           </TitleH1>
                       </Title>
                   </Col>
               </Row>
               <Row>
                   
                   { product !== undefined && product.length > 0 && product?.map(((pro, index) => {
                       return (
                        <Col w="25" md="50" sm="100" key={index}>
                        <Cart>
                            <Image>
                                <Link to={`/product/${pro._id}`}>
                                  <Img src={require(`../../../Assets/Images/${pro.avatar}`)} alt="one"/>
                                </Link>
                                 
                                <DisDiv>
                                    <Span>
                                        {pro.discount}% of
                                    </Span>
                                </DisDiv>
                                {/* <Buttons>
                                    <Button onClick={() => wishadd(pro._id)}>
                                        
                                        {loading ? <ClipLoader /> : <AiFillHeart />}
                                    </Button>
                                    <Button>
                                        <AiOutlineEye />
                                    </Button>
                                    <Button>
                                        <AiOutlineSwap />
                                    </Button>
                                    
                                </Buttons> */}
                            </Image>
                            <CartContent>
                                
                                <StarAndCart>
                                <Stars>
                                    <Li>
                                        <AiFillStar />
                                    </Li>
                                    <Li>
                                    <AiFillStar />
                                    </Li>
                                    <Li>
                                    <AiFillStar />
                                    </Li>
                                    <Li>
                                    <AiFillStar />
                                    </Li>
                                </Stars>
                                <Button>
                                        <AiOutlineShoppingCart />
                                    </Button>
                                </StarAndCart>
                               <H4>{pro.coffeeName} </H4>
                               <Prices>
                                   <Price>${pro.price}.00</Price>
 
                                   <Old>${pro.oldPrice}.00</Old>
                               </Prices>
                            </CartContent>
                        </Cart>
                    </Col>
                       )
                   }))}
                   
               </Row>
            </Container>
        </ProductWrapper>
    );
}

const mapStateToProps = (state)=> {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps)(PopularProducts);