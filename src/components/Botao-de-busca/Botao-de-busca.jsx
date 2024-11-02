import {Botao_Container, Botao_Filtro, Botao_Lupa, Botao_busca} from "./Style";
import brutos from "../../data/dados-projetos.json";
import { useState } from "react";

const Botao_de_busca = () => {
    const [dados, setDados] = useState(brutos);

    const filtro = (entrada) => {
        setDados(brutos.filter(
                (ele) => ele.titulo.includes(entrada) || ele.subtitulo.includes(entrada)
        ))
      }

    return(
    <Botao_Container>

        <Botao_Lupa src="imagens/Search.png"></Botao_Lupa>
        <Botao_busca 
        placeholder="Buscar" type="text"
        onChange={ (e) => filtro(e.target.value)}
        >
        </Botao_busca> <Botao_Filtro src="imagens/Vector.png"></Botao_Filtro>
        
 
    </Botao_Container>
    
    )

};

export default Botao_de_busca