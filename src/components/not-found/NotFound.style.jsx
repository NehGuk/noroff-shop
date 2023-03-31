import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundSection = styled.section`
  min-height: 80vh;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: ${(props) => props.theme.color.dark};
  > p {
    padding-bottom: 3em;
  }
`;

export const NotFoundLinkBack = styled(Link)`
  padding: 1em 3em;
  font-weight: 600;
  text-transform: uppercase;
  background: ${(props) => props.theme.color.primary};
  border: solid 0.3em ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.light};
  transition: ease-in-out 0.2s;
  :hover {
    background: ${(props) => props.theme.color.light};
    color: ${(props) => props.theme.color.primary};
    transition: ease-in-out 0.2s;
  }
`;
