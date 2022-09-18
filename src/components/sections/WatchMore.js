import React, { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import ListMovie from "./ListMovie";

function WatchMore() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/297762/similar?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=2";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <div className="movie-favorite grid wide">
      <div className="container">
        <div className="section-title">
          <div className="title">
            <span>Có thể bạn thích xem</span>
          </div>
        </div>
        <div className="list-movies row no-gutters">
          <ListMovie movies={movies} total={4} />
        </div>
      </div>
    </div>
  );
}

export default WatchMore;
