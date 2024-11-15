import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { 
    Botao_Container, 
    Botao_Filtro, 
    Botao_Lupa, 
    Botao_busca, 
    Filtro_Container, 
    Filtro_Botao, 
    Filtro_Botao_Desfazer, 
    Filtro_Selecao 
} from "./Style";

const Botao_de_busca = ({ Filtrar, ResetarFiltros }) => {
    const { t } = useTranslation();
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
                placeholder={t("buscar")}
                type="text"
                valor={entrada}
                onChange={Mudanca_Input}
            />
            <Botao_Filtro src="imagens/Vector.png" onClick={Mudanca_Filtro} />

            <Filtro_Container ref={filtroRef} isVisible={mostrarFiltros}>
                <div>
                    <label>{t("unidade")}:</label>
                    <Filtro_Selecao value={unidade} onChange={(e) => setUnidade(e.target.value)}>
                        <option value="">{t("todos")}</option>
                        <option value="barra">Barra</option>
                        <option value="centro">Centro</option>
                    </Filtro_Selecao>
                </div>
                <div>
                    <label>{t("curso")}:</label>
                    <Filtro_Selecao value={curso} onChange={(e) => setCurso(e.target.value)}>
                        <option value="">{t("todos")}</option>
                        <option value="arquitetura">{t("arquitetura")}</option>
                        <option value="ciencia-de-dados">{t("ciencia_de_dados")}</option>
                        <option value="direito">{t("direito")}</option>
                        <option value="economia">{t("economia")}</option>
                        <option value="engenharia-Civil">{t("engenharia_civil")}</option>
                        <option value="engenharia-da-computacao">{t("engenharia_da_computacao")}</option>
                    </Filtro_Selecao>
                </div>
                <div>
                    <label>{t("tecnologias")}:</label>
                    <Filtro_Selecao value={tecnologias} onChange={(e) => setTecnologias(e.target.value)}>
                        <option value="">{t("todos")}</option>
                        <option value="C++">{t("C++")}</option>
                        <option value="excel">{t("excel")}</option>
                        <option value="notion">{t("notion")}</option>
                        <option value="power-BI">{t("power_bi")}</option>
                        <option value="python">{t("python")}</option>
                        <option value="react">{t("react")}</option>
                        <option value="trello">{t("trello")}</option>
                    </Filtro_Selecao>
                </div>
                <div>
                    <label>{t("periodo")}:</label>
                    <Filtro_Selecao value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
                        <option value="">{t("todos")}</option>
                        <option value="2023-1">2023-1</option>
                        <option value="2023-2">2023-2</option>
                        <option value="2024-1">2024-1</option>
                        <option value="2024-2">2024-2</option>
                    </Filtro_Selecao>
                </div>
                <Filtro_Botao onClick={aplicarFiltros}>{t("aplicar_filtro")}</Filtro_Botao>
                <Filtro_Botao_Desfazer onClick={desfazerFiltros}>{t("desfazer_filtros")}</Filtro_Botao_Desfazer>
            </Filtro_Container>
        </Botao_Container>
    );
};

export default Botao_de_busca;



