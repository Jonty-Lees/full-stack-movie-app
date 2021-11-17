/* eslint-disable */

import React, { useEffect, useState } from "react";
import MovieContainer from "./components/MovieContainer";
import Header from "./components/Header"
import SearchBar from './components/Searchbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  // API CALL

  const axios = require("axios");

  useEffect(() => {
    async function apiCall(searchValue) {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=9c35788e`);

      if (response.data.Search) {
        setMovies(response.data.Search);
      }
    }
    apiCall(searchValue);
  }, [searchValue]);


  const addMovie = (movie) =>{
    const newWatchLaterList = [...watchLater, movie];
    setWatchLater(newWatchLaterList)
  }



  return (
    <div>
      <Header />
      <div className='container-fluid watchLater-page-app'>
        <div>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='row'>
          <MovieContainer 
          movies ={movies} 
          handleWatchLaterClick ={addMovie}
           />
        </div>
        <watchLater  />
      </div>
    </div>)
}

export default Home