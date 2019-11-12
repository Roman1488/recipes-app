import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {

  const APP_ID = '6e799466';
  const APP_KEY = '71b90c4e4847ff2784eed0af7ddf2418';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
      getRecipes();
  }, [query]);

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
  };

  const updateSearch = e => {
      setSearch(e.target.value);
  };

  const getSearch = e => {
      e.preventDefault();
      setQuery(search);
  };

  return(
      <div className="container">
          <form className="recipes-form" onSubmit={getSearch}>
            <div className="input-group mb-3">
                <input value={search} type="search" placeholder="Search..." className="form-control" aria-label="Search" aria-describedby="Search" onChange={updateSearch} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-outline-primary">Search</button>
                </div>
            </div>
          </form>
          <div className="recipes-list">
              <div className="container">
                  <div className="row">
              {recipes.map(recipe => (
                  <div key={recipe.recipe.label} className="col-12 col-md-6 col-xl-4">
                      <Recipe
                          title={recipe.recipe.label}
                          calories={recipe.recipe.calories.toFixed(2)}
                          image={recipe.recipe.image}
                          ingredients={recipe.recipe.ingredients}
                      />
                  </div>
              ))}
                  </div>
              </div>
          </div>
      </div>
  );
}
export default App;
