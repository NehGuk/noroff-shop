import styled from "styled-components";

export const SearchArea = styled.div``;

export const SearchInputArea = styled.div`
  text-align: center;
  > input {
    border: none;
    padding: 0.7em 2em;
    font-size: large;
    border-radius: 0.2em;
    box-shadow: 0 0 15px 5px ${(props) => props.theme.color.primary};
    outline: none;
    transition: ease-in-out 0.2s;
    :focus {
      box-shadow: 0 0 15px 10px ${(props) => props.theme.color.primary};
      transition: ease-in-out 0.2s;
    }
  }
`;
