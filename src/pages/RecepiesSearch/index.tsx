import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import HeaderApp from "../../components/HeaderApp";
import { api } from "../../services/api";
import { ContentContainer } from './styles';
import { FaSearch } from 'react-icons/fa';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

interface RecepieInterface {
  id: number;
  nome: string;
  id_categorias: number;
  tempo_preparo_minutos: number;

}

interface CategoryInterface {
  id: number;
  nome: string;
}

export default function RecepiesSearch() {
  const [recepies, setRecepies] = useState<RecepieInterface[]>([]);
  const [defaultCategories, setDefaultCategories] = useState<CategoryInterface[]>([]);
  const [search, setSearch] = useState('');

  const query = useQuery();
  const history = useHistory();
  const userID = query.get("userid");
  const nameRecepie = query.get("namerecepie");

  


  useEffect(() => {
    if(nameRecepie !== null){
      setSearch(nameRecepie)
      api.get(`recepies-search?userid=${userID}&namerecepie=${nameRecepie}`).then(response => {
        setRecepies(response.data);
      })
    }
  }, [userID, nameRecepie]);

  useEffect(() => {
    api.get('categories').then(response => {
      setDefaultCategories(response.data);
    })
  }, [])

  function convertCategory(id: number) {
    const categories = [...defaultCategories];
    const categoryIndex = categories.find(category => category.id === id);
    return categoryIndex?.nome;
  }

  function handleRedirectToRecepieInformation(userID: number, recepieID: number) {
    history.push(`/recepie-information?userid=${userID}&recepieid=${recepieID}`);
  }

  function handleRedirectToRecepiesSearch() {
    if (search !== '') {
      history.push(`/recepies-search?userid=${userID}&namerecepie=${search}`);
    } else if(search === ''){
      history.push(`/recepies?userid=${userID}`);
    }
  }


  if (recepies.length > 0) {
    return (
      <>
        <HeaderApp userID={query.get("userid")} />
        <ContentContainer>
          <div className="subheader">
            <h1>🍕 Receitas Cadastradas</h1>
            <div className="search">
              <input
                type="text"
                onChange={event => setSearch(event.target.value)}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    handleRedirectToRecepiesSearch();
                  }
                }}
                value={search}
                placeholder="Pesquisar receita..."
              />
              <FaSearch
                className="search-icon"
                onClick={handleRedirectToRecepiesSearch}
              />
            </div>
          </div>

          {recepies.map(recepie => {
            return (
              <div
                className="recepie"
                onClick={() => handleRedirectToRecepieInformation(Number(query.get("userid")), recepie.id)}
                key={recepie.id}
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
      <HeaderApp userID={query.get("userid")} />
      <ContentContainer>
        <div className="subheader">
          <h1>🍕 Receitas Cadastradas</h1>
          <div className="search">
            <input
              type="text"
              onChange={event => setSearch(event.target.value)}
              value={search}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  handleRedirectToRecepiesSearch();
                }
              }}
              placeholder="Pesquisar receita..."
              />
            <FaSearch
              className="search-icon"
              onClick={handleRedirectToRecepiesSearch}
            />
          </div>
        </div>

        <span>Nenhuma receita encontrada!</span>

      </ContentContainer>
    </>
  );
}
