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
  @media (max-width: 991px) {
    background: #5C3D2E;
    z-index: 99;
  }
  background: #5C3D2E;
  box-shadow: ${(props) =>
    props.issticky ? "0px 5px 20px rgb(0 0 0 / 15%)" : null};
  position: ${(props) => (props.issticky ? "fixed" : "")};
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
  color: #fff;
  @media (max-width: 991px) {
    color: #fff;
  }
`;

export const MenuIcon = styled.span`
  display: none;
  @media (max-width: 991px) {
    display: block;
    svg {
      font-size: 28px;
      transition: 0.5s;
    }
  }
`;

export const NavbarMenu = styled.ul`
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
  color: #fff;
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
 background: #fff;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 border: 2px dashed #dddd;
 position: relative;
 cursor: pointer;
 svg{
   color: green
 }

`

export const Span = styled.span`
  position: absolute;
  color: #000;
  left: 0;
  top: -10px;
  background: #fff;
 border-radius: 50%;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
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
`

export const Close = styled.span``

export const MyAccount = styled.span`
 color: #fff;
`