import { useEffect, useState } from "react";

import { Nav,NavbarContainer, NavbarMenu, NavItem, NavLogo, NavLink, MenuIcon } from "./NavbarElements";
import { FaAlignJustify } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
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
         <Nav issticky={sticky}>
          <NavbarContainer>
              <NavLogo issticky={sticky} to='/'>
                  .COFFEE
              </NavLogo>
              <MenuIcon>
                {open ? <AiOutlineClose onClick={() => isClose()} /> : <FaAlignJustify onClick={() => isOpen()} />}
              </MenuIcon>
              <NavbarMenu issticky={sticky} toggle={open}>
                  <NavItem issticky={sticky}>
                      <NavLink smooth issticky={sticky} to='#'>
                          Home
                      </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink smooth  issticky={sticky} to="#about">
                          About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink smooth issticky={sticky} to="#products">
                          Products
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink smooth issticky={sticky} to="#tstimonial">
                          Tstimonial
                     </NavLink>
                  </NavItem>
            
          
                  <NavItem>
                     <NavLink smooth issticky={sticky} to="#">
                          FAQ
                      </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink smooth issticky={sticky} to="#">
                          Contract
                    </NavLink>
                  </NavItem>
              </NavbarMenu>
          </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar