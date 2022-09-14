import React from "react";
import { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

function MovieTheater() {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=3"
    )
      .then((response) => response.json())
      .then((data) => {
        let sliceData = data.results.slice(0, 12);
        setNewMovies(sliceData);
      });
  }, []);

  return (
    <div className="movie-theater grid wide">
      <div className="container">
        <div className="section-title row">
          <div className="title col l-7">
            <span>Phim chiếu rạp</span>
          </div>
          <div className="see-all col l-5">
            <button className="see-all-btn">
              Xem Thêm
              <AiOutlineRight />
            </button>
          </div>
        </div>
        <div className="list-movies row no-gutters">
          {newMovies &&
            newMovies.map((movie, index) => {
              return (
                <div className="movie-item col l-2" key={index}>
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
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MovieTheater;
