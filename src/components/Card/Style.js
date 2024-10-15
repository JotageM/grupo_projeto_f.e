import styled from "styled-components";


const Card_card = styled.div`

    padding-bottom: 7em ;


`

const Card_container = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap; /* Para ajustar no caso de telas menores */
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    border: 1px solid #ccc;
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





export {Card_card, Card_container, Card_titulo, Card_imagem, Card_subtitulo, Card_descricao, Card_butao};