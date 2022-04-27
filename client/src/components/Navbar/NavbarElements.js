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
    background: #DAB88B;
    z-index: 99;
  }
  background: ${(props) => (props.issticky ? "#DAB88B" : "#DAB88B")};
  box-shadow: ${(props) =>
    props.issticky ? "0px 5px 20px rgb(0 0 0 / 15%)" : null};
  position: ${(props) => (props.issticky ? "fixed" : "absolute")};
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
  color: ${(props) => (props.issticky ? "#000" : "#fff")};
  @media (max-width: 991px) {
    color: #23255c;
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
  color: ${(props) => (props.issticky ? "#000" : "#fff")};
  @media (max-width: 991px) {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: large;
  }
`;


