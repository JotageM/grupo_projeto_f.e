import { Link } from "react-router-dom"; 
import { Top, Container, MenuItem, MenuButton, HamburgerButton, Ham_item, Ham_leng, Ham_container } from "./Style";
import { useTranslation } from "react-i18next"; 
import { useState } from "react";

const Header = ({ children }) => {
  const { i18n, t } = useTranslation(); 

  
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt" : "en"; 
    i18n.changeLanguage(newLang); 
  };
 
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }
    

  return (
    <>
      <Top>
        <Container>
          <a href="https://www.ibmec.br">
            <img style={{ maxWidth: 150 }} src="imagens/logo_ibmec.png" alt="Logo Ibmec" />
          </a>

          
          
          <MenuItem as={Link} to="/" style={{textDecoration:"none"}}>{t("projetos")}</MenuItem>
          <MenuItem as={Link} to="/sobre-nos" style={{textDecoration:"none"}}>{t("sobrenos")}</MenuItem>
          
          
          <MenuButton onClick={toggleLanguage}>
            {i18n.language === "en" ? "PT" : "EN"}
          </MenuButton>
          
          <HamburgerButton>
          <button onClick={toggleMenu} style={{ background: "none", border: "none" }}>
            <img
              src="imagens/burger-bar.png"
              style={{ maxWidth: 35 }}
              alt="Menu"
            />
          </button>
          {isMenuVisible && (
            <Ham_container>

            <Ham_item as={Link} to="/" style={{ textDecoration: "none" }}>{t("projetos")}</Ham_item>
            <Ham_item as={Link} to="/sobre-nos" style={{ textDecoration: "none" }}>{t("sobrenos")}</Ham_item>
            <Ham_leng onClick={toggleLanguage}>{i18n.language === "en" ? "PT" : "EN"}</Ham_leng> 
            
            </Ham_container>
          )}
          
          </HamburgerButton>
        </Container>
      </Top>
      {children}
    </>
  );
};


export default Header;
