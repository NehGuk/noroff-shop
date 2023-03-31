import styled from "styled-components";

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
    "back back"
    ;
    gap: 1em;
`;

export const CartTitle = styled.div`
    grid-area: title;
    background: lightseagreen;
    text-align: center;
    
`;

export const CartItems = styled.div`
    background: lightseagreen;
    grid-area: items;
    
`;

export const CartNumberOfItems = styled.div`
    background: lightseagreen;
    grid-area: numberOfItems;
    
`;

export const CartTotal = styled.div`
    background: lightseagreen;
    grid-area: total;
    
`;

export const CartClearCartArea = styled.div`
    background: lightseagreen;
    grid-area: clearCart;
    
`;

export const CartCTA = styled.div`
    background: lightseagreen;
    grid-area: cta;
    
`;

export const CartBack = styled.div`
    background: lightseagreen;
    grid-area: back;
    
`;


