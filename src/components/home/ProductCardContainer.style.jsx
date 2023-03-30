import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3em;
    padding: 7em;
    max-width: 2000px;
    margin: 0 auto;
    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 2em;
    }
        
    > div {
        position: relative;
        background: white;
        
        transition: ease-in-out, .2s;
        :hover {
            scale: 105%;
            z-index: 1;
            transition: ease-in-out, .2s;
        }
        :hover > img {
                filter: none;
                -webkit-filter: grayscale(0%);
                -moz-filter:    grayscale(0%);
                -ms-filter:     grayscale(0%);
                -o-filter:      grayscale(0%);
                transition: all 300ms ease;
        }
        > img {
            /* display: none; */
            width: 100%;
            height: 20em;
            object-fit: cover;        
            filter: none;
            -webkit-filter: grayscale(80%);
            -moz-filter:    grayscale(80%);
            -ms-filter:     grayscale(80%);
            -o-filter:      grayscale(80%);
            transition: all 300ms ease;
        }
        
        > div {
            padding: 1.5em;
            h2 {
                color: ${(props) => props.theme.color.dark}
            }
        }
        
        > p {
            color: ${(props) => props.theme.color.dark};
        }
    }
`;

export const ProductCardDiscount = styled.div`
    position: absolute;
    top: 2em;
    left: -20px;
    background: ${(props) => props.theme.color.primary};
    color: white;
    > p {
        padding: .1em 2em;
    }           
`;

export const ProductOldPrice = styled.p`
    font-size: .7em;
    color: grey;
    text-decoration: line-through;
    margin-bottom: 5em;

`;

export const ProductCardCTA = styled(Link)`
    color: ${(props) => props.theme.color.primary};
    padding: .5em 2em;
    border: solid .2em ${(props) => props.theme.color.primary};
    text-transform: uppercase;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    transition: ease-in-out .2s;
    :hover {
        background: ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.light};
        transition: ease-in-out .2s;
        
    }
    
    
`;
