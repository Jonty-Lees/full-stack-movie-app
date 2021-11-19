/* eslint-disable */

import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home'
import WatchLater from "./WatchLater";

const App = () => {

  const [movies, setMovies] = useState([]);

const [watchLater, setWatchLater] = useState([]);


const addMovie = (movie) => {
  const newWatchLaterList = [...watchLater, movie];
  setWatchLater(newWatchLaterList)
}


const deleteWatchLaterMovie =(movie)=>{
  const newWatchLaterList = watchLater.filter(
    (watchLater) => watchLater.imdbID !== movie.imdbID
    )
    setWatchLater(newWatchLaterList)
}

const deleteAllMovies =(movie)=>{
    setWatchLater([])
}


  return (
    <div>
      <Routes>
        <Route exact path='/' element={
          <Home
            movies={movies}
            setMovies={setMovies}
            watchLater ={watchLater}
            setWatchLater = {setWatchLater}
            addMovie = {addMovie}
            />
        } />
        <Route path='/watchlater' element={
          <WatchLater 
            addMovie = {addMovie}
            movies={watchLater}
            setWatchLater = {setWatchLater}
            deleteMovie = {deleteWatchLaterMovie}
            deleteAll = {deleteAllMovies}
          />
        } />

      </Routes>

    </div>)
}

export default App