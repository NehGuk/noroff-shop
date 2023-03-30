import styled from "styled-components";

export const ProductCardContainer = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 3em;
padding: 7em;
max-width: 2000px;
margin: 0 auto;
@media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 2em;
  }
    


> div {
    background: white;
    > img {
        /* display: none; */
        width: 100%;
        height: 20em;
        object-fit: cover;
    }
    > div {
        padding: 1.5em;
        h2 {
            color: ${(props) => props.theme.color.primary}
        }
    }
    
    > p {
        color: ${(props) => props.theme.color.dark};
    }

}
`;