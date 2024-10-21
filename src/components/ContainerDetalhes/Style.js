import styled from "styled-components";

const Container1 = styled.div`
    background-color: white;
    font-family: 'Roboto Condensed', sans-serif;
    width: 100%;
    height: 40em;
    
`;

const Informacoes_Container1 = styled.div`
   color: #002555;
   font-size: 20px;
   img{
    position: absolute;
    width: 33em;
    height: 20em;
    margin-top: 5.5em;
    margin-left: 1.5em;
    }  

`;

const Div_Container1 = styled.div`
   position: absolute;
   width: 40em;
   margin-left: 35em;
   margin-top: 2.5em;
   margin-bottom: 2.5em;
   ul {
    margin-top: 20px;
    margin-bottom: 20px
   }
`;


const Container2 = styled.div`
    background-color: #002555;
    font-family: 'Roboto Condensed', sans-serif;
    width: 100%;
    height: 40em;
    
`;

const Informacoes_Container2 = styled.div`
   color: white;
   text-align: center;
   padding-top: 20em

`;




export { Container1, Informacoes_Container1, Container2, Informacoes_Container2, Div_Container1 };