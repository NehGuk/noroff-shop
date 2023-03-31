import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "33vh" : "80px")};
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 2;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5em;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: ${(props) => props.theme.color.light};
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  margin: 10px;
  padding-right: 1.5em;
  padding-top: 1em;
  transition: ease-in-out, 0.2s;
  :hover {
    scale: 90%;
    transition: ease-in-out, 0.2s;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: ${(props) => props.theme.color.light};
  font-size: 1em;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  margin: 10px;
  transition: ease-in-out, 0.2s;
  :hover {
    scale: 90%;
    transition: ease-in-out, 0.2s;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 8em;
  height: auto;
  transition: ease-in-out, 0.2s;
  :hover {
    max-width: 7.7em;
    transition: ease-in-out, 0.2s;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${(props) => props.theme.color.light};
  font-size: 35px;
  cursor: pointer;
  padding-top: 0.4em;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  scale: 80%;
  transition: ease-in-out, 0.2s;
  :hover {
    scale: 70%;
    transition: ease-in-out, 0.2s;
  }
`;

export const CartIcon = styled.div`
  position: relative;
  top: 5px;
  z-index: 3;
`;

export const CartCounterArea = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.color.accent};
  color: ${(props) => props.theme.color.dark};
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  width: 50%;
  height: auto;
  border-radius: 50px;
  top: -60px;
  left: 30px;
  z-index: 4;
`;

export const LinkCart = styled(Link)`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  padding-right: 0.5em;
`;
