/* eslint-disable */

import React, { useEffect, useState } from "react";
import MovieContainer from "./components/MovieContainer";
import Header from "./components/Header"
import SearchBar from './components/Searchbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css";
import WatchLaterContainer from './components/WatchLaterContainer'

const WatchLater = (props) => {

  return (
    <div>
    <h1>HELLO WORLD</h1>
      <Header />
      <div className='container-fluid movie-app'>
        <div className='row'>
          <WatchLaterContainer />
        </div>
      </div>
    </div>)
}

export default WatchLater