import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckOutSection = styled.div`
    min-height: 80vh;
`;

export const CheckOutGrid = styled.div`
    display: grid;
    grid-template-areas:
    "title title"
    "summary summary"
    "amount amount"
    "payment payment"
    "cta cta"
    "back back"
    ;
    gap: .3em;
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
    text-align: center;
    align-items: center;
`;

export const CheckOutTitle = styled.div`
    grid-area: title;
    color: ${(props) => props.theme.color.dark};
`;

export const CheckOutSummary = styled.div`
    grid-area: summary;
    text-align: center;
    text-transform: uppercase;
    font-size: small;
    color: ${(props) => props.theme.color.primary};
`;

export const CheckOutAmount = styled.div`
    grid-area: amount;
    text-align: center;
    text-transform: uppercase;
    font-size: small;
    color: ${(props) => props.theme.color.primary};
`;

export const CheckOutPaymentMethod = styled.div`
    grid-area: payment;
    color: ${(props) => props.theme.color.primary};
    margin-bottom: 2em;
    
`;

export const CheckOutCTA = styled(Link)`
    grid-area: cta;
    margin-bottom: 2em;
    > button {
        width: 100%;
        padding: 1em 3em;
        font-weight: 600;
        text-transform: uppercase;
        background: ${(props) => props.theme.color.primary};
        border: solid .3em ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.light};
        cursor: pointer;
        :hover {
            background: ${(props) => props.theme.color.light};
            color: ${(props) => props.theme.color.primary};

        }
    }
`;

export const CheckOutBackToCart = styled(Link)`
    grid-area: back;
    padding-bottom: 4em;
    text-align: center;
    text-decoration: underline;
    transition: ease-in-out .2s;
    cursor: pointer;
    :hover {
        opacity: 60%;
        transition: ease-in-out .2s;
    }
    
`;