/* eslint-disable */

import React, { useEffect, useState } from "react";
import MovieContainer from "./components/MovieContainer";
import Header from "./components/Header"
import SearchBar from './components/Searchbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css";
import WatchLaterContainer from './components/WatchLaterContainer'

const WatchLater = (props) => {

  console.log('WatchLater watchLater', props.watchLater)
  console.log('WatchLater Movie', props.movies)

  return (
    <div>
    <h1>HELLO WORLD</h1>
      <Header />
      <div className='container-fluid watchLater-page-app'>
        <div className='row'>
          <WatchLaterContainer 
            movies = {props.movies}
            watchLater ={props.watchLater}
          />
        </div>
      </div>
    </div>)
}

export default WatchLater