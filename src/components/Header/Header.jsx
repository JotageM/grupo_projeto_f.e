import { Link } from "react-router-dom";
import { Top , Container, MenuItem, MenuButton} from "./Style";



const Header = () => (
  <Top>
      <Container>
        <img style={{ maxWidth: 150 }} src="imagens/logo_ibmec.png"/>
        <MenuItem> Projetos </MenuItem>
        <MenuItem> Sobre nós </MenuItem>
        <MenuButton> PT | EN </MenuButton>
      </Container>
    </Top>
  ) 

export default Header;