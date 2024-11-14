import { Link } from "react-router-dom"; 
import { Top, Container, MenuItem, MenuButton, HamburgerButton } from "./Style";

const Header = ({ children }) => {
  return (
    <>
      <Top>
        <Container>
          <a href="/">
            <img style={{ maxWidth: 150 }} src="imagens/logo_ibmec.png" alt="Logo IBMEC" />
          </a>

          <MenuItem>Projetos</MenuItem>
          
          <MenuItem as={Link} to="/sobre-nos" style={{ textDecoration: 'none' }}> Sobre nós</MenuItem>

          <MenuButton> PT | EN </MenuButton>
          <HamburgerButton>
            <img src="imagens/burger-bar.png" style={{ maxWidth: 35 }} alt="Menu" />
          </HamburgerButton>
        </Container>
      </Top>
      {children}
    </>
  );
}

export default Header;
