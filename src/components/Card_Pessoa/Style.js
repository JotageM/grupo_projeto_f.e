import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px; 
  padding: 20px; 
  margin: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin-top: 3em;
  text-align: center;
  border: 2px solid #002555;
`;

const Image = styled.img`
  width: 180px; 
  height: 180px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const Nome = styled.h3`
  margin: 10px 0;
`;

const Informacao = styled.p`
  margin: 6px 0;
  color: #666;
`;

export { CardContainer, Image, Nome, Informacao };
