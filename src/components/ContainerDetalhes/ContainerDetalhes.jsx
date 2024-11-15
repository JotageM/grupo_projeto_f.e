import { Container, Content, Wrapper, ResponsiveImage } from "./style";
import { useTranslation } from "react-i18next"; // Importa o hook de tradução

const ContainerDetalhes = ({ src, descricao, tecnologias, papeis, data, src_2, texto }) => {
  const { t } = useTranslation(); // Usa o hook de tradução

  return (
    <>
      <Wrapper $bgColor="white">
        <Container>
          <ResponsiveImage src={src} alt={t("imagem_do_projeto")} />
          <Content $color="#002555">
            <ul>
              <li>
                <h3>{t("descricao")}:</h3>
                <p>{descricao}</p>
              </li>
              <li>
                <h3>{t("tecnologias_usadas")}:</h3>
                <p>{tecnologias}</p>
              </li>
              <li>
                <h3>{t("papeis_dos_integrantes")}:</h3>
                <br />
                <ul>
                  {papeis.split('\n').map((papel, index) => (
                    <li key={index}>{papel}</li>
                  ))}
                </ul>
                <br />
              </li>
              <li>
                <h3>{t("data_de_inicio_e_fim")}:</h3>
                <p>{data}</p>
              </li>
            </ul>
          </Content>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <ResponsiveImage src={src_2} alt={t("imagem_do_projeto")} />
          <Content>
            <ul>
              <li>{texto}</li>
            </ul>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default ContainerDetalhes;


