import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`    
    position: relative;
    bottom: 0;
    /* width: 100%; */
    background-color: ${(props) => props.theme.color.dark};
    margin-top: 3em;
    padding: 2em;
    color: ${(props) => props.theme.color.light};
    /* text-align: center; */
`;

export const LogoFooter = styled.img`
    max-width: 9em;
  margin: auto;
  display: block;
`;