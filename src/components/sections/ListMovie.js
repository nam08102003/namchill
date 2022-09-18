import React from "react";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";

function ListMovie({ movies, total }) {
  return (
    <>
      {movies &&
        movies.map((movie, index) => {
          return (
            <Link
              to={`/movie-store/${movie.id}`}
              key={index}
              className={`col ${
                total === 4 ? "l-3 m-4 m-xl-3 c-6" : "l-2 m-3 m-xl-2 c-6"
              }`}
            >
              <div className="movie-item">
                <div className="movie-img">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="movie-info">
                  <div className="movie-name">
                    <h2>{movie.title}</h2>
                  </div>
                  <div className="movie-status">
                    <span>HD Vietsub + TM</span>
                  </div>
                </div>
                <div className="overlay"></div>
                <div className="action-btn">
                  <span className="play-btn">
                    <BsFillPlayFill />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
}

export default ListMovie;
