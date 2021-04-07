import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import logoWhiteImg from '../../assets/logo_white.svg';
import makingRecepiesImg from '../../assets/making_recepie.jpg';
import { api } from '../../services/api';

import { ContentContainer, Register } from "./styles";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();


  function handleLogin(event: FormEvent) {
    event.preventDefault();
    api.get(`user?email=${email}&senha=${password}`).then(response => {
      const user = response.data;
      if (!user.hasOwnProperty('erro')) {
        setIsError(false);
        history.push(`/recepies?userid=${user[0].id}`);
      } else{
        setIsError(true);
        setErrorMessage(user.erro);
      }
    });
  }

  if(!isError){
    return (
      <ContentContainer onSubmit={handleLogin}>
        <img src={makingRecepiesImg} alt="Fazendo Receita" />
        <section>
          <img src={logoWhiteImg} alt="My Recepies" />
          <form>
            <h2>Login</h2>
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
            <button
              type="submit"
            >
              Entrar
              </button>
          </form>
          <h5>Não possui uma conta?
              <Register to="/register">
              <span>
                Cadastre-se aqui!
                </span>
            </Register>
          </h5>
        </section>
      </ContentContainer>
    );
  }

  return (
    <ContentContainer onSubmit={handleLogin}>
      <img src={makingRecepiesImg} alt="Fazendo Receita" />
      <section>
        <img src={logoWhiteImg} alt="My Recepies" />
        <form>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="E-mail..."
            onChange={event => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha..."
            onChange={event => setPassword(event.target.value)}
            required
          />
          <button
            type="submit"
          >
            Entrar
            </button>
        </form>
        <span>{errorMessage}</span>
        <h5>Não possui uma conta?
            <Register to="/register">
            <span>
              Cadastre-se aqui!
              </span>
          </Register>
        </h5>
      </section>
    </ContentContainer>
  );


}