import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px; // Adiciona um "respiro" embaixo
`;


const PageButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  background-color: ${({ active }) => (active ? "#007bff" : "#f1f1f1")};
  border: 1px solid #ddd;
  color: ${({ active }) => (active ? "#fff" : "#333")};
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? "#0056b3" : "#ddd")};
  }
`;

export {PageButton, PaginationContainer}

