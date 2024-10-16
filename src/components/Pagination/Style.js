import styled from "styled-components";

const Pagination_container = styled.div`
    display: flex;
    gap: 10px; /* Espaçamento entre os números */
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    font-family: 'Roboto Condensed', sans-serif;
    
    


`

const Pagination_number = styled.p`

    font-size: 2em; /* Tamanho da fonte */
    padding: 5px 10px; /* Espaçamento interno */
    border: 1px solid transparent; /* Borda inicial transparente */
    font-weight: bold;
    cursor: pointer;
    


`

export {Pagination_container, Pagination_number};


