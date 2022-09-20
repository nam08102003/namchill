import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListMovie from "../components/sections/ListMovie";

function SearchPage() {
  const location = useLocation();
  let content = location.state.content;

  const [movies, setMovies] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=07ae8877cdaf5f35409fc766524ec281&page=1&query=${content}`;
  const callApi = async (url) => {
    await fetch(url)
      .then((respone) => respone.json())
      .then((data) => setMovies(data.results));
  };
  useEffect(() => {
    callApi(url);
  }, [content]);

  return (
    <div className="movie-page search-page grid wide">
      <div className="container">
        {movies.length > 0 ? (
          <>
            <h1>
              Kết quả tìm kiếm: <span>{content}</span>
            </h1>
            <div className="list-movies row no-gutters">
              <ListMovie movies={movies} />
            </div>
          </>
        ) : (
          <h1>
            Không có kết quả tìm kiếm: <span>{content}</span>
          </h1>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
