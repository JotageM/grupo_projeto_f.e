import { useParams } from "react-router-dom";
import Base from "./Base";
import Banner from "../components/Banner/Banner.jsx"; 
import dados_banner from "../data/dados-banner.json"; 
import Header from "../components/Header/Header.jsx";

const Detalhamento = (props) => {
  const { id } = useParams(); 
  const banner = dados_banner.find(el => el.id === id); 

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
    
    </>
  );
};

export default Detalhamento;

