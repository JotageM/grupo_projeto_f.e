import { Link } from "react-router-dom";
import { Top, Container, MenuItem, MenuButton } from "./Style";

const Header = ({ children }) => {
  return (
    <>
      <Top>
        <Container>
          <a href="/">
            <img style={{ maxWidth: 150 }} src="imagens/logo_ibmec.png" />
          </a>
          <MenuItem> Projetos </MenuItem>
          <MenuItem> Sobre nós </MenuItem>
          <MenuButton> PT | EN </MenuButton>
        </Container>
      </Top>
      {children}
    </>
  );
}

export default Header;