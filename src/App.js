/* eslint-disable */

import React, { useEffect, useState } from "react";
import MovieContainer from "./components/MovieContainer";
import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"


import "./styles.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("")


// API CALL

const axios = require("axios");

async function apiCall() {
	const response = await axios ({
	url: "http://www.omdbapi.com/?s=Avengers&apikey=9c35788e",
	method: "GET"
})

console.log(response.data.Search)
setMovies(response.data.Search)
}

  useEffect(() => {
    apiCall();
  }, []);



  return <div>
    <Header />
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieContainer movies={movies} />
      </div>
    </div>
  </div>
}

export default App