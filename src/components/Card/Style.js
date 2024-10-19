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
    margin-top: -5em;
    border: 1px solid #ccc;
    width: 380px ;
    height: 600px;
    font-family: 'Roboto Condensed', sans-serif;
    

    titulo{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #002f6c;
        color: white;
        text-align: center;
        font-size: 20px;
        width: 100em;
        max-height: 3em;
    }
   


    img{
    
    position: relative;
    bottom: px;
    width: 100%;
    height: 260px;
    }   
    


    subtitulo{
    position: relative;
    bottom: 10px;
    justify-content: center;
    font-weight: bold;
    font-size: 1.6em;
    }





    descricao{

    position: relative;
    bottom: 20px;
    justify-content: center;
    text-align: center;
    font-size: 1.2em;
    margin: 25px;
    }



 
    button {

    
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
    height: 70px;
    &:hover{
        background-color: #bf8602;
    }

    a{
        text-decoration: none;
        color: black;
        width: 300px;
    }
   
    }

   

    
    
    `







export {Card_card, Card_container};