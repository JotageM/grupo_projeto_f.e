import { Botao_Container, Botao_Filtro, Botao_Lupa, Botao_busca } from "./Style";
import { useState } from "react";

const Botao_de_busca = ({ Filtrar }) => {
    const [entrada, setEntrada] = useState("");

    const Mudanca_Input = (e) => {
        const valor = e.target.value;
        setEntrada(valor);
        Filtrar(valor); 
    };

    return (
        <Botao_Container>
            <Botao_Lupa src="imagens/Search.png" />
            <Botao_busca
                placeholder="Buscar"
                type="text"
                valor={entrada}
                onChange={Mudanca_Input}
            />
            <Botao_Filtro src="imagens/Vector.png" />
        </Botao_Container>
    );
};

export default Botao_de_busca;
