/* eslint-disable */

import React, { useEffect, useState } from "react";
import MovieContainer from "./components/MovieContainer";
import Header from "./components/Header"
import SearchBar from './components/Searchbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  
  // API CALL

  const axios = require("axios");

  useEffect(() => {
    async function apiCall(searchValue) {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=9c35788e`);

      if(response.data.Search) {
        setMovies(response.data.Search);
      }
    }
    apiCall(searchValue);
  }, [searchValue]);


  return <div>
    <Header />
    <div className='container-fluid movie-app'>
      <div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
        <div className='row'>
          <MovieContainer movies={movies} />
      </div>
    </div>

  </div>
}

export default App