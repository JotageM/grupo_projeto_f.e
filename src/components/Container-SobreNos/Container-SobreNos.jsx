import { useTransition } from "react";
import { Container, Content, Wrapper, ResponsiveImage } from "./Style";
import { useTranslation } from "react-i18next";
const ContainerDetalhes = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <ResponsiveImage src="/imagens/Grupo.jpeg" alt="Imagem do Projeto" />
        <Content>
            <h1>{t("quem_somos_sobre_nos")}</h1>
            <p>{t("texto_sobre_nos")}</p>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ContainerDetalhes;

