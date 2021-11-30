import React from "react";

const WatchLaterContainer = (props) => {

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
                        <button className="button-watched" onClick={()=> props.watchedMovie(movie)} >
                            Seen It?
                        </button>
                    </>
                </div>
            ))}
        </>
    )
}

export default WatchLaterContainer
