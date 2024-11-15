import { Link } from "react-router-dom"; 
import { Top, Container, MenuItem, MenuButton, HamburgerButton } from "./Style";
import { useTranslation } from "react-i18next"; 

const Header = ({ children }) => {
  const { i18n, t } = useTranslation(); 

  
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt" : "en"; 
    i18n.changeLanguage(newLang); 
  };

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
            <img src="imagens/burger-bar.png" style={{ maxWidth: 35 }} alt="Menu" />
          </HamburgerButton>
        </Container>
      </Top>
      {children}
    </>
  );
};

export default Header;
