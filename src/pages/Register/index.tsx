import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logoWhiteImg from '../../assets/logo_white.svg';
import makingRecepiesImg from '../../assets/making_recepie_2.jpg';
import { api } from '../../services/api';

import { ContentContainer } from "./styles";


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const history = useHistory();

  function handleCreateUser(event: FormEvent) {
    event.preventDefault();
    const user = {
      nome: name,
      login: email,
      senha: password,
    };
    api.post('users', user).then(response => {
      const result = response.data;
      if (!result.hasOwnProperty('erro')) {
        setIsError(false);
        history.push("/login");
        
      } else{
        setIsError(true);
        setErrorMessage(result.erro);
      }
    })
   
  }

  if(!isError){
    return (
      <ContentContainer onSubmit={handleCreateUser}>
        <section>
          <img src={logoWhiteImg} alt="My Recepies" />
          <form>
            <h2>Cadastro</h2>
            <input
              type="text"
              placeholder="Nome..."
              onChange={event => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail..."
              onChange={event => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Senha..."
              onChange={event => setPassword(event.target.value)}
            />
            <button type="submit">
              Cadastrar
          </button>
          </form>
        </section>
        <img src={makingRecepiesImg} alt="Fazendo Receita" />
  
      </ContentContainer>
    );
  }
  return (
    <ContentContainer onSubmit={handleCreateUser}>
    <section>
      <img src={logoWhiteImg} alt="My Recepies" />
      <form>
        <h2>Cadastro</h2>
        <input
          type="text"
          placeholder="Nome..."
          onChange={event => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail..."
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Senha..."
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">
          Cadastrar
      </button>
      </form>
      <span>{errorMessage}</span>
    </section>
    <img src={makingRecepiesImg} alt="Fazendo Receita" />

  </ContentContainer>
  )
}