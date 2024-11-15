import styled from "styled-components";

const ResponsiveImage = styled.img`
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
    max-width: 700px;
    max-height: 500px;
    border-radius: 15px;  

    @media (max-width: 1200px) {
        width: 80%;
        height: auto;
        border-radius: 15px;  
    }
`;

const Content = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props) => props.$color || "#FFFFFF"};
    font-size: 24px;  
    line-height: 1.6;
    margin-top: 3em;  
    max-width: 800px;  
    margin-left: auto; 
    margin-right: auto;  
    padding-left: 20px;  
    padding-right: 20px;  

    @media (max-width: 1200px) {
        padding-left: 1em;
        padding-right: 1em;
        font-size: 18px;  
        margin-top: 30px;  
    }
`;

const Container = styled.div`
    display: flex;
    gap: 10em;  
    
    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        gap: 1.5em;
    }
`;

const Wrapper = styled.div`
    background-color: ${(props) => props.$bgColor || "#002555"};
    padding-top: 5em;
    padding-bottom: 5em;
    padding-left: 6.5em;
    padding-right: 6.5em;
    
    @media (max-width: 1200px) {
        padding-top: 2em;
        padding-bottom: 2em;
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
`;

export { Container, Content, Wrapper, ResponsiveImage };



