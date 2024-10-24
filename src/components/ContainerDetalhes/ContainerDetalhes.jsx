import { Container, Content, Wrapper, ResponsiveImage } from "./style";

const ContainerDetalhes = ({ src, descricao, tecnologias, papeis, data, src_2, texto }) => {

  return (
    <>
      <Wrapper $bgColor="white">
        <Container>
          <ResponsiveImage src={src} alt="Imagem do Projeto" />
          <Content $color="#002555">
            <ul>
              <li>

                <h3>Descrição:</h3>
                <p>{descricao}</p>
              </li>
              <li>
                <h3>Tecnologias Usadas:</h3>
                <p>{tecnologias}</p>
              </li>
              <li>
                <h3>Papéis dos Integrantes:</h3>
                <br />
                <ul>
                  {papeis.split('\n').map((papel, index) => (
                    <li key={index}>{papel}</li>
                  ))}
                </ul>
                <br />
              </li>
              <li>
                <h3>Data de Ínicio e Fim:</h3>
                <p>{data}</p>
              </li>
            </ul>
          </Content>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <ResponsiveImage src={src_2} alt="Imagem do Projeto" />
          <Content>
            <ul>
              {texto}
            </ul>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default ContainerDetalhes;

