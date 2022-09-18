import React, { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import ListMovie from "../components/sections/ListMovie";

function MovieNewPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [element, setElement] = useState();

  let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=${page}`;
  const callApi = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  useEffect(() => {
    callApi(url);
    element && element.classList.add("active");
    return () => {
      element && element.classList.remove("active");
    };
  }, [element, page, url]);

  const ChangePage = (e) => {
    setPage(e.target.innerHTML);
    setElement(e.target.parentElement);
  };
  return (
    <div className="movie-page grid wide">
      <div className="container">
        <div className="row">
          <div className="col l-8 m-8">
            <div className="new-update grid">
              <div className="container">
                <div className="section-title row">
                  <div className="title col l-12 m-12">
                    <span>Phim Mới</span>
                  </div>
                </div>
                <div className="list-movies row no-gutters">
                  <ListMovie movies={movies} total={4} />
                </div>
                <div className="button-group">
                  <ul>
                    <li className={`${page === 1 ? "active" : ""}`}>
                      <button
                        className="btn-transfer-page"
                        onClick={(e) => ChangePage(e)}
                      >
                        1
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-transfer-page"
                        onClick={(e) => ChangePage(e)}
                      >
                        2
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-transfer-page"
                        onClick={(e) => ChangePage(e)}
                      >
                        3
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-transfer-page"
                        onClick={(e) => ChangePage(e)}
                      >
                        4
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-transfer-page"
                        onClick={(e) => ChangePage(e)}
                      >
                        5
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col l-4 m-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieNewPage;
