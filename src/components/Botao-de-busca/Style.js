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
  z-index: 998;
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
  &:focus {
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
  cursor: pointer;

  @media (max-width: 385px) {
    margin-left: 5px;
  }
`;

const Filtro_Container = styled.div`
  position: absolute;
  top: -4em; 
  left: 29em;
  background-color: white;
  padding: 20px;
  border: 2px solid #002855;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  border-radius: 8px;
  z-index: 10;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  @media (max-width: 1080px) {
    top: 3em;  
    left: 50%;  
    transform: translateX(-50%); 
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 385px) {
    width: 150px;
  }
`;

const Filtro_Selecao = styled.select`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const Filtro_Botao = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #002855;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #003b66;
  }
;`

const Filtro_Botao_Desfazer = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #f44336; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px; 

  &:hover {
    background-color: #e53935;
  }
`;

export { Botao_Container, Botao_busca, Botao_Filtro, Botao_Lupa, Filtro_Container, Filtro_Selecao, Filtro_Botao, Filtro_Botao_Desfazer };

