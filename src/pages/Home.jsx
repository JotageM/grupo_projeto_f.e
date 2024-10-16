import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Card from "../components/Card/Card";
import ListContainer from "../components/ListContainer/ListContiner";
import { Paginacao_paginacao } from "../components/Pagination/Style";
import Pagination from "../components/Pagination/Pagination";
import ProjetosContainer from "../components/ProjetosContainer/ProjetosContainer";

const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */
  

  return (
    <>
    
     <Base>
      <ProjetosContainer></ProjetosContainer>
      <ListContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        
        
        
      
      
      </ListContainer>
      <Pagination/>
      
      
    </Base>
    </>
    
  )
}

export default Home