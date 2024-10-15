import styled from "styled-components";

const Card_container = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap; /* Para ajustar no caso de telas menores */
    justify-content: center;
    padding: 0px;
    border: solid black;
    width: 415px ;
    height: 720px;
    `

const Card_titulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #002f6c;
    color: white;
    text-align: center;
    font-size: 20px;
    width: 100em;
    max-height: 3em;
   

`
const Card_imagem = styled.img`
    
    position: relative;
    bottom: 3px;
    width: 100%;
    height: 323.36px;
    

`
const Card_subtitulo = styled.div`
    
    position: relative;
    bottom: 30px;
    justify-content: center;
    font-weight: bold;
    font-size: 2.1em;




`
const Card_descricao = styled.div`
    
    position: relative;
    bottom: 40px;
    justify-content: center;
    text-align: center;
    font-size: 1.3em;




`
const Card_butao = styled.button`
    
    position: relative;
    bottom: 30px;
    background-color: #f2a900;
    color: black;
    padding: 10px 30px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    width: 285.39px;
    height: 85.09px;
    

    

`





export {Card_container, Card_titulo, Card_imagem, Card_subtitulo, Card_descricao, Card_butao};