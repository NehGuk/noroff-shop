import styled from "styled-components";

export const NoResultsArea = styled.div`
  text-align: center;
  margin-top: 3em;

  > hr {
    max-width: 60%;
    margin-top: 3em;
    border: 0.1em solid ${(props) => props.theme.color.primary};
  }
  h3 {
    color: ${(props) => props.theme.color.primary};
  }
`;
