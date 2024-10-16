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
  
  `

const Container = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const MenuItem = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
`

const MenuButton = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: bold;
  border-radius: 100px;
  border: 1px solid black;
  padding: 14px 20px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
`


export { Top, Container, MenuItem, MenuButton }