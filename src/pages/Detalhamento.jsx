import Banner from "../components/Banner/Banner.jsx";
import { Link, useLoaderData } from "react-router-dom";
import ContainerDetalhes from "../components/ContainerDetalhes/ContainerDetalhes.jsx";
import Header from "../components/Header/Header.jsx";

const Detalhamento = () => {
  const { banner, detalhes } = useLoaderData(); 

  if (!banner || !detalhes) { // always prefer early returns
    return (
      <div>
        <h1>Content not found!</h1>
        <Link to="/">Go back to home</Link>
      </div>
    )
  }

  return (
    <>
    <Header></Header>
      <Banner
        key={banner.id}
        id={banner.id}
        titulo={banner.titulo}
        subtitulo={banner.subtitulo}
      />
      <ContainerDetalhes
        key={detalhes.id}
        id={detalhes.id}
        src={detalhes.url}
        descricao={detalhes.descricao}
        tecnologias={detalhes.tecnologias}
        papeis={detalhes.papeis}
        data={detalhes.data}
        src_2={detalhes.url_2}
        texto={detalhes.texto}
      />
    </>
  );
};

export default Detalhamento;

