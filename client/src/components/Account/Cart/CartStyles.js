import styled from "styled-components";

import { Link } from "react-router-dom";

export const CartWrapper = styled.div`
 border : 2px solid #ddd;
 padding: 0 1rem;
`

export const CartTitle = styled.div`
 border-bottom: 2px solid #ddd;
 margin-bottom: 1rem;
`

export const H3 = styled.h3`
 font-size: 29px;
 font-weight : 500;
 padding: 1rem ;
`
export const Cart = styled.div`
  padding: 1rem;
  border-bottom: 2px solid #ddd;
  display: flex;
  margin-bottom: 1rem;
  transition: .5s;
` 

export const Image = styled.div`
    border: 2px solid #ddd;
    margin: 0;
    padding: 0;
    max-width: 80px;
`

export const Img = styled.img`
  width: 100%;
`

export const CartName = styled.div`
`

export const H5 = styled.h5`
     padding: 0;
    line-height: inherit;
    text-align: left;
    white-space: inherit;
    font-weight: 500;
`

export const Price = styled.div`
`

export const Span = styled.span`
     font-weight: ${(props) => props.fw};
     display: block;
     margin-top: ${(props) => props.mt}rem;
`

export const Trash = styled.div`
`


export const Button = styled.button`
   line-height: 50px;
   cursor: pointer;
  svg{
      font-size: 18px;
      color: #ff00009c;
  }
`

export const CheckOut = styled.div`
 border: 2px solid #ddd;
 padding: 1rem;
`
export const Items = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: ${(props) => props.mb}rem;
`

export const OrderButton = styled(Link)`
 margin-top: 2rem;
 text-align: center;
 background: #5C3D2E;
 color: #fff;
 padding: 1rem;
 width: 100%;
`

export const Loading = styled.h6`
    font-size: 18px;
    text-align: center;
    margin: 6rem 0;
`

export const Empty = styled.span`
 text-align: center;
 margin: 1rem 0;
 display: block;
`

export const Cuntinue = styled.div`
margin-top: 2rem;
 svg{
 margin-right: 1rem;
 }
 span{
   display: inline-block;
 }

 @media (max-width: 768px) {
   span{
     display: inline-block;
   }
 }
 @media (max-width: 768px) {
   margin-bottom: 2rem;
 }
`