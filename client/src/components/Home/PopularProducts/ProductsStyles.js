import styled from 'styled-components'

export const ProductWrapper = styled.div`
 padding: 55px 0px 65px;

`

export const Cart = styled.div`
margin-bottom: 1rem;
 &&:hover{
     div{
         p{
             display: none !important;
         }
         div{
             display: flex !important;
         }
     }
 }
`
export  const Image = styled.div`
 position: relative;
`
export const Img = styled.img`
width: 100%;
cursor: pointer;
`
export const CartContent = styled.div``

export const Stars = styled.ul``
export const Li = styled.li` 
display : inline-block;
margin-right: 4px;
padding: 8px 0;
svg{
    color: #d2d2d2
}
`

export const H4 = styled.h4`
    color: #000000;
    font-size: 14px;
    text-decoration: none;
    text-align: left;
    line-height: 24px;
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: .3px;
    margin-bottom: 8px;
    cursor: pointer;
`

export const Prices = styled.div`
  display: flex;
`
export const Price = styled.span`
    display: block;
    color: #000000;
    font-weight: 700;
    margin-bottom: 0;
    font-size: 15px;
    letter-spacing: 0.2px;
    padding: 0;
    margin-right: 1rem;
    
`
export const Old = styled.span`
    color: #c1c1c1;
    text-decoration: line-through;
    margin-left: 3px;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.2px;
    line-height: 24px;
`

export const DisDiv = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
    color: #ffffff;
    width: 45px;
    height: 45px;
    background: red;
    border-radius: 50%;

   
`
export const Span = styled.span`
    padding: 10px;
    font-size: 14px;
    line-height: 14px;
    display: inline-block;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 30%;
  right: 5%;
  right: 0;
  transition: .4s;;
  display: none !important;
`
export const Button = styled.button`
  width: 40px;
  height: 40px;
  background: #5C3D2E;
  border-radius: 50%;
  margin-bottom: 5px;
  color: #fff;
  cursor: ${(props) => props.addedTolading ? "" : "pointer"};
  

  &&:hover{
      background: #000 !important;
      svg{
          color: #fff
      }
  }
`

export const StarAndCart = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`