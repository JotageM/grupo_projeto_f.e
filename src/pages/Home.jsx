import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Card from "../components/Card/Card";
import ListContainer from "../components/ListContainer/ListContiner";
import { Paginacao_paginacao } from "../components/Pagination/Style";
import Pagination from "../components/Pagination/Pagination";
import Banner from "../components/Banner/Banner";
import Botao_de_busca from "../components/Botao de busca/botão de busca";
import Header from "../components/Header/Header";
import dados from "../data/dados-projetos.json"


const Home = () => {

  

  return (
    <>
    
      <Header></Header>
      <Banner></Banner>
      <Botao_de_busca></Botao_de_busca>
      <ListContainer>
          {dados.map(
            (el, index) => (
              <Card
                
                key={index}
                id = {el.id}
                titulo={el.titulo}
                src={el.url}
                subtitulo={el.subtitulo}
                descricao={el.descricao}
              />
              )
          )}
          </ListContainer>
      <Pagination/>
      
      
    
    </>
    
  )
}

export default Home