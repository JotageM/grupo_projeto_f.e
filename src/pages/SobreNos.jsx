import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import dados_banner from "../data/dados-banner.json";
import CardPessoa from "../components/Card_Pessoa/CardPessoa";
import Informacao from "../components/Container-SobreNos/Container-SobreNos";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
`;

const SobreNos = () => {
  const bannerSobreNos = dados_banner.find(el => el.id === "sobre-nos");

  const integrantes = [
    {
      imagem: "/imagens/Pedro.png",
      nome: "Pedro Camaz",
      idade: 22,
      curso: "Ciência de Dados e I.A"
    },
    {
      imagem: "/imagens/Gabriel.png",
      nome: "Gabriel Corrêa",
      idade: 18,
      curso: "Ciência de Dados e I.A"
    },
    {
      imagem: "/imagens/Joao.png",
      nome: "João Gabriel",
      idade: 24,
      curso: "Ciência de Dados e I.A"
    },
    {
      imagem: "/imagens/Vinicius.png",
      nome: "Vinicius da Luz",
      idade: 18,
      curso: "Engenharia da Computação"
    }
  ];

  return (
    <div>
      <Header />
      {bannerSobreNos && (
        <Banner
          id={bannerSobreNos.id}
          titulo={bannerSobreNos.titulo}
          subtitulo={bannerSobreNos.subtitulo}
        />
      )}
      <CardsContainer>
        {integrantes.map((integrante, index) => (
          <CardPessoa
            key={index}
            imagem={integrante.imagem}
            nome={integrante.nome}
            idade={integrante.idade}
            curso={integrante.curso}
          />
        ))}
      </CardsContainer>
      <Informacao />
    </div>
  );
};

export default SobreNos;



