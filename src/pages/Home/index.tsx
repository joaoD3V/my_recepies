import Header from "../../components/Header";
import chefImg from '../../assets/chef.svg';
import { ContentContainer, Hero } from "./styles";
import { Link } from 'react-router-dom';


export default function Home(){
  return (
    <>
      <Header />
      <ContentContainer className={"contentContainer"}>
        <Hero>
          <h1>
            Suas melhores receitas <br/>
            <span>em um só lugar<span>!</span></span>
          </h1>
          <p>
            O que está esperando? Cadastre uma nova receita <br/>
            e comprartilhe-as com seus amigos.
          </p>
          <Link to="/login">
            <button
              type="button"
            >
              Cadastrar!
            </button>
          </Link>
        </Hero>
          <img src={chefImg} alt="Chefe Cozinhando"/>
      </ContentContainer>
    </>
  );
}