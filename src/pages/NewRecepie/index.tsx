import { FormEvent, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { api } from '../../services/api';
import {ContentContainer} from './styles';

export default function NewRecepie() {
  const [nameRecepie, setNameRecepie] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [portions, setPortions] = useState('');
  const [ingredients, setIngredientes] = useState('');
  const [preparation, setPreparation] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [defaultCategories, setDefaultCategories] = useState([{id: 0, nome: ''}]);
  
  const history = useHistory();
  


  useEffect(() => {
    api.get('categories').then(response => {
      setDefaultCategories(response.data);
    })
  }, [])

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  


  function handleRegisterNewRecepie(event: FormEvent){

    event.preventDefault();
    const arrayIngredients = ingredients.split('\n');
    const igredientsTrim = arrayIngredients.map(ingredients => ingredients.trim());
    const arrayPreparation = preparation.split('\n');
    const preparationTrim = arrayPreparation.map(preparation => preparation.trim());
    const recepie = {
      userID: query.get("userid"),
      categoryID: category,
      nameRecepie,
      time,
      portions,
      preparation: preparationTrim,
      ingredients: igredientsTrim
    }

    api.post('recepies', recepie).then(response => {
      const result = response.data;
      if (!result.hasOwnProperty('erro')) {
        setIsError(false);
        history.push(`/recepies?userid=${query.get("userid")}`);
        
      } else{
        setIsError(true);
        setErrorMessage(result.erro);
      }
    })

  }

  function handleRedirectToRecepies(){
    history.push(`recepies?userid=${query.get("userid")}`);
  }

  if(!isError){
    return(
      <>
        <ContentContainer>
        <h1>Nova Receita</h1>
        <form onSubmit={handleRegisterNewRecepie} >
          <input 
            type="text"
            placeholder="Nome da receita..."
            onChange={event => setNameRecepie(event.target.value)}
          />
          <div className="informations-group">
  
            <input 
              type="number"
              placeholder="Tempo (minutos)"
              className="time"
              onChange={event => setTime(event.target.value.trim())}
            />
  
            <input 
              type="number"
              placeholder="Número de porções"
              className="portions"
              onChange={event => setPortions(event.target.value.trim())}
            />

            <select 
              name="Categoria"
              className="category"
              onChange={event => setCategory(event.target.value.trim())}
            >
              {defaultCategories.map(category => {
                return <option value={category.id}>{category.nome}</option>
              })}
            </select>
  
          </div>
  
  
          <textarea 
            placeholder="Ingredientes... (um ingrediente por linha)"
            className="ingredients"
            onChange={event => setIngredientes((event.target.value).trim())}
          />
  
          <textarea 
            placeholder="Modo de preparo... (um passo por linha)"
            className="preparation"
            onChange={event => setPreparation((event.target.value).trim())}
          />
  
          <div className="buttons">
            <button 
                type="button"
                onClick={handleRedirectToRecepies}
            >
              Voltar
            </button>
            <button 
              type="submit"
            >
              Criar Receita
            </button>

          </div>
  
          
        </form>
      </ContentContainer>
      </>
    );
  }
  return(
    <>
      <ContentContainer>
      <h1>Nova Receita</h1>
      <form onSubmit={handleRegisterNewRecepie} >
        <input 
          type="text"
          placeholder="Nome da receita..."
          onChange={event => setNameRecepie(event.target.value)}
        />
        <div className="informations-group">

          <input 
            type="number"
            placeholder="Tempo (minutos)"
            className="time"
            onChange={event => setTime(event.target.value.trim())}
          />

          <input 
            type="text"
            placeholder="Categoria"
            className="category"
            onChange={event => setCategory(event.target.value.trim())}
          />

          <input 
            type="number"
            placeholder="Número de porções"
            className="portions"
            onChange={event => setPortions(event.target.value.trim())}
          />
        </div>


        <textarea 
          placeholder="Ingredientes... (um ingrediente por linha)"
          className="ingredients"
          onChange={event => setIngredientes((event.target.value).trim())}
        />

        <textarea 
          placeholder="Modo de preparo... (um passo por linha)"
          className="preparation"
          onChange={event => setPreparation((event.target.value).trim())}
        />

        <button 
          type="submit"
        >
          Criar Receita
        </button>

        
      </form>
      <span>{errorMessage}</span>
    </ContentContainer>
    </>
  );
}