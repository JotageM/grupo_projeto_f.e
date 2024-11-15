import { CardContainer, Image, Nome, Informacao } from "./Style";
import { useTranslation } from "react-i18next";


const CardPessoa = ({ imagem, nome, idade, curso }) => {
  const { t } = useTranslation()
  return (
  <CardContainer>
    <Image src={imagem} alt={nome} />
    <Nome>{nome}</Nome>
    <Informacao>{t("Idade")}: {idade}</Informacao>
    <Informacao>{t("Curso")}: {curso}</Informacao>
  </CardContainer>
);
}
export default CardPessoa;
