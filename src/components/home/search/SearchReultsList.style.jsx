import styled from "styled-components";

export const SearchResultsContainer = styled.div`
display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: .5em;
    padding: 3em 0 3em 0;
    max-width: 50em;
    
    margin: 0 auto;
    
    > div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background: white;
        /* text-align: left; */
        align-items: center;
        
        
        > img {
            width: 8em;
            height: 5em;
            object-fit: cover;
            filter: none;
            /* -webkit-filter: grayscale(80%);
            -moz-filter:    grayscale(80%);
            -ms-filter:     grayscale(80%);
            -o-filter:      grayscale(80%);
            transition: all 300ms ease; */
        }

        > div {
            text-align: center;
            padding: 0 4em 0 0;
        }
        }

        
    h2 {
        font-size: small;
        color: ${(props) => props.theme.color.primary};
        padding-left: 1em;
        text-align: left;
    }

    p {
        font-size: small;
    }

`;