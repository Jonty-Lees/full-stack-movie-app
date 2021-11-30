import React from "react";

const MovieContainer = (props) => {


    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="movieContainer">
                    <>
                        <img src={movie.Poster} alt={`Movie poster of ${movie.Title}`}></img>
                        <h5>{movie.Title}</h5>
                        <button 
                        className="button-favourites" 
                        onClick={()=> props.handleWatchLaterClick(movie)} >
                            <span> Add To <br /> Watch Later </span>
                        </button>
                    </>
                </div>
            ))}
        </>
    )
}

export default MovieContainer
