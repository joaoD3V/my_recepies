import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import HeaderApp from "../../components/HeaderApp";
import { api } from "../../services/api";
import { ContentContainer } from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

interface RecepieInterface {
  id: number;
  nome: string;
  id_categorias: number;
  tempo_preparo_minutos: number;

}

interface CategoryInterface{
  id: number;
  nome: string;
}

export default function Recepies(){
  const [recepies, setRecepies] = useState<RecepieInterface[]>([]);
  const [defaultCategories, setDefaultCategories] = useState<CategoryInterface[]>([]);
  const query = useQuery();
  const history = useHistory();


  useEffect(() => {
    api.get(`recepies?userid=${query.get("userid")}`).then(response => {
     setRecepies(response.data);
    })
  }, [query]);

  useEffect(() => {
    api.get('categories').then(response => {
      setDefaultCategories(response.data);
    })
  }, [])

  function convertCategory(id: number){
    const categories = [...defaultCategories];
    const categoryIndex = categories.find(category => category.id === id);
    return categoryIndex?.nome;
  }

  function handleRedirectToRecepieInformation( userID: number, recepieID: number){
    history.push(`/recepie-information?userid=${userID}&recepieid=${recepieID}`);
  }
  

  if(recepies.length > 0){
    return (
      <>
        <HeaderApp userID={query.get("userid")}/>
        <ContentContainer>
          <h1>🍕 Receitas Cadastradas</h1>
  
          {recepies.map(recepie => {
            return (
              <div 
                className="recepie" 
                onClick={() => handleRedirectToRecepieInformation(Number(query.get("userid")), recepie.id)}
              >
                <h2>{recepie.nome}</h2>
                <div className="informations">
                  <h3>{convertCategory(recepie.id_categorias)}</h3>
                  <span>{recepie.tempo_preparo_minutos} min.</span>
                </div>
              </div>
            );
          })}
  
        </ContentContainer>
      </>
    );
  }

  return (
    <>
      <HeaderApp userID={query.get("userid")}/>
      <ContentContainer>
        <h1>🍕 Receitas Cadastradas</h1>

        <span>Nenhuma receita cadastrada ainda!</span>

      </ContentContainer>
    </>
  );
}