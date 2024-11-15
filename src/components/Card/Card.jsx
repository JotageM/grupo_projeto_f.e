import { Link } from "react-router-dom";
import { Card_card, Card_container } from "./Style";
import { useTranslation } from "react-i18next";

const Card = (props) => {
    const {t} = useTranslation();
    return (
        <Card_card>
            <Card_container>
                <titulo>{props.titulo}</titulo>
                <img src={props.src} />
                <subtitulo>{props.subtitulo}</subtitulo>
                <descricao>{props.descricao}</descricao>

                <Link to={`/projects/${props.id}`} className="button">{t("acessar_projeto")}</Link>
            </Card_container>
        </Card_card>
    )
};

export default Card