import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartSection = styled.section`
  min-height: 80vh;
`;

export const CartGrid = styled.div`
  max-width: 800px;
  margin: 0 auto 4em auto;
  display: grid;
  grid-template-areas:
    "title title"
    "items items"
    "clearCart clearCart"
    "numberOfItems total"
    "cta cta"
    "back back";
  gap: 1em;
  > div {
    padding: 0.5em;
  }
`;

export const CartTitle = styled.div`
  grid-area: title;
  /* background: lightseagreen; */
  text-align: center;
`;

export const CartItems = styled.div`
  /* background: lightseagreen; */
  grid-area: items;
  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: white;
    align-items: center;
    margin: 1em;
  }
`;

export const CartItemsImg = styled.div`
  > img {
    display: flex;
    width: 8em;
    height: 8em;
    object-fit: cover;
  }
`;

export const CartItemsInfo = styled.div`
  padding: 1em;
`;

export const CartItemsRemove = styled.div`
  text-align: right;
  padding-right: 1em;
  > button {
    background: white;
    color: ${(props) => props.theme.color.primary};
    border: solid 0.3em ${(props) => props.theme.color.primary};
    padding: 0.5em;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    :hover {
      background: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.light};
      transition: ease-in-out 0.2s;
    }
  }
`;

export const CartNumberOfItems = styled.div`
  /* background: lightseagreen; */
  grid-area: numberOfItems;
  text-align: right;
  color: ${(props) => props.theme.color.primary};
  > span {
    text-transform: uppercase;
    font-size: small;
  }
`;

export const CartTotal = styled.div`
  /* background: lightseagreen; */
  text-align: left;
  text-transform: uppercase;
  grid-area: total;
  color: ${(props) => props.theme.color.primary};
  > span {
    text-transform: uppercase;
    font-size: small;
    color: ${(props) => props.theme.color.dark};
  }
`;

export const CartClearCartArea = styled.div`
  /* background: lightseagreen; */
  grid-area: clearCart;
  text-align: center;
  > button {
    background: ${(props) => props.theme.color.light};
    color: ${(props) => props.theme.color.primary};
    border: solid 0.3em ${(props) => props.theme.color.primary};
    padding: 0.5em;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    :hover {
      background: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.light};
      transition: ease-in-out 0.2s;
    }
  }
`;

export const CartCTA = styled(Link)`
  grid-area: cta;
  margin: 0.5em;
  background: ${(props) => props.theme.color.primary};
  border: solid 0.3em ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.light};
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  padding: 1em 3em;
  transition: ease-in-out 0.2s;
  :hover {
    background: ${(props) => props.theme.color.light};
    color: ${(props) => props.theme.color.primary};
    transition: ease-in-out 0.2s;
  }
`;

export const CartBack = styled.div`
  /* background: lightseagreen; */
  grid-area: back;
  text-align: center;
  text-decoration: underline;
  transition: ease-in-out 0.2s;
  :hover {
    opacity: 60%;
    transition: ease-in-out 0.2s;
  }
`;
