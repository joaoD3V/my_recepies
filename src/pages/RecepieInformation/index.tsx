import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { api } from "../../services/api";

import { ContentContainer } from './styles';

interface RecepieInterface {
  id_categorias: number;
  nome: string;
  tempo_preparo_minutos: number;
  porcoes: number;
  modo_preparo: string;
  ingredientes: string;
}

interface CategoryInterface {
  id: number;
  nome: string;
}

export default function RecepieInformation() {
  const [defaultCategories, setDefaultCategories] = useState<CategoryInterface[]>([]);

  const [isEdit, setIsEdit] = useState(false)

  const [isDisableTitle, setIsDisableTitle] = useState(true);
  const [isDisableTime, setIsDisableTime] = useState(true);
  const [isDisableCategory, setIsDisableCategory] = useState(true);
  const [isDisablePortions, setIsDisablePortions] = useState(true);
  const [isDisableIngredients, setIsDisableIngredients] = useState(true);
  const [isDisablePreparation, setIsDisablePreparation] = useState(true);

  const [Title, setTitle] = useState('');
  const [Time, setTime] = useState(0);
  const [Category, setCategory] = useState(0);
  const [Portions, setPortions] = useState(0);
  const [Ingredients, setIngredients] = useState<string[]>([]);
  const [Preparation, setPreparation] = useState<string[]>([]);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  function convertCategory(id: number) {
    const categories = [...defaultCategories];
    const categoryIndex = categories.find(category => category.id === id);
    return categoryIndex?.nome;
  }

  const query = useQuery();
  const userID = query.get("userid");
  const recepieID = query.get("recepieid");
  const history = useHistory();

  useEffect(() => {
    api.get(`recepie-information?userid=${userID}&recepieid=${recepieID}`)
      .then(response => {
        const recepie: RecepieInterface = response.data[0];
        setTitle(recepie.nome);
        setTime(recepie.tempo_preparo_minutos);
        setCategory(recepie.id_categorias);
        setPortions(recepie.porcoes);
        const arrayOfPreparation = recepie.modo_preparo.split(',');
        const arrayOfIngredients = recepie.ingredientes.split(',');
        setIngredients(arrayOfIngredients);
        setPreparation(arrayOfPreparation);
      })
  }, [recepieID, userID])

  useEffect(() => {
    api.get('categories').then(response => {
      setDefaultCategories(response.data);
    })
  }, [])



  function handleRedirectToRecepies() {
    history.push(`/recepies?userid=${userID}`);
  }

  function handleEditMode() {
    if (isEdit === false) {
      setIsEdit(true);
      setIsDisableTitle(false);
      setIsDisableTime(false);
      setIsDisableCategory(false);
      setIsDisablePortions(false);
      setIsDisableIngredients(false);
      setIsDisablePreparation(false);
    }
  }

  function handleUpdateInformations(){
    const updateRecepie = {
      userID,
      recepieID,
      categoryID: Category, 
      nameRecepie: Title, 
      time: Time, 
      portions: Portions,
      preparation: Preparation,
      ingredients: Ingredients
    }

    api.patch('recepies', updateRecepie)
      .then(response => {
        const result = response.data;
        if (!result.hasOwnProperty('erro')) {
          setIsEdit(false);
          setIsError(false);
          history.push(`/recepies?userid=${userID}`);
        } else {
          setIsError(true);
          setErrorMessage(result.erro);
        }
    })
  }

  function handleDeleteRecepie(){    

    api.delete(`recepie-information?userid=${userID}&recepieid=${recepieID}`)
    .then(response => {
      const result = response.data;
      if (result.hasOwnProperty('success')) {
        setIsError(false);
        history.push(`/recepies?userid=${userID}`);
      } else {
        setIsError(true);
        setErrorMessage(result.erro);
      }
  })

  }

  if(!isError){
    return (
      <ContentContainer>
  
        <div className="buttons">
          <button
            type="button"
            onClick={handleRedirectToRecepies}
          >
            Voltar
          </button>
  
          {isEdit === true ? (
            <button
              type="button"
              onClick={handleUpdateInformations}
            >
              Salvar
            </button>
  
          ) : (
            <button
              type="button"
              onClick={handleEditMode}
            >
              Editar
            </button>
          )}
  
          <button
            type="button"
            onClick={handleDeleteRecepie}
          >
            Excluir
          </button>
  
          <button
            type="button"
            onClick={() => window.print()}
          >
            Imprimir
          </button>
        </div>
  
        <input
          type="text"
          value={Title}
          onChange={event => setTitle(event.target.value)} 
          disabled={isDisableTitle}
          className="title"
        />
  
        <div className="subinformations">
          <div className="time">
            <input 
              type="number"
              value={Time}
              disabled={isDisableTime}
              onChange={event => setTime(Number(event.target.value))} 
            />
            {Time === 1 ? <span>minuto</span> : <span>minutos</span>} 
          </div>
          
          <select 
            className="category"
            disabled={isDisableCategory}
            onChange={event => setCategory(Number(event.target.value))}
          >
            <option value={Category} selected hidden>{convertCategory(Category)}</option>
            {defaultCategories.map(category => {                
                    return <option value={category.id}>{category.nome}</option>                                 
                })}
          </select>
  
          <div className="portions">
            <input 
              type="number"
              value={Portions}
              disabled={isDisablePortions}
              onChange={event => setPortions(Number(event.target.value))} 
            />
              {Portions === 1 ? <span>porção</span> : <span>porções</span>}
          </div>
  
         
        </div>
  
          <h2>Ingredientes</h2>
          <textarea 
            value={Ingredients.join('\n')}
            disabled={isDisableIngredients}
            onChange={event => setIngredients(event.target.value.split('\n'))}
            className="ingredients"
          />      
  
        <h2>Modo de Preparo</h2>
        <textarea 
            value={Preparation.join('\n')}
            disabled={isDisablePreparation}
            onChange={event => setPreparation(event.target.value.split('\n'))}
            className="preparation-mode"
         />     
  
  
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>

      <div className="buttons">
        <button
          type="button"
          onClick={handleRedirectToRecepies}
        >
          Voltar
        </button>

        {isEdit === true ? (
          <button
            type="button"
            onClick={handleUpdateInformations}
          >
            Salvar
          </button>

        ) : (
          <button
            type="button"
            onClick={handleEditMode}
          >
            Editar
          </button>
        )}


        <button
          type="button"
          onClick={() => window.print()}
        >
          Imprimir
        </button>
      </div>
      <span>{errorMessage}</span>
      <input
        type="text"
        value={Title}
        onChange={event => setTitle(event.target.value)} 
        disabled={isDisableTitle}
        className="title"
      />

      <div className="subinformations">
        <div className="time">
          <input 
            type="number"
            value={Time}
            disabled={isDisableTime}
            onChange={event => setTime(Number(event.target.value))} 
          />
          {Time === 1 ? <span>minuto</span> : <span>minutos</span>} 
        </div>
        
        <select 
          className="category"
          disabled={isDisableCategory}
          onChange={event => setCategory(Number(event.target.value))}
        >
          <option value={Category} selected hidden>{convertCategory(Category)}</option>
          {defaultCategories.map(category => {                
                  return <option value={category.id}>{category.nome}</option>                                 
              })}
        </select>

        <div className="portions">
          <input 
            type="number"
            value={Portions}
            disabled={isDisablePortions}
            onChange={event => setPortions(Number(event.target.value))} 
          />
            {Portions === 1 ? <span>porção</span> : <span>porções</span>}
        </div>

       
      </div>

        <h2>Ingredientes</h2>
        <textarea 
          value={Ingredients.join('\n')}
          disabled={isDisableIngredients}
          onChange={event => setIngredients(event.target.value.split('\n'))}
          className="ingredients"
        />      

      <h2>Modo de Preparo</h2>
      <textarea 
          value={Preparation.join('\n')}
          disabled={isDisablePreparation}
          onChange={event => setPreparation(event.target.value.split('\n'))}
          className="preparation-mode"
       />     


    </ContentContainer>
  );
}