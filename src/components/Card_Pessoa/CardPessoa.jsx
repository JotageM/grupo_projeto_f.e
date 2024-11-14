import { CardContainer, Image, Nome, Informacao } from "./Style";

const CardPessoa = ({ imagem, nome, idade, curso }) => (
  <CardContainer>
    <Image src={imagem} alt={nome} />
    <Nome>{nome}</Nome>
    <Informacao>Idade: {idade}</Informacao>
    <Informacao>Curso: {curso}</Informacao>
  </CardContainer>
);

export default CardPessoa;
