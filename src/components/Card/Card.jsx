import { Link } from "react-router-dom";
import {Card_card, Card_container} from "./Style";

const Card = ( props ) => {
   
   return(
   <Card_card>
        <Card_container>
            <titulo>{props.titulo}</titulo>
            <img src={props.src} />
            <subtitulo>{props.subtitulo}</subtitulo>
            <descricao>{props.descricao}</descricao>
           
            <Link to={`/detalhes/${props.id}`}><button>Acessar projeto</button></Link>
                



        </Card_container>
    </Card_card>
   )
};

export default Card