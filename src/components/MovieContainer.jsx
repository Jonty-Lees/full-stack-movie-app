import React from "react";

const MovieContainer = (props) => {

    console.log("12",props)

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="movieContainer">
                    <>
                        <img src={movie.Poster} alt={`Movie poster of ${movie.Title}`}></img>
                        <h5>{movie.Title}</h5>
                        <button className="button-favourites" onClick={()=> props.handleWatchLaterClick(movie)} >
                            Add To <br />
                            Watch Later
                        </button>
                    </>
                </div>
            ))}
        </>
    )
}

export default MovieContainer
