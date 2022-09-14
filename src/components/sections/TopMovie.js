import React from "react";

function TopMovie({ className, title, movies: movies }) {
  console.log(movies);
  return (
    <div className={className}>
      <div className="container">
        <div className="section-title">
          <div className="">
            <span>{title}</span>
          </div>
          <div className="list-movies">
            {movies &&
              movies.map((movie, index) => {
                return (
                  <div className="movie-item" key={index}>
                    <div className="movie-img">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                      />
                    </div>
                    <div className="movie-info">
                      <h3 className="name">{movie.title}</h3>
                      <span className="seed"></span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMovie;
