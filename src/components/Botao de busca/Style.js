import styled from "styled-components";


const Botao_Container = styled.div`

    display: flex;
    position: absolute;
    align-items: center;
    border: 2px solid #002555;
    border-radius: 25px;
    padding: 10px;
    width: 24em;
    height: 2em;
    align-items: center;
    margin-top: 6em;
    margin-left: 33.5em;
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;

`

const Botao_busca = styled.div`
    background-color: transparent;
    border: none;
    
    padding: 5px;
    display: flex;
    align-items: center;
    margin-left: 4.8em;
    font-size: 25px
`

const Botao_Filtro = styled.img`
   position: relative;
   width: 30px;
   height: 30px;
   margin-left: 7.3em;
`

const Botao_Lupa = styled.img`
   position: relative;
   width: 30px;
   height: 30px;
`



export {Botao_Container, Botao_busca, Botao_Filtro, Botao_Lupa}