/* import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import CartCounter from "../cart/CartCounter";


export default function Nav() {
    return (
      <nav>
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <Link to="/cart"><ShoppingCart size={32}/></Link>
          </div>
          <div><CartCounter /></div>
        </div>
      </nav>
    );
  } */

  import React, { useState } from "react";
  import { Link } from "react-router-dom";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  CartContainer,
  CartIcon,
  CartCounterArea,
  LinkCart,
} from "../../styles/Nav.style";
import LogoImg from "../../assets/jsf-light.png";
import { ShoppingCart } from "phosphor-react";
import CartCounter from "../cart/CartCounter";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  function onHamburgerClick() {
    setExtendNavbar((curr) => !curr);
  }

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Link to="/"><Logo src={LogoImg}></Logo></Link> 
        
          
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
              <NavbarLink to="/"> Home</NavbarLink>
              <NavbarLink to="/contact"> Contact</NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#9776;</>}
              </OpenLinksButton>

            </NavbarLinkContainer>
            <LinkCart to="/cart"><CartContainer>
              <CartIcon><ShoppingCart size={52}/></CartIcon>
              <CartCounterArea><CartCounter /></CartCounterArea>  
            </CartContainer></LinkCart>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;