/* eslint-disable */

import React, { useEffect, useState } from "react";
import MovieContainer from "./components/MovieContainer";
import Header from "./components/Header"
import SearchBar from './components/Searchbar'
import Navigation  from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css";


const Home = (props) => {
  const [searchValue, setSearchValue] = useState("");


  // API CALL

  const axios = require("axios");

  useEffect(() => {
    async function apiCall() {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=9c35788e`);

      if (response.data.Search) {
        props.setMovies(response.data.Search);
      }

    }
    apiCall(searchValue);
  }, [searchValue]);





  return (
    <div>
      <Header />
      <Navigation />
      <div className='container-fluid home-page-app'>
        <div>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='row'>
          <MovieContainer
            movies={props.movies}
            handleWatchLaterClick ={props.addMovie}
          />
        </div>

      </div>
    </div>)
}

export default Home