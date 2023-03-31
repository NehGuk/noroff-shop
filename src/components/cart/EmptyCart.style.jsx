import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmptyCardSection = styled.section`
    min-height: 80vh;
`;

export const EmptyCardGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 3em;
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
    text-align: center;
    align-items: center;
`;

export const EmptyCartTitle = styled.div`
    color: ${(props) => props.theme.color.dark};
`;

export const EmptyCartMessage = styled.div`
    color: ${(props) => props.theme.color.primary};
`;

export const EmptyCartGoToProducts = styled(Link)`
    padding: 1em 3em;
    font-weight: 600;
    text-transform: uppercase;
    background: ${(props) => props.theme.color.primary};
    border: solid .3em ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.light};
    :hover {
        background: ${(props) => props.theme.color.light};
        color: ${(props) => props.theme.color.primary};

    }
`;
