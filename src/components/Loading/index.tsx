import hamburgersGif from '../../assets/hamburgers.gif';
import { Container } from './styles';

export default function Loading(){
  return(
    <Container>
      <img src={hamburgersGif} alt="Carregando"/>
    </Container>
  );
}