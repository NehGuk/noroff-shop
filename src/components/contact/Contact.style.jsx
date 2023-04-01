import styled from "styled-components";

export const ContactSectionArea = styled.section`
  min-height: 80vh;
`;

export const ContactGrid = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 1em;
  padding: 1em;
`;

export const ContactGridTitle = styled.div`
  text-align: center;
  color: ${(props) => props.theme.color.dark};
`;

export const ContactGridForm = styled.div`
  > form {
    text-align: center;

    padding-right: 1em;
    > input,
    textarea {
      width: 90%;
      padding: 1em;
      border: none;
      :focus {
        color: ${(props) => props.theme.color.primary};
        border: 0.1em solid ${(props) => props.theme.color.primary};
      }
    }
    > p {
      margin: 0.2em auto 1em auto;
      color: ${(props) => props.theme.color.error};
      text-transform: uppercase;
      font-size: small;
    }
    > button {
      width: 50%;
      padding: 1em 3em;
      text-transform: uppercase;
      font-weight: 600;
      border: solid 0.2em ${(props) => props.theme.color.primary};
      background: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.light};
      margin: 1em auto 5em auto;
      cursor: pointer;
      :hover {
        background: ${(props) => props.theme.color.light};
        color: ${(props) => props.theme.color.primary};
      }
    }
  }
`;
