import styled from "styled-components";

const Botao_Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #002855;
  border-radius: 25px;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 400px;
  top: 9em; 
  left: 50%;
  transform: translate(-50%, -50%); 
  font-family: 'Roboto Condensed', sans-serif;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 385px) {
    width: 250px;
    padding: 8px 15px;
  }
`;

const Botao_Lupa = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 350px;

  @media (max-width: 768px) {
    margin-right: 250px;
  }

  @media (max-width: 385px) {
    margin-right: 200px;
  }
`;

const Botao_busca = styled.input`
  font-size: 18px;
  color: #002855;
  margin-right: 10px;
  position: absolute;
  border: none;
  text-align: center;
  &:focus{
    outline: none;

  }

  @media (max-width: 385px) {
    font-size: 16px;
  }
`;

const Botao_Filtro = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 10px;

  @media (max-width: 385px) {
    margin-left: 5px;
  }
`;

export { Botao_Container, Botao_busca, Botao_Filtro, Botao_Lupa };
