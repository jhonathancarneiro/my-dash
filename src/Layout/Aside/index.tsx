import { Link } from "react-router-dom";

import {
  Container,
  HeaderAside,
  LogoImg,
  Title,
  MenuContainer,
  ItemMenu,
} from "./styles";
import logoImg from "../../assets/logo.svg";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdDashboard,
  MdExitToApp,
} from "react-icons/md";

export default function Aside() {
  return (
    <Container>
      <HeaderAside>
        <LogoImg src={logoImg} alt="logo minha carteira" />
        <Title>Minha carteira</Title>
      </HeaderAside>
      <MenuContainer>
        <Link to="/dashboard">
          <ItemMenu>
            <MdDashboard /> Dashboard
          </ItemMenu>
        </Link>
        <Link to="/list/entry-balance">
          <ItemMenu>
            <MdArrowUpward /> Entradas
          </ItemMenu>
        </Link>
        <Link to="/list/exit-balance">
          <ItemMenu>
            <MdArrowDownward /> Saidas
          </ItemMenu>
        </Link>
        <Link to="/exit">
          <ItemMenu href="#">
            <MdExitToApp /> Sair
          </ItemMenu>
        </Link>
      </MenuContainer>
    </Container>
  );
}
