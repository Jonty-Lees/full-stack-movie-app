/* eslint-disable */

import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home'
import WatchLater from "./WatchLater";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={
          <Home />
        } />
        <Route path='/watchlater' element={
          <WatchLater />
        } />

      </Routes>

    </div>)
}

export default App