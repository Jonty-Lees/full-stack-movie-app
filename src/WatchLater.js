/* eslint-disable */

import React, { useEffect, useState } from "react";
import MovieContainer from "./components/MovieContainer";
import Header from "./components/Header"
import SearchBar from './components/Searchbar'
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css";
import WatchLaterContainer from './components/WatchLaterContainer'
import ExternalBtn from "./components/ExternalBtn";

const WatchLater = (props) => {

  console.log('WatchLater watchLater', props.watchLater)
  console.log('WatchLater Movie', props.movies)


  return (
    <div>
      <Header />
      <Navigation />
      <div className='container-fluid watchLater-page-app'>
        <div className='row'>
          <WatchLaterContainer 
            movies = {props.movies}
            watchLater ={props.watchLater}
            deleteMovie ={props.deleteMovie}
            watchedMovie ={props.watchedMovie}
          />
        </div>
      </div>
      <ExternalBtn deleteAll ={props.deleteAll} />
    </div>)
}

export default WatchLater