import { useParams } from "react-router-dom";
import Base from "./Base";
import Banner from "../components/Banner/Banner.jsx"; 
import dados_banner from "../data/dados-banner.json"; 
import Header from "../components/Header/Header.jsx";
import ContainerDetalhes from "../components/ContainerDetalhes/ContainerDetalhes.jsx";
import dados_detalhamentos from "../data/dados-detalhamento.json";

const Detalhamento = (props) => {
  const { id } = useParams(); 
  
  const banner = dados_banner.find(el => el.id === id); 
  const detalhes = dados_detalhamentos.find(el => el.id === id);

  return (
    <>
    <Header></Header>
    {banner && ( 
        <Banner 
          key={banner.id}
          id={banner.id}
          titulo={banner.titulo}
          subtitulo={banner.subtitulo}
        />
      )}
    {detalhes && ( 
        <ContainerDetalhes 
          key={detalhes.id}
          id={detalhes.id}
          descricao={detalhes.descricao}
          tecnologias={detalhes.tecnologias}
          papeis={detalhes.papeis}
          data={detalhes.data}
        />
      )}
    </>
  );
};

export default Detalhamento;

