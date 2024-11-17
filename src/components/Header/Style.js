import styled from "styled-components"

const Top = styled.header`
  position: sticky;
  top:0;
  height: 108px;
  width: 100%;
  background-color: #FFFFFF;
  align-content: center;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.2);
  z-index: 999
`;

const Container = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    justify-content: space-around;
  }
`

const MenuItem = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  cursor: pointer;
  font-size: 20px;
  color: #002555; 

  a {
    color: inherit;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


const MenuButton = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: bold;
  border-radius: 100px;
  border: 1px solid black;
  padding: 14px 20px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    display: none;
  }
`
const HamburgerButton = styled.div`

  display: inline-block; 

  button{
    cursor: pointer;
  }

  @media (min-width: 768px) {
    
    display: none; 

  
    
  }
`
const Ham_container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  align-items: center;
  width: 130px;
  height: 120px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  border: 1px solid black;
  padding: 14px 20px;
  right: 60px;
  top: 80px;
  font-family: 'Roboto Condensed', sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
  padding-top: 15px;
  padding-bottom: 10px;
  font-size: 20px;
  
  


`;

const Ham_item = styled.div`

cursor: pointer;
margin: 8px;
transition: background-color 0.3s ease, color 0.3s ease;
color: #003170; 


`

const Ham_leng = styled.div`



cursor: pointer;
margin: 8px;
color: #003170;

`





export { Top, Container, MenuItem, MenuButton, HamburgerButton, Ham_item, Ham_leng, Ham_container }