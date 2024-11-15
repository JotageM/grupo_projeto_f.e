import Banner from "../components/Banner/Banner.jsx";
import { Link, useLoaderData } from "react-router-dom";
import ContainerDetalhes from "../components/ContainerDetalhes/ContainerDetalhes.jsx";
import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header.jsx"

const Detalhamento = () => {
  const { banner, detalhes } = useLoaderData(); 
  const { t } = useTranslation();

  if (!banner || !detalhes) { 
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
        titulo={t(`banner_${banner.id}_titulo`)}
        subtitulo={t(`banner_${banner.id}_subtitulo`)}
      />

      <ContainerDetalhes
        key={detalhes.id}
        id={detalhes.id}
        src={detalhes.url}
        descricao={t(`detalhamento_${detalhes.id}_descricao`)}
        tecnologias={t(`detalhamento_${detalhes.id}_tecnologias`)}
        papeis={t(`detalhamento_${detalhes.id}_papeis`)}
        data={detalhes.data}
        src_2={detalhes.url_2}
        texto={t(`detalhamento_${detalhes.id}_texto`)}
      />
    </>
  );
};

export default Detalhamento;




