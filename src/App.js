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
  const [watched, setWatched] = useState('')

  const addMovie = (movie) => {
    if (movie.imdbID !== watchLater.imdbID) {
      alert(`You Have Successfully added ${movie.Title} To Your Watch Later List!!`)
      const newWatchLaterList = [...watchLater, movie];
      const newMovieList = movies.filter((movies) =>
        movies.imdbID !== movie.imdbID
      )
      setMovies(newMovieList)
      setWatchLater(newWatchLaterList)
    } else {
      print('You have already adde this movie to your watch list')
    }
  }



  // const changeLabel = (movie) => {
  //   if ()
  // }

  const deleteWatchLaterMovie = (movie) => {
    const newWatchLaterList = watchLater.filter(
      (watchLater) => watchLater.imdbID !== movie.imdbID
    )
    setWatchLater(newWatchLaterList)
  }

  const deleteAllMovies = (movie) => {
    setWatchLater([])
  }

  const watchedMovie = (event) => {
    if (document.querySelector(".button-watched").innerHTML === 'Seen It?') {
      document.querySelector(".button-watched").innerHTML = "Watched"
    } else if (document.querySelector(".button-watched").innerHTML === 'Watched') {
      document.querySelector(".button-watched").innerHTML = "Seen It?"
    }
  }





  return (
    <div>
      <Routes>
        <Route exact path='/' element={
          <Home
            movies={movies}
            setMovies={setMovies}
            watchLater={watchLater}
            setWatchLater={setWatchLater}
            addMovie={addMovie}
          />
        } />
        <Route path='/watchlater' element={
          <WatchLater
            addMovie={addMovie}
            movies={watchLater}
            setWatchLater={setWatchLater}
            deleteMovie={deleteWatchLaterMovie}
            deleteAll={deleteAllMovies}
            watchedMovie={watchedMovie}
          />
        } />

      </Routes>

    </div>)
}

export default App