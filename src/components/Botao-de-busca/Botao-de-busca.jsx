import { useState, useRef, useEffect } from "react";
import { Botao_Container, Botao_Filtro, Botao_Lupa, Botao_busca, Filtro_Container, Filtro_Botao, Filtro_Botao_Desfazer, Filtro_Selecao } from "./Style";

const Botao_de_busca = ({ Filtrar, ResetarFiltros }) => {
    const [entrada, setEntrada] = useState("");
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [unidade, setUnidade] = useState("");
    const [curso, setCurso] = useState("");
    const [tecnologias, setTecnologias] = useState("");
    const [periodo, setPeriodo] = useState("");
    
    const filtroRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filtroRef.current && !filtroRef.current.contains(event.target)) {
                setMostrarFiltros(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const Mudanca_Input = (e) => {
        const valor = e.target.value;
        setEntrada(valor);
        Filtrar({ tituloOuSubtitulo: valor, unidade, curso, tecnologias, periodo });
    };

    const Mudanca_Filtro = () => {
        setMostrarFiltros(!mostrarFiltros);
    };

    const aplicarFiltros = () => {
        Filtrar({ tituloOuSubtitulo: entrada, unidade, curso, tecnologias, periodo });
        setMostrarFiltros(false); 
    };

    const desfazerFiltros = () => {
        setEntrada("");
        setUnidade("");
        setCurso("");
        setTecnologias("");
        setPeriodo("");

        ResetarFiltros();
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
            <Botao_Filtro src="imagens/Vector.png" onClick={Mudanca_Filtro} />

            <Filtro_Container ref={filtroRef} isVisible={mostrarFiltros}>
                <div>
                    <label>Unidade:</label>
                    <Filtro_Selecao value={unidade} onChange={(e) => setUnidade(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="barra">Barra</option>
                        <option value="centro">Centro</option>
                    </Filtro_Selecao>
                </div>
                <div>
                    <label>Curso:</label>
                    <Filtro_Selecao value={curso} onChange={(e) => setCurso(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="arquitetura">Arquitetura</option>
                        <option value="ciencia-de-dados">Ciência de Dados</option>
                        <option value="direito">Direito</option>
                        <option value="economia">Economia</option>
                        <option value="engenharia-Civil">Engenharia Civil</option>
                        <option value="engenharia-da-computacao">Engenharia da Computação</option>
                    </Filtro_Selecao>
                </div>
                <div>
                    <label>Tecnologias:</label>
                    <Filtro_Selecao value={tecnologias} onChange={(e) => setTecnologias(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="C++">C++</option>
                        <option value="excel">Excel</option>
                        <option value="notion">Notion</option>
                        <option value="power-BI">Power BI</option>
                        <option value="python">Python</option>
                        <option value="react">React</option>
                        <option value="trello">Trello</option>
                    </Filtro_Selecao>
                </div>
                <div>
                    <label>Período:</label>
                    <Filtro_Selecao value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="2023-1">2023-1</option>
                        <option value="2023-2">2023-2</option>
                        <option value="2024-1">2024-1</option>
                        <option value="2024-2">2024-2</option>
                    </Filtro_Selecao>
                </div>
                <Filtro_Botao onClick={aplicarFiltros}>Aplicar Filtro</Filtro_Botao>
                <Filtro_Botao_Desfazer onClick={desfazerFiltros}>Desfazer Filtros</Filtro_Botao_Desfazer>
            </Filtro_Container>
        </Botao_Container>
    );
};

export default Botao_de_busca;



