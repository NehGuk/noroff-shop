import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductSection = styled.section`
    display: grid;
    grid-template-areas:
    "image image"
    "title title"
    "description description"
    "stars stars"
    "price price"
    "tags tags"
    "cta cta"
    "back back"
    "reviews reviews"
    ;
    gap: .1em;
    max-width: 800px;
    min-height: 80vh;
    margin: 0 auto;
    padding-bottom: 5em;
    > div {
        padding: .5em;
    }
`;

export const ProductImage = styled.div`
/* background: lightcoral; */
grid-area: image;
text-align: center;
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ProductTitle = styled.div`
    /* background: lightcoral; */
    grid-area: title;
    color: ${(props) => props.theme.color.dark};
`;

export const ProductDescription = styled.div`
/* background: lightcoral; */
grid-area: description;

`;

export const ProductStars = styled.div`
    /* background: lightcoral; */
    grid-area: stars;
    display: flex;
    align-items: center;
        > p {
            display: inline-block;
            padding-left: 1em;
            color: ${(props) => props.theme.color.primary};
            font-size: small;
            font-weight: 600;
        }
`;

export const ProductPrice = styled.div`
    /* background: lightcoral; */
    grid-area: price;
    font-size: x-large;
    display: flex;
    align-items: center;
    
`;

export const ProductPriceDiscount = styled.div`
    /* background: lightcoral; */
    grid-area: discount;
    display: flex;
    align-items: center;
    margin-left: 1em;
    opacity: 60%;
    > p {
        font-size: small;
        
        
    }    
`;

export const ProductTags = styled.div`
/* background: lightcoral; */
grid-area: tags;
> p {
    font-size: small;
    opacity: 60%;
}
`;

export const ProductAddToCart = styled.div`
/* background: lightcoral; */
grid-area: cta;
> button {
    background: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.light};
    border: solid .3em ${(props) => props.theme.color.primary};
    text-transform: uppercase;
    font-weight: 600;
    padding: 1em 3em;
    width: 100%;
    transition: ease-in-out .2s;
    cursor: pointer;
    :hover {
        background: ${(props) => props.theme.color.light};
        color: ${(props) => props.theme.color.primary};
        border: solid .3em ${(props) => props.theme.color.primary};
        transition: ease-in-out .2s;   
    }
}
`;

export const BackToProducts = styled.div`
/* background: lightcoral; */
grid-area: back;
text-align: center;
text-decoration: underline;
`;

export const ProductReviews = styled.div`
/* background: lightcoral; */
grid-area: reviews;
text-align: center;
`;