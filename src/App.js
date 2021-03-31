import React, { useEffect, useState } from "react";
import Receipe from './receipe';
import './App.css';

const App = () => {
  const APP_ID = '434e5c4d';
  const APP_KEY = '6b99a90b4002978b063f556b7f0f0dae'

  const [receipes, setReceipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("beef");

  useEffect(() => {
    getReceipes();
  }, [query])

  const getReceipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json()
    console.log(data.hits);
    setReceipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("")
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {receipes.map(recipe => (
        <Receipe title={recipe.recipe.label} cuisinetype={recipe.recipe.cuisineType} ingredients={recipe.recipe.ingredientLines}
          calories={recipe.recipe.calories} image={recipe.recipe.image} />
      ))};
    </div>
    </div>
  )
}
export default App;
