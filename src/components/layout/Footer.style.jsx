import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`    
    position: relative;
    bottom: 0;
    background-color: ${(props) => props.theme.color.dark};
    margin-top: 3em;
    padding: 2em;
    color: ${(props) => props.theme.color.light};
`;

export const LogoFooter = styled.img`
    max-width: 9em;
  margin: auto;
  display: block;
`;

export const FooterInfo = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 1em;
`;

export const FooterInfoLink = styled(Link)`
    color: ${(props) => props.theme.color.light};
    transition: ease-in-out, .2s;
    :hover {
        font-size: 95%;
        transition: ease-in-out, .2s;  
}
`;

export const FooterInfoBox1 = styled.div`
    text-align: center;
    max-width: 30em;
    margin: auto;
    > p {
        color: ${(props) => props.theme.color.light}
        padding: .3em;    
    }
`;

export const FooterInfoBox2 = styled.div`
    text-align: center;
    > li {
        list-style-type: square;
        list-style-position: inside;
        padding: .3em;
    }
    > li::marker {
        color: ${(props) => props.theme.color.primary}
    }
`;

export const FooterInfoBox3 = styled.div`
    text-align: center;
    > li {
        list-style-type: square;
        list-style-position: inside;
        padding: .3em;
    }
    > li::marker {
        color: ${(props) => props.theme.color.primary}
    }
`;