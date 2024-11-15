import { useTranslation } from "react-i18next"; // Importa o hook de tradução
import { CorpoBanner, BannerContainer } from "./Style";

const Banner = (props) => {
  const { t } = useTranslation(); // Usa o hook de tradução

  return (
    <CorpoBanner>
      <BannerContainer>
        <h1>{t(props.titulo)}</h1> {/* Traduza o título */}
        <h3>{t(props.subtitulo)}</h3> {/* Traduza o subtítulo */}
      </BannerContainer>
    </CorpoBanner>
  );
};

export default Banner;
