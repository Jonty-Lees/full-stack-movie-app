import React from "react";

const WatchLaterContainer = (props) => {

    console.log("PROPS MOVIES", props)

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="movieContainer">
                    <>
                        <img src={movie.Poster} alt={`Movie poster of ${movie.Title}`}></img>
                        <h5>{movie.Title}</h5>
                        <button className="button-delete" onClick={()=> props.deleteMovie(movie)} >
                            Delete Movie
                        </button>
                    </>
                </div>
            ))}
        </>
    )
}

export default WatchLaterContainer
