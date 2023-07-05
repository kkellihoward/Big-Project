import React from 'react';
import {
    Nav,
    Bars,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;