import styled from "styled-components";


const Botao_Container = styled.div`
  display: flex;        
  align-items: center;
  justify-content: center;
  border: 2px solid #002855;
  border-radius: 25px;
  padding: 10px 20px; 
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 400px; 
  position: absolute;
  top: 70vh; 
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Roboto Condensed', sans-serif;
`;

const Botao_Lupa = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 350px;

`;

const Botao_busca = styled.span`
  font-size: 18px;
  color: #002855;
  margin-right: 10px;
  position : absolute;
`;

const Botao_Filtro = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`




export {Botao_Container, Botao_busca, Botao_Filtro, Botao_Lupa}