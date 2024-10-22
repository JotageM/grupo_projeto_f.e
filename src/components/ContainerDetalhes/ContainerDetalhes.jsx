import { Container1, Informacoes_Container1, Container2, Informacoes_Container2, Div_Container1 } from "./Style";

const ContainerDetalhes = (props) => (
  <>
    <Container1>
      <Informacoes_Container1>
        <img src={props.src} alt="Imagem do Projeto" />

        <Div_Container1>
            <ul>
                <li>
                    <h3>Descrição:</h3>
                    <p>{props.descricao}</p>
                </li>
                <li>
                    <h3>Tecnologias Usadas:</h3>
                    <p>{props.tecnologias}</p>
                </li>
                <li>
                    <h3>Papéis dos Integrantes:</h3>
                    <ul>
                        {props.papeis.split('\n').map((papel, index) => (
                        <li key={index}>{papel}</li>
                        ))}
                    </ul>
                </li>
                <li>
                    <h3>Data de Ínicio e Fim:</h3>
                    <p>{props.data}</p>
                </li>
            </ul>
        </Div_Container1>

      </Informacoes_Container1>
    </Container1>
    
    <Container2>
      <img src={props.src_2} alt="Imagem do Projeto" />
      <Informacoes_Container2>
        <p className="texto">{props.texto}</p>
      </Informacoes_Container2>
    </Container2>
  </>
);

export default ContainerDetalhes;

