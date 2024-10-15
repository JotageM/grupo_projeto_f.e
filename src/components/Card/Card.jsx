import {Card_butao, Card_container, Card_descricao, Card_imagem, Card_subtitulo, Card_titulo} from "./Style";

const Card = ( props ) => (
    
    <Card_container>
        <Card_titulo> Arquitetura e Urbanismo </Card_titulo>
        <Card_imagem src="imagens/old-computer-1.jpg"/> 
        <Card_subtitulo>Casa moderna</Card_subtitulo>
        <Card_descricao>Este projeto é sobre uma inovção no mundo da arquitetura</Card_descricao>
        <Card_butao>Acessar projeto</Card_butao>


    </Card_container>
   
);

export default Card