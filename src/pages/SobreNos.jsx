import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import dados_banner from "../data/dados-banner.json";
import CardPessoa from "../components/Card_Pessoa/CardPessoa";
import Informacao from "../components/Container-SobreNos/Container-SobreNos";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
`;

const SobreNos = () => {
  const banner = dados_banner.find(el => el.id === "sobre-nos");
  const { t } = useTranslation();
  
  const integrantes = [
    {
      imagem: "/imagens/Pedro.png",
      nome: "Pedro Camaz",
      idade: 22,
      curso: "ciencia_de_dados"
    },
    {
      imagem: "/imagens/Gabriel.png",
      nome: "Gabriel Corrêa",
      idade: 18,
      curso: "ciencia_de_dados"
    },
    {
      imagem: "/imagens/Joao.png",
      nome: "João Gabriel",
      idade: 24,
      curso: "ciencia_de_dados"
    },
    {
      imagem: "/imagens/Vinicius.png",
      nome: "Vinicius da Luz",
      idade: 18,
      curso: "engenharia_da_computacao"
    }
  ];

  return (
    <div>
      <Header />
      <Banner
        key={banner.id}
        id={banner.id}
        titulo={t(`banner_${banner.id}_titulo`)}
        subtitulo={t(`banner_${banner.id}_subtitulo`)}
      />
      <CardsContainer>
        {integrantes.map((integrante, index) => (
          <CardPessoa
            key={index}
            imagem={integrante.imagem}
            nome={integrante.nome}
            idade={integrante.idade}
            curso={t(integrante.curso)}
          />
        ))}
      </CardsContainer>
      <Informacao />
    </div>
  );
};

export default SobreNos;



