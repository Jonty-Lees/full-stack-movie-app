import React from "react";

const MovieContainer = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="movieContainer">
                    <>
                        <img src={movie.Poster} alt={`Movie poster of ${movie.Title}`}></img>
                        <h3>{movie.Title}</h3>
                        <button className="button-favourites">
                            Add To <br />
                            Watch Later
                        </button>
                    </>
                </div>
            ))}
        </>
    )
}

export default MovieContainer;
{/* <div className="movieContainer">
                    <div id='movie_div'>
                        <img src={movie.Poster} alt={`Movie poster of ${movie.Title}`}></img>
                        <h3>{movie.Title}</h3>
                        <button className="button-favourites">
                            Add To <br />
                            Watch Later
                        </button>
                    </div>
                </div> */}