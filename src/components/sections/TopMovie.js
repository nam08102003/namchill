import React from "react";

function TopMovie({ title, movies }) {
  return (
    <div className="top-movie">
      <div className="container">
        <div className="section-title">
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="list-movies grid">
            {movies &&
              movies.map((movie, index) => {
                return (
                  <div className="movie-item row" key={index}>
                    <div className="movie-img col l-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                      />
                    </div>
                    <div className="movie-info col l-8">
                      <h3 className="name-vi">{movie.title}</h3>
                      <h3 className="name-eg">{movie.title}</h3>
                      <span className="seed">10 lượt xem</span>
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
