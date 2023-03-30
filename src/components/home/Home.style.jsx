import styled from "styled-components";

export const HomeSection = styled.section`
min-height: 100vh;
`;

export const Welcome = styled.div`
    text-align: center;
    color: ${(props) => props.theme.color.primary};
    margin: 10em 0 3em 0;
`;
