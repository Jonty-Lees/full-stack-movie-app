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
                    </>
                </div>
            ))}
        </>
    )
}

export default WatchLaterContainer
