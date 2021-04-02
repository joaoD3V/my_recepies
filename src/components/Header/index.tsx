import { Container, Content } from "./styles";

import logoYellowImg from '../../assets/logo_yellow.svg';
import { Link } from "react-router-dom";

export default function Header(){
  return(
    <Container>
      <Content>
        <img src={logoYellowImg} alt="My Recepies"/>
        <Link to="/login">
          <button
            type="button" 
          >
            Login
          </button>
        </Link>
      </Content>
    </Container>
  );
} 