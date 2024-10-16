import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Card from "../components/Card/Card";
import ListContainer from "../components/ListContainer/ListContiner";
import { Paginacao_paginacao } from "../components/Pagination/Style";
import Pagination from "../components/Pagination/Pagination";
import Banner from "../components/Banner/Banner";

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
      <Banner></Banner>
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