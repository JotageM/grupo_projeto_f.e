import { Container, Content, Wrapper, ResponsiveImage } from "./Style";

const ContainerDetalhes = () => {
  return (
    <Wrapper>
      <Container>
        <ResponsiveImage src="/imagens/Grupo.jpeg" alt="Imagem do Projeto" />
        <Content>
            <h1>Quem Somos?</h1>
            <p>Nós somos os Desbravadores do Front, um grupo de alunos do IBMEC dedicado a compartilhar os projetos realizados pelos nossos colegas e professores. Nosso sistema foi criado para apresentar esses projetos de forma acessível, destacando os participantes e suas teses. Queremos facilitar o acesso às ideias e pesquisas desenvolvidas, promovendo a troca de conhecimento dentro da nossa instituição e também além dela.</p>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ContainerDetalhes;

