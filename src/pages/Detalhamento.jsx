import { useParams } from "react-router-dom";
import Base from "./Base";
import Banner from "../components/Banner/Banner.jsx"; 
import dados_banner from "../data/dados-banner.json"; 

const Detalhamento = () => {
  const { id } = useParams(); 
  const banner = dados_banner.find(el => el.id === id); 

  return (
    <Base>
      {banner && ( 
        <Banner 
          key={banner.id}
          id={banner.id}
          titulo={banner.titulo}
          subtitulo={banner.subtitulo}
        />
      )}
    </Base>
  );
};

export default Detalhamento;

