/* eslint-disable */

import React, { useState } from "react";
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


  return (
    <div>
      <Routes>
        <Route exact path='/' element={
          <Home
            movies={movies}
            setMovies={setMovies} />
        } />
        <Route path='/watchlater' element={
          <WatchLater />
        } />

      </Routes>

    </div>)
}

export default App