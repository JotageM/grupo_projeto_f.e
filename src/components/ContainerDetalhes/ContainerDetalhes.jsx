import { Container1, Informacoes_Container1, Container2, Informacoes_Container2, Div_Container1 } from "./style";

const ContainerDetalhes = (props) => (
  <>
    <Container1>
      <Informacoes_Container1>
        <img src={props.src} alt="Imagem do Projeto" />

        <Div_Container1>
            <h3>Descrição</h3>
            <p>{props.descricao}</p>

            <h3>Tecnologias Usadas</h3>
            <p>{props.tecnologias}</p>

            <h3>Papéis dos Integrantes</h3>
            <p>{props.papeis}</p>

            <h3>Data de Ínicio e Fim</h3>
            <p>{props.data}</p>
        </Div_Container1>

      </Informacoes_Container1>
    </Container1>
    
    <Container2>
      <Informacoes_Container2>
        <h3>Informações do Container 2</h3>
        <p>Detalhes adicionais sobre o projeto ou informações complementares podem ser exibidos aqui.</p>
      </Informacoes_Container2>
    </Container2>
  </>
);

export default ContainerDetalhes;

