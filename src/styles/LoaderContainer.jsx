import styled from "styled-components";

export const LoaderContainer = styled.div`
    text-align: center;
    color: ${(props) => props.theme.color.primary};
    padding: 3em 0 2em 0;
    font-size: x-large;
    width: 10em;
    border: solid .2em ${(props) => props.theme.color.primary};
    margin: 3em auto;
`;
