import {Navigate, useNavigate} from "react-router-dom"

import {connect} from 'react-redux'

import toast, { Toaster } from 'react-hot-toast';

import { Cart, Img, ProductWrapper, Image, CartContent, H4, Stars, Li, Prices, Price, Dis, Old, DisDiv, Sale,Span, Buttons, Button, StarAndCart } from "./ProductsStyles";


import {Container, Row, Col, Title, TitleH1} from "../../Utils/Elements"


import { AiFillStar,AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from 'react-router-dom';

import { addToCartAction } from '../../../store/action/cartAction';

const PopularProducts = ({auth,addToCartAction,login}) => {

    const navigate = useNavigate()
    
    const { product} = auth

    const addCart = (id) => {
        if(!login.isAuthenticated){
           return navigate("/account/login")
        }else{
       addToCartAction(id)
        }
        // addToCartAction(id)
    }

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
                                <Button onClick={() => addCart(pro._id)}>
                                        <AiOutlineShoppingCart />
                                 </Button>
                                </StarAndCart>
                               <H4>{pro.coffeeName} </H4>
                               <Prices>
                                   <Price>${pro.price}.00</Price>
 
                                   <Old>${pro.oldPrice}.00</Old>
                               </Prices>
                            </CartContent>
                            <Toaster  
                            position="bottom-left"
                            reverseOrder={false}
                            toastOptions={{
                                className: '',
                                style: {
                                  border: '1px solid #ddd',
                                  padding: '16px',
                                  boxShadow : 'none'
                                },
                              }}
                            />
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
        auth : state.auth,
        login : state.login
    }
}

export default connect(mapStateToProps, {addToCartAction})(PopularProducts);