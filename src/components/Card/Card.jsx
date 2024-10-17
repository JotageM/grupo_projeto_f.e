import {Card_card, Card_container} from "./Style";

const Card = ( props ) => {
   
   return(
   <Card_card>
        <Card_container>
            <titulo>{props.titulo}</titulo>
            <img src={props.src} />
            <subtitulo>{props.subtitulo}</subtitulo>
            <descricao>{props.descricao}</descricao>
            <button>Acessar Projeto</button>


        </Card_container>
    </Card_card>
   )
};

export default Card