import { useState } from "react";
import Card from "../components/Card/Card";
import ListContainer from "../components/ListContainer/ListContiner";
import Pagination from "../components/Pagination/Pagination";
import Banner from "../components/Banner/Banner";
import Botao_de_busca from "../components/Botao-de-busca/Botao-de-busca";
import dados_projetos from "../data/dados-projetos.json";
import dados_banner from "../data/dados-banner.json";
import Header from "../components/Header/Header";

const Home = () => {
  const [projetosFiltrados, setProjetosFiltrados] = useState(dados_projetos);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 12;

  const aplicarFiltro = (filtros) => {
    const { tituloOuSubtitulo, unidade, curso, tecnologias, periodo } = filtros;
    const novosProjetosFiltrados = dados_projetos.filter((el) => {
      const matchTituloOuSubtitulo = el.titulo.toLowerCase().startsWith(tituloOuSubtitulo.toLowerCase()) || 
                                     el.subtitulo.toLowerCase().startsWith(tituloOuSubtitulo.toLowerCase());
      const matchUnidade = unidade ? el.unidade?.toLowerCase() === unidade.toLowerCase() : true;
      const matchCurso = curso ? el.curso?.toLowerCase() === curso.toLowerCase() : true;
      const matchTecnologias = tecnologias ? el.tecnologias?.some(tecnologia => 
        tecnologia.toLowerCase().includes(tecnologias.toLowerCase())) : true;
      const matchPeriodo = periodo ? el.periodo?.toLowerCase() === periodo.toLowerCase() : true;

      return matchTituloOuSubtitulo && matchUnidade && matchCurso && matchTecnologias && matchPeriodo;
    });

    setProjetosFiltrados(novosProjetosFiltrados);
    setCurrentPage(1); 
  };

  const resetarFiltros = () => {
    setProjetosFiltrados(dados_projetos);
    setCurrentPage(1); 
  };

  // Lógica de paginação
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projetosFiltrados.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };
  

  return (
    <>
    <Header></Header>
      {dados_banner
        .filter((el) => el.exibirHome !== false)
        .map((el, index) => (
          <Banner
            key={index}
            id={el.id}
            titulo={el.titulo}
            subtitulo={el.subtitulo}
          />
        ))}
      <Botao_de_busca Filtrar={aplicarFiltro} ResetarFiltros={resetarFiltros} />
      <ListContainer>
        {currentProjects.map((el, index) => (
          <Card
            key={index}
            id={el.id}
            titulo={el.titulo}
            src={el.url}
            subtitulo={el.subtitulo}
            descricao={el.descricao}
          />
        ))}
      </ListContainer>
      <Pagination
        projectsPerPage={projectsPerPage}
        totalProjects={projetosFiltrados.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Home;





