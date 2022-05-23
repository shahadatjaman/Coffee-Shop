import styled from "styled-components";
import { NavLink as NavLinks } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export const Nav = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #ffffff26;
  z-index: 99;
  transition: 0.5s;
  padding: 2rem 0;
  @media (max-width: 991px) {
    background: #fff;
    z-index: 99;
  }
  background: #fff;
  box-shadow: ${(props) =>
  props.issticky ? "0px 5px 20px rgb(0 0 0 / 15%)" : null};
  position: ${(props) => (props.issticky ? "fixed" : "")};
  border-bottom: 2px solid #ddd;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: auto;
  height: 80px;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 960px;
    padding: 0px 28px;
  }
`;

export const NavLogo = styled(NavLinks)`
  font-size: 32px;
  font-weight: 600;
  color: #000;
  @media (max-width: 991px) {
    color: #000;
  }
  @media (max-width: 991px) {
    font-size: 22px;
  }
  
`;

export const LogoBar = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`

export const MenuIcon = styled.span`
  display: none;
  margin-right: 1rem;
  @media (max-width: 991px) {
    display: block;
    svg {
      font-size: 28px;
      transition: 0.5s;
    }
  }
  @media (max-width: 768px) {
    svg{
      font-size: 18px;
    }
  }
`;

export const NavbarMenu = styled.ul`
  padding-left : 2rem;
  position: absolute;
  visibility: ${(props) => !props.toggle && "hidden"};
  @media (max-width: 991px) {
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    background: #fff;
    /* height: 260px; */
    height: ${(props) => (props.toggle ? "260px" : "0px")};
    overflow: scroll;
    z-index: 99999999 !important;
    transition: 0.5s;
    li {
      a {
        color: ${(props) => (props.toggle ? "#000" : "#fff")};
      }
    }
  }
  
`;

export const NavItem = styled.li`
  display: inline-block;
  @media (max-width: 991px) {
    display: block;
  }
`;

export const NavLink = styled(HashLink)`
  font-size: 16px;
  margin-left: 2rem;
  font-weight: 400;
  color: #000;
  @media (max-width: 991px) {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: large;
  }
`;


export const Topbar = styled.div`
 background: #5C3D2E;
 border-bottom: 1px solid #837d7d54;
padding: 1rem 0;
transition: 0.5s;

`
export const UserAuth = styled.div`
  text-align: right;
  position: relative;
`
export const Login = styled.a`
    max-width: 650px;
    margin: 0 auto;
    color: #555;
    font-weight: 400;
    line-height: 1.625;
    cursor: pointer;
`
export const Register = styled.a`
    max-width: 650px;
    margin: 0 auto;
    color: #555;
    font-weight: 400;
    line-height: 1.625;
    cursor: pointer;
`
export const Slash = styled.span`
 margin: 0 8px;
`

export const UserActivity = styled.div`
    display: flex;
    justify-content: end;

`

export const Wishlist = styled.span`
 width: 40px;
 height: 40px;
 background: #fff;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 border: 2px dashed #dddd;
 margin-right: 1rem;
 position: relative;
 cursor: pointer;
 svg{
   color: red
 }
`

export const AddToCart = styled.span`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 cursor: pointer;
 svg{
   color: #000;
   font-size: 34px;
 }

`

export const Span = styled.span`
  position: absolute;
  color: #000;
  left: 0;
  top: -10px;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: 700;
`

export const UserRegister = styled.div`
  background: #fff;
  width: 200px;
  margin-left: auto;
  position: absolute;
  right: 0;
  top: 160%;
  z-index: 99;
`

export const Ul = styled.ul`
   display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
`

export const Li = styled.li`
 padding-bottom: 1rem;
 cursor: pointer;
 button{
  font-size: 16px;
 }
`

export const Close = styled.span``

export const MyAccount = styled.span`
 color: #fff;
`

export const MyCart = styled.div``

export const H5 = styled.h5`
  color: #000;
  margin-left: 1rem;
  margin-bottom: ${(props) => props.mb}rem;
  font-size: ${(props) => props.fs}px;
  font-weight: ${(props) => props.fw};
  @media (max-width : 991px) {
    display: ${(props) => props.smnone ? "none" : ""};
  }
`

export const User = styled.div`
    position: relative;
 button{ 
    display: inline-block;
    display: inline-block;
    line-height: 37px;
    border-right: 1px solid #ffffff8c;
    padding-right: 1rem;

   svg{
     color: #000;
     font-size: 26px;
   }
 }
`

export const AccountMenu = styled.div`
    position: absolute;
    right: 50%;
    top: 135%;
    width: 220px;
    height: ${(props) => props.account ? "200px" : "0"};
    background: #fff;
    border: ${(props) => props.account ? "3px solid #ddddddb8" : "0px solid #fff"};
    transition : .5s;
    overflow: hidden;
    z-index: 9;
`

export const Button = styled.button`
  cursor: pointer;
  svg{
    margin-top: 7px;
  }
`

export const SearchPanel = styled.div`
  display:  ${(props) => props.smblock && "none"};
  position: relative;
  @media (max-width : 768px) {
    display:  ${(props) => props.smnone && "none"};
    display:  ${(props) => props.smblock && "block"};
    margin-top: 1rem;
  }
   
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 11px 60px 11px 22px;
    border: 0;
    background-color: #f0f0f0;
    color: #777777;
    font-size: 13px;
    letter-spacing: 0px;
    height: 40px;
    text-transform: capitalize;
    border-radius: 25px;
    
`

export const SearchIcon = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    background: #000;
    color: #fff;
    height: 100%;
    width: 10%;
    border-radius: 0px 25px 25px 0px;
`