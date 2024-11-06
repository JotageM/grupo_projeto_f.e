import { useState } from "react";
import Card from "../components/Card/Card";
import ListContainer from "../components/ListContainer/ListContiner";
import Pagination from "../components/Pagination/Pagination";
import Banner from "../components/Banner/Banner";
import Botao_de_busca from "../components/Botao-de-busca/Botao-de-busca";
import dados_projetos from "../data/dados-projetos.json";
import dados_banner from "../data/dados-banner.json";

const Home = () => {
  const [projetosFiltrados, setProjetosFiltrados] = useState(dados_projetos);

  const aplicarFiltro = (filtro) => {
    setProjetosFiltrados(
      dados_projetos.filter(
        (el) =>
          el.titulo.toLowerCase().startsWith(filtro.toLowerCase()) ||
          el.subtitulo.toLowerCase().startsWith(filtro.toLowerCase())
      )
    );
  };

  return (
    <>
      {dados_banner
        .filter((el) => el.exibirHome !== false)
        .map((el, index) => (
          <Banner
            key={index}
            id={el.id}
            titulo={el.titulo}
            subtitulo={el.subtitulo}
          />
        ))}
      <Botao_de_busca Filtrar={aplicarFiltro} />
      <ListContainer>
        {projetosFiltrados.map((el, index) => (
          <Card
            key={index}
            id={el.id}
            titulo={el.titulo}
            src={el.url}
            subtitulo={el.subtitulo}
            descricao={el.descricao}
          />
        ))}
      </ListContainer>
      <Pagination />
    </>
  );
};

export default Home;
