import { Container, Content } from "./styles";

import logoYellowImg from '../../assets/logo_yellow.svg';
import { Link, useHistory } from "react-router-dom";

interface UserProps{
  userID: string | null;
}


export default function HeaderApp({userID}: UserProps){
  const history = useHistory();
  
  function handleRedirectToNewRecepie(){
    history.push(`/new-recepie?userid=${userID}`);
  }


  return(
    <Container>
      <Content>
        <img src={logoYellowImg} alt="My Recepies"/>
      
          <button
            type="button"
            onClick={handleRedirectToNewRecepie}
            className="new-recepie"
          >
            Nova Receita
          </button>
        <Link to="/">
          <button
            type="button" 
          >
            Sair
          </button>
        </Link>
      </Content>
    </Container>
  );
} 